"use client";

import vaiWords from "@/components/data/VAIList";
import viiWords from "@/components/data/VIIList";
import vtaWords from "@/components/data/VTAList";
import vtiWords from "@/components/data/VTIList";
import Header2 from "@/components/Header2";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import VaiFormATable from "@/components/VAI/vaiAformTable";

import jsPDF from "jspdf";
import "jspdf-autotable"; // Make sure to import the autoTable plugin
import { useEffect, useState } from "react";

type Form = "A" | "B" | "C";
type Tense = "Past" | "Present" | "Future" | "Future2";

type ConjugatedVerbs = {
  [key in Form]: {
    [key in Tense]: string[];
  };
};

// Module augmentation for jsPDF
declare module "jspdf" {
  interface jsPDF {
    autoTable: any; // You can refine this type further if needed
  }
}

export default function Session() {
  const [userName, setUserName] = useState("");
  const [selectedType, setSelectedType] = useState<string>("VAI");
  const [selectedForm, setSelectedForm] = useState<string>("A FORM");
  const [selectedWord, setSelectedWord] = useState<string>("");
  const [wordInVerb, setWordInVerb] = useState<string>(selectedWord);
  const [selectedPerson, setSelectedPerson] = useState<string>("");

  // Updated selectedTense to hold both tense and tense type
  const [selectedTense, setSelectedTense] = useState<{
    tense: string;
    type: string;
  }>({ tense: "", type: "" });

  // Updated selectedPerson2 to hold replace/append and replace string
  const [selectedPerson2, setSelectedPerson2] = useState<{
    person2: string;
    action: string;

    replaceString: string;
  }>({ person2: "", action: "", replaceString: "" });
  const [verbConjugated, setVerbConjugated] = useState<boolean>(false);

  const [conjugatedVerbs, setConjugatedVerbs] = useState<ConjugatedVerbs>({
    A: { Past: [], Present: [], Future: [], Future2: [] },
    B: { Past: [], Present: [], Future: [], Future2: [] },
    C: { Past: [], Present: [], Future: [], Future2: [] },
  });

  const formLists: Record<string, Record<string, string[]>> = {
    VAI: { A: vaiWords, B: vaiWords, C: vaiWords },
    VII: { A: viiWords, B: viiWords, C: viiWords },
    VTA: { A: vtaWords, B: vtaWords, C: vtaWords },
    VTI: { A: vtiWords, B: vtiWords, C: vtiWords },
  };

  // Effect to check when to set verbConjugated to true
  useEffect(() => {
    if (
      selectedWord &&
      selectedPerson &&
      selectedTense.tense &&
      selectedPerson2.person2
    ) {
      setVerbConjugated(true);
    } else {
      setVerbConjugated(false);
    }
  }, [selectedWord, selectedPerson, selectedTense, selectedPerson2]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    if (name) {
      setUserName(name);
    }
  }, []);

  useEffect(() => {
    if (verbConjugated) {
      const newConjugatedVerb = `${selectedPerson}${selectedTense.tense}${wordInVerb}${selectedPerson2.person2}`;

      const formKey = selectedForm.split(" ")[0] as Form;
      const tenseKey = selectedTense.type as Tense;

      setConjugatedVerbs((prev) => {
        // Ensure the form and tense keys are valid
        if (!prev[formKey]) {
          console.error(`Invalid form: ${formKey}`);
          return prev; // Return the previous state if invalid
        }

        if (!prev[formKey][tenseKey]) {
          console.error(`Invalid tense: ${tenseKey}`);
          return prev; // Return the previous state if invalid
        }

        // Check for duplicates
        if (prev[formKey][tenseKey].includes(newConjugatedVerb)) {
          console.warn(`Duplicate verb not added: ${newConjugatedVerb}`);
          return prev; // Return the previous state if the verb already exists
        }

        // Add the new conjugated verb
        return {
          ...prev,
          [formKey]: {
            ...prev[formKey],
            [tenseKey]: [...prev[formKey][tenseKey], newConjugatedVerb],
          },
        };
      });

      resetStates();
    }
  }, [verbConjugated]);

  const resetStates = () => {
    setSelectedTense({ tense: "", type: "" });
    setSelectedPerson("");
    setSelectedPerson2({ person2: "", action: "", replaceString: "" });
    setVerbConjugated(false);
    setWordInVerb("");
  };

  const handleMenuSelection = (type: string, form: string) => {
    setSelectedType(type);
    setSelectedForm(form);
    setSelectedWord("");
  };

  const handlePerson2Change = (
    person2: string,
    action: string,
    replaceString = ""
  ) => {
    // Set the new person2
    setSelectedPerson2({ action, person2, replaceString });

    // Handle the replace logic
    if (action === "replace") {
      if (replaceString.length === 1) {
        // If replaceString is a single character, remove it from the end of selectedWord

        setWordInVerb(selectedWord.slice(0, -1)); // Drop the last character
      } else if (replaceString.length > 1) {
        // If replaceString has more than one character, check if selectedWord ends with it
        if (selectedWord.endsWith(replaceString)) {
          // Drop the replaceString from the end of selectedWord
          setWordInVerb(selectedWord.slice(0, -replaceString.length));
        }
      }
    } else {
      setWordInVerb(selectedWord);
    }
  };

  const exportTableToPDF = () => {
    const doc = new jsPDF();

    const logoUrl = "/assets/images/logo.png"; // Ensure this path is correct
    const img = new Image();
    img.src = logoUrl;

    img.onload = () => {
      // Add the logo to the PDF
      doc.addImage(img, "PNG", 10, 10, 50, 20); // Adjust positioning and size as needed

      // Format header text
      const headerText = `Name: ${userName}\nDate: ${new Date().toLocaleDateString()}\nVerb Type: ${selectedType}`;
      doc.setFontSize(12); // Set font size if needed
      doc.text(headerText, 20, 40); // Adjust Y position to avoid overlap with logo

      const headers = ["Tense", "A Form", "B Form", "C Form"];
      const data: any = [];

      ["Past", "Present", "Future", "Future2"].forEach((tense) => {
        const row = [tense];
        ["A", "B", "C"].forEach((form) => {
          row.push(conjugatedVerbs[form as Form][tense as Tense].join("\n"));
        });
        data.push(row);
      });

      doc.autoTable({
        head: [headers],
        body: data,
        startY: 60, // Adjust startY to account for header text
      });

      doc.save(`${selectedType}_conjugated_verbs.pdf`);
    };

    // Trigger image loading
    img.onerror = () => {
      console.error("Failed to load logo image.");
    };
  };

  const currentList = formLists[selectedType][selectedForm.split(" ")[0]]; // Get the list based on selected type and form

  return (
    <main className="flex-1 flex-col items-center justify-center w-full max-w-8xl ">
      <Header2 onExport={exportTableToPDF} />
      <section className="flex-1 flex-col items-center w-full max-w-8xl justify-center p-2 md:p-8 ">
        <div className="flex flex-col items-center justify-center bg-white p-2 md:p-12 w-full max-w-8xl rounded  gap-8 border-2 border-black">
          <Menubar className="flex-1 w-full items-center justify-between border-2 border-black shadow-3xl rounded-lg shadow-black">
            {["VAI", "VII", "VTA", "VTI"].map((type, index) => (
              <div
                key={type}
                className={`flex w-full p-2  hover:bg-[#D4FCFC] ${
                  index === 0
                    ? "bg-[#F1CBFF] rounded-l-md border-r border-black"
                    : index === 1
                    ? "bg-[#FFE4C7] border-r border-black"
                    : index === 2
                    ? "bg-[#C0BFF9] border-r border-black"
                    : "bg-[#FBFDB6] rounded-r-lg"
                }`}
              >
                <MenubarMenu>
                  <MenubarTrigger className="flex-1 w-full text-lg">
                    {type}
                  </MenubarTrigger>
                  <MenubarContent>
                    {[
                      "A FORM",
                      "B FORM",
                      "C FORM",
                      "A FORM-NEGATIVE",
                      "B FORM-NEGATIVE",
                      "C FORM-NEGATIVE",
                    ].map((form) => (
                      <MenubarItem
                        key={form}
                        onClick={() => handleMenuSelection(type, form)}
                      >
                        {form}
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </MenubarMenu>
              </div>
            ))}
          </Menubar>

          <div className="flex items-start justify-start self-start">
            <p className="mt-4">
              Choose a verb from the Word Bank and make your selections from the
              centre out picking out the pieces to build up our verb. Begin with
              A Form, then repeat the process for B Form and C Form. Remember to
              export your completed work as a PDF before switching to other verb
              types or negatives.
            </p>
          </div>

          <div className="flex w-full flex-col md:flex-row-reverse mt-4  gap-4">
            <div className="flex flex-col w-full md:w-1/4 max-h-96 md:max-h-[600px]">
              <div className=" flex-col w-full rounded border border-black shadow-3xl shadow-black overflow-y-auto">
                <div className="border-b-1 py-2 border-black">
                  <h3 className="font-bold text-center">Word Bank</h3>
                </div>

                <div className="bg-gray-100 ">
                  <ScrollArea>
                    {currentList.map((word, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center"
                      >
                        <Button
                          variant="ghost"
                          onClick={() => {
                            setSelectedWord(word);
                            setWordInVerb(word);
                          }}
                        >
                          {word}
                        </Button>
                      </div>
                    ))}

                    <ScrollBar />
                  </ScrollArea>
                </div>
              </div>
            </div>

            <div className="flex-col w-full md:w-3/4">
              <VaiFormATable
                selectedWord={selectedWord}
                selectedPerson={selectedPerson}
                selectedTense={selectedTense.tense}
                selectedPerson2={selectedPerson2.person2}
                setSelectedPerson={setSelectedPerson}
                setSelectedTense={(tense, type) =>
                  setSelectedTense({ tense, type })
                }
                setSelectedPerson2={handlePerson2Change}
                verbConjugated={verbConjugated}
              />
            </div>
          </div>

          <div
            style={{ overflowX: "auto" }}
            className="flex w-full md:w-3/4 self-start h-8 bg-[#7EE6D6] min-h-28 rounded-lg border border-black shadow-3xl shadow-black"
          >
            <ScrollArea className="w-full whitespace-nowrap rounded-md border items-center justify-center">
              <div className="flex h-full flex-row items-center justify-center px-2 gap-4">
                {/* <div className="flex w-max space-x-4 p-4"> */}
                {[
                  selectedPerson,
                  selectedTense.tense,
                  selectedWord,
                  selectedPerson2.person2,
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col h-full flex-col items-center justify-between py-6 "
                  >
                    <span className="text-md md:text-lg">{item}</span>
                    {/* Prevents layout shift */}
                    <p className="text-2xl whitespace-nowrap">
                      -------------------
                    </p>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="overflow-x-auto w-full border border-black rounded-md shadow-3xl shadow-black">
            <table className="w-full bg-white ">
              <thead>
                <tr>
                  <th className="border border-black px-4 py-2  "> </th>
                  <th className="border border-black px-4 py-2 ">A Form</th>
                  <th className="border border-black px-4 py-2">B Form</th>
                  <th className="border-black border px-4 py-2">C Form</th>
                </tr>
              </thead>
              <tbody>
                {["Past", "Present", "Future", "Future2"].map((tense) => (
                  <tr key={tense}>
                    <td className="border border-black">
                      {tense === "Future2" ? "Future" : tense}
                    </td>
                    {["A", "B", "C"].map((form) => (
                      <td className="border border-black" key={form}>
                        {conjugatedVerbs[form as Form][tense as Tense].map(
                          (verb, index) => (
                            <div key={index}>{verb}</div>
                          )
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
