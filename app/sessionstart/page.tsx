"use client";

import ConfirmResetDialog from "@/components/AlertDialog";
import { Combobox } from "@/components/ComboBox";
import vaiWords from "@/components/data/VAIList";
import viiWords from "@/components/data/VIIList";
import vtaWords from "@/components/data/VTAList";
import vtiWords from "@/components/data/VTIList";
import GenericCForm from "@/components/GenericCForm";
import Header2 from "@/components/Header2";
import {
  VAIItems,
  VIIItems,
  VTAItems,
  VTIItems,
} from "@/components/OutputTable/VAIAFormResult";

import ProtectedRoute from "@/components/ProtectedRoute";
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
import VaiFormATableNeg from "@/components/VAI/vaiAformTableNeg";
import VaiFormBTable from "@/components/VAI/vaiBformTable";
import VaiFormBTableNeg from "@/components/VAI/vaiBformTableNeg";
import ViiFormATable from "@/components/VII/viiAformTable";
import ViiFormATableNeg from "@/components/VII/viiAformTableNeg";
import ViiFormBTable from "@/components/VII/viiBformTable";
import ViiFormBTableNeg from "@/components/VII/viiBformTableNeg";
import ViiFormCTable from "@/components/VII/viiCformTable";
import ViiFormCTableNeg from "@/components/VII/viiCformTableNeg";
import VtaFormATable from "@/components/VTA/vtaAformTable";
import VtaFormATableNeg from "@/components/VTA/vtaAformTableNeg";
import VtaFormBTable from "@/components/VTA/vtaBformTable";
import VtaFormBTableNeg from "@/components/VTA/vtaBformTableNeg";
import VtiFormATable from "@/components/VTI/vtiAformTable";
import VtiFormATableNeg from "@/components/VTI/vtiAformTableNeg";
import VtiFormBTable from "@/components/VTI/vtiBformTable";
import VtiFormBTableNeg from "@/components/VTI/vtiBformTableNeg";

import jsPDF from "jspdf";
import "jspdf-autotable"; // Make sure to import the autoTable plugin
import { useEffect, useState } from "react";

type Form = "A" | "B" | "C";
export type Tense = "Past" | "Present" | "Future" | "Future2";
// Define the specific verb types
type VerbType = "VAI" | "VII" | "VTA" | "VTI";

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
  const [selectedType, setSelectedType] = useState<VerbType>("VAI");
  const [selectedForm, setSelectedForm] = useState<string>("A FORM");
  const [selectedWord, setSelectedWord] = useState<string>("");
  const [wordInVerb, setWordInVerb] = useState<string>(selectedWord);
  const [selectedPerson, setSelectedPerson] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);
  const [workingRowIndex, setWorkingRowIndex] = useState(-1);
  const [items, setItems] = useState<string[]>(VAIItems);

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

  // Effect to update conjugatedVerbs when items changes
  useEffect(() => {
    const initializeConjugatedVerbs = (length: number) => ({
      A: {
        Past: new Array(length).fill("-"),
        Present: new Array(length).fill("-"),
        Future: new Array(length).fill("-"),
        Future2: new Array(length).fill("-"),
      },
      B: {
        Past: new Array(length).fill("-"),
        Present: new Array(length).fill("-"),
        Future: new Array(length).fill("-"),
        Future2: new Array(length).fill("-"),
      },
      C: {
        Past: new Array(length).fill("-"),
        Present: new Array(length).fill("-"),
        Future: new Array(length).fill("-"),
        Future2: new Array(length).fill("-"),
      },
    });

    // Update conjugatedVerbs state whenever items changes or verb change dialog is called that reset all arrays back to 0
    if (conjugatedVerbs.A.Past.length < items.length)
      setConjugatedVerbs(initializeConjugatedVerbs(items.length));
  }, [items.length, isDialogOpen]); // Dependency on items.length to trigger the effect

  useEffect(() => {
    if (selectedType === "VAI") setItems(VAIItems);
    if (selectedType === "VII") setItems(VIIItems);
    if (selectedType === "VTA") setItems(VTAItems);
    if (selectedType === "VTI") setItems(VTIItems);
  }, [selectedType]);

  const renderFormComponent = () => {
    /*     const isBFormComplete =
      conjugatedVerbs.B.Past.length > 0 &&
      conjugatedVerbs.B.Present.length > 0 &&
      conjugatedVerbs.B.Future.length > 0 &&
      conjugatedVerbs.B.Future2.length > 0; */
    const isBFormComplete = !["Past", "Present", "Future", "Future2"].some(
      (tense) => conjugatedVerbs.B[tense as Tense].every((word) => word === "-")
    );

    switch (selectedType) {
      case "VAI":
        if (selectedForm === "A FORM") {
          return (
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "B FORM") {
          return (
            <VaiFormBTable
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "C FORM") {
          return <GenericCForm isBFormComplete={isBFormComplete} />;
        } else if (selectedForm === "A FORM-NEGATIVE") {
          return (
            <VaiFormATableNeg
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "B FORM-NEGATIVE") {
          return (
            <VaiFormBTableNeg
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "C FORM-NEGATIVE") {
          return <GenericCForm isBFormComplete={isBFormComplete} />;
        }
        // Handle B and C forms similarly
        break;
      // Handle VII, VTA, and VTI similarly
      case "VII":
        if (selectedForm === "A FORM") {
          return (
            <ViiFormATable
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "B FORM") {
          return (
            <ViiFormBTable
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "C FORM") {
          return (
            <ViiFormCTable
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
              setWorkingRowIndex={setWorkingRowIndex}
              setWordInVerb={(word) => setWordInVerb(word)}
            />
          );
        } else if (selectedForm === "A FORM-NEGATIVE") {
          return (
            <ViiFormATableNeg
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "B FORM-NEGATIVE") {
          return (
            <ViiFormBTableNeg
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "C FORM-NEGATIVE") {
          return (
            <ViiFormCTableNeg
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
              setWorkingRowIndex={setWorkingRowIndex}
              setWordInVerb={setWordInVerb}
            />
          );
        }
        break;
      case "VTA":
        if (selectedForm === "A FORM") {
          return (
            <VtaFormATable
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "B FORM") {
          return (
            <VtaFormBTable
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "C FORM") {
          return <GenericCForm isBFormComplete={isBFormComplete} />;
        } else if (selectedForm === "A FORM-NEGATIVE") {
          return (
            <VtaFormATableNeg
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "B FORM-NEGATIVE") {
          return (
            <VtaFormBTableNeg
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "C FORM-NEGATIVE") {
          return <GenericCForm isBFormComplete={isBFormComplete} />;
        }
        // Handle B and C forms similarly
        break;
      case "VTI":
        if (selectedForm === "A FORM") {
          return (
            <VtiFormATable
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "B FORM") {
          return (
            <VtiFormBTable
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "C FORM") {
          return <GenericCForm isBFormComplete={isBFormComplete} />;
        } else if (selectedForm === "A FORM-NEGATIVE") {
          return (
            <VtiFormATableNeg
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "B FORM-NEGATIVE") {
          return (
            <VtiFormBTableNeg
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
              setWorkingRowIndex={setWorkingRowIndex}
            />
          );
        } else if (selectedForm === "C FORM-NEGATIVE") {
          return <GenericCForm isBFormComplete={isBFormComplete} />;
        }
        // Handle B and C forms similarly
        break;
      default:
        return null;
    }
  };
  /*  // Effect to check when to set verbConjugated to true
  useEffect(() => {
    if (
      selectedWord &&
      (selectedForm === "B FORM" ||
        (selectedPerson && selectedForm != "B FORM")) &&
      (selectedForm === "B FORM-NEGATIVE" ||
        (selectedPerson && selectedForm != "B FORM-NEGATIVE")) &&
      selectedTense.tense &&
      selectedPerson2.person2
    ) {
      alert("conjgated");
      setVerbConjugated(true);
    } else {
      setVerbConjugated(false);
    }
  }, [
    selectedWord,
    selectedPerson,
    selectedTense,
    selectedPerson2,
    selectedForm,
  ]); */

  useEffect(() => {
    const isSelectedWordValid = !!selectedWord;
    const isPersonAlwaysEmpty =
      selectedForm === "B FORM" ||
      selectedForm === "B FORM-NEGATIVE" ||
      selectedType === "VII";

    const isPersonSelected = !!selectedPerson;
    const isTenseValid = !!selectedTense.tense;
    const isPerson2Selected = !!selectedPerson2.person2;

    // Verb conjugated when selectedWord exists, selectedForm is valid, and all other conditions are met
    if (
      isSelectedWordValid &&
      isTenseValid &&
      isPerson2Selected &&
      (isPersonAlwaysEmpty || isPersonSelected)
    ) {
      setVerbConjugated(true);
    } else {
      setVerbConjugated(false);
    }
  }, [
    selectedWord,
    selectedPerson,
    selectedTense,
    selectedPerson2,
    selectedForm,
  ]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    if (name) {
      setUserName(name);
    }
  }, []);

  useEffect(() => {
    console.log("word in useeffect", wordInVerb);
  }, [wordInVerb]);

  useEffect(() => {
    if (verbConjugated) {
      const tenseInVerb =
        selectedTense.tense === "e" ? "" : selectedTense.tense;

      const newConjugatedVerb = `${selectedPerson}${tenseInVerb.trim()}${wordInVerb}${
        selectedPerson2.person2
      }`;

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

        // Ensure the index is within bounds
        if (
          workingRowIndex < 0 ||
          workingRowIndex > prev[formKey][tenseKey].length
        ) {
          console.error(`Invalid index: ${workingRowIndex}`);
          return prev; // Return the previous state if the index is out of bounds
        }
        // Create a new array with the updated value at wrokingRowIndex
        const updatedArray = [...prev[formKey][tenseKey]];
        updatedArray[workingRowIndex - 1] = newConjugatedVerb;

        // Return the updated state
        return {
          ...prev,
          [formKey]: {
            ...prev[formKey],
            [tenseKey]: updatedArray,
          },
        };

        // Check for duplicates
        /* if (prev[formKey][tenseKey].includes(newConjugatedVerb)) {
          console.warn(`Duplicate verb not added: ${newConjugatedVerb}`);
          return prev; // Return the previous state if the verb already exists
        } */

        // Add the new conjugated verb
        /*  return {
          ...prev,
          [formKey]: {
            ...prev[formKey],
            [tenseKey]: [...prev[formKey][tenseKey], newConjugatedVerb],
          },
        }; */
      });

      resetStates();
    }
  }, [verbConjugated]);

  const handleCForm = (tenseKey: Tense, value: string) => {
    if (!value) return;

    // Split the value using "->" to get the parts
    const [oldValue, newValue] = value.split("->");

    setConjugatedVerbs((prev) => {
      // Create a new object for C, copying B's values
      const newCForm = {
        ...prev,
        C: {
          ...prev.C,
          [tenseKey]: [...prev.B[tenseKey]], // Copy the selected tense from B to C
        },
      };

      // Replace the first occurrence of the specified oldValue in the selected tense
      const updatedCArray = newCForm.C[tenseKey].map(
        (item) => item.replace(oldValue, newValue) // Replace oldValue with newValue
      );

      // Update the C form with the modified array
      return {
        ...newCForm,
        C: {
          ...newCForm.C,
          [tenseKey]: updatedCArray, // Replace with the updated array
        },
      };
    });

    //use value to replace first occurrence of string in value example gii->gaa
  };

  const resetStates = () => {
    setSelectedTense({ tense: "", type: "" });
    setSelectedPerson("");
    setSelectedPerson2({ person2: "", action: "", replaceString: "" });
    setVerbConjugated(false);
    setWordInVerb(selectedWord);
  };

  const handleMenuSelection = (type: VerbType, form: string) => {
    // Check if the type has changed
    const isTypeChange = type !== selectedType;

    // Reset arrays if changing to a Positive form from a Negative form or if type changes
    if (isTypeChange) {
      setSelectedWord("");
    }
    setSelectedTense({ tense: "", type: "" });
    setSelectedPerson("");
    setSelectedPerson2({ person2: "", action: "", replaceString: "" });
    setVerbConjugated(false);

    // Check if the conjugatedVerbs are already empty
    const areVerbsEmpty =
      conjugatedVerbs.A.Past.length === 0 &&
      conjugatedVerbs.A.Present.length === 0 &&
      conjugatedVerbs.A.Future.length === 0 &&
      conjugatedVerbs.A.Future2.length === 0 &&
      conjugatedVerbs.B.Past.length === 0 &&
      conjugatedVerbs.B.Present.length === 0 &&
      conjugatedVerbs.B.Future.length === 0 &&
      conjugatedVerbs.B.Future2.length === 0 &&
      conjugatedVerbs.C.Past.length === 0 &&
      conjugatedVerbs.C.Present.length === 0 &&
      conjugatedVerbs.C.Future.length === 0 &&
      conjugatedVerbs.C.Future2.length === 0;

    // If forms are already empty, return early
    if (areVerbsEmpty) {
      resetStates();
      setSelectedType(type);
      setSelectedForm(form);
      return;
    }
    // Determine if the selected form is changing from Negative to Positive
    const isFormChangeToPositive =
      (form === "A FORM" && selectedForm === "A FORM-NEGATIVE") ||
      (form === "B FORM" && selectedForm === "B FORM-NEGATIVE") ||
      (form === "C FORM" && selectedForm === "C FORM-NEGATIVE");

    // Determine if the selected form is changing from Positive to Negative
    const isFormChangeToNegative =
      (form.startsWith("A FORM-NEGATIVE") ||
        form.startsWith("B FORM-NEGATIVE") ||
        form.startsWith("C FORM-NEGATIVE")) &&
      !(
        selectedForm.startsWith("A FORM-NEGATIVE") ||
        selectedForm.startsWith("B FORM-NEGATIVE") ||
        selectedForm.startsWith("C FORM-NEGATIVE")
      );

    if (isFormChangeToPositive || isFormChangeToNegative || isTypeChange) {
      setPendingAction(() => () => {
        setConjugatedVerbs({
          A: { Past: [], Present: [], Future: [], Future2: [] },
          B: { Past: [], Present: [], Future: [], Future2: [] },
          C: { Past: [], Present: [], Future: [], Future2: [] },
        });
        if (isTypeChange) {
          //resetStates();
          setWordInVerb("");
        } else {
          /*  setSelectedTense({ tense: "", type: "" });
          setSelectedPerson("");
          setSelectedPerson2({ person2: "", action: "", replaceString: "" });
          setVerbConjugated(false); */
          //setWordInVerb("");
        }

        setSelectedType(type);
        setSelectedForm(form);
      });
      setIsDialogOpen(true);
    } else {
      setSelectedType(type);
      setSelectedForm(form);
    }
  };

  const handleWordSelection = (word: string) => {
    if (selectedWord === "") {
      setSelectedWord(word.toLowerCase());
      setWordInVerb(word.toLowerCase());
    } else {
      setPendingAction(() => () => {
        setConjugatedVerbs({
          A: { Past: [], Present: [], Future: [], Future2: [] },
          B: { Past: [], Present: [], Future: [], Future2: [] },
          C: { Past: [], Present: [], Future: [], Future2: [] },
        });
        resetStates();
        setSelectedWord(word.toLowerCase());
        setWordInVerb(word.toLowerCase());
      });
      setIsDialogOpen(true);
    }
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

        if (selectedForm === "C FORM" || selectedForm === "C FORM-NEGATIVE") {
          setWordInVerb(wordInVerb.slice(0, -1)); // Drop the last character
        } else {
          setWordInVerb(selectedWord.slice(0, -1)); // Drop the last character
        }
      } else if (replaceString.length > 1) {
        // If replaceString has more than one character, check if selectedWord ends with it
        if (selectedWord.endsWith(replaceString)) {
          // Drop the replaceString from the end of selectedWord
          if (selectedForm === "C FORM" || selectedForm === "C FORM-NEGATIVE") {
            setWordInVerb(wordInVerb.slice(0, -replaceString.length));
          } else {
            setWordInVerb(selectedWord.slice(0, -replaceString.length));
          }
        }
      }
    } else {
      if (selectedForm === "C FORM" || selectedForm === "C FORM-NEGATIVE") {
        //do nothing
      } else {
        setWordInVerb(selectedWord);
      }
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
      const headerText = `Name: ${userName}\nDate: ${new Date().toLocaleDateString()}`;
      doc.setFontSize(12); // Set font size if needed
      doc.text(headerText, 20, 40); // Adjust Y position to avoid overlap with logo

      // Add the table title (caption)
      doc.setFontSize(14);
      doc.text(`${selectedType} ${formType} - ${selectedWord}`, 105, 50, {
        align: "center",
      });

      const headers = ["", "Pronoun", "A Form", "B Form", "C Form"];
      const data: any = [];

      ["Past", "Present", "Future", "Future2"].forEach((tense, rowIndex) => {
        const row = [];
        // First column: Tense (Future2 → Future)
        row.push(tense === "Future2" ? "Future" : tense);

        // Second column: Custom Data (All items in the same cell, separated by new lines)
        row.push(items.length > 0 ? items.join("\n") : "");

        ["A", "B", "C"].forEach((form) => {
          const verbs = conjugatedVerbs[form as Form][tense as Tense];
          row.push(verbs ? verbs.join("\n") : ""); // Join verbs with newline or empty string if undefined
        });
        data.push(row);
      });

      doc.autoTable({
        head: [headers],
        body: data,
        startY: 60, // Adjust startY to account for header text
        styles: { fontSize: 10, cellPadding: 2 },
        columnStyles: {
          0: { cellWidth: 10, halign: "center", valign: "middle" }, // First column (Tense)
          1: { cellWidth: 30 }, // Second column (Custom data)
          2: { cellWidth: 50 }, // A Form
          3: { cellWidth: 50 }, // B Form
          4: { cellWidth: 50 }, // C Form
        },
        didParseCell: function (data: any) {
          if (data.column.index === 0) {
            data.cell.styles.fontStyle = "bold"; // Make it bold (optional)
            data.cell.text = data.cell.text.map((txt: string) =>
              txt.split("").join("\n\n").trim()
            ); // Rotate by breaking each letter into new lines
          }
        },
      });

      doc.save(`${selectedType}_conjugated_verbs.pdf`);
    };

    // Trigger image loading
    img.onerror = () => {
      console.error("Failed to load logo image.");
    };
  };

  const currentList = formLists[selectedType][selectedForm.split(" ")[0]]; // Get the list based on selected type and form

  const formType =
    selectedForm === "A FORM" ||
    selectedForm === "B FORM" ||
    selectedForm === "C FORM"
      ? "Positive"
      : "Negative";

  return (
    <ProtectedRoute>
      <main className="flex-1 flex-col items-center justify-center w-full max-w-8xl ">
        <Header2 onExport={exportTableToPDF} />
        <section className="flex-1 flex-col items-center w-full max-w-8xl justify-center p-2 md:p-8 ">
          <div className="flex flex-col items-center justify-center bg-white p-2 md:p-12 w-full max-w-8xl rounded  gap-8 border-2 border-black">
            <Menubar className="flex-1 w-full items-center justify-between border-2 border-black shadow-3xl rounded-lg shadow-black">
              {(["VAI", "VII", "VTA", "VTI"] as VerbType[]).map(
                (type, index) => (
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
                )
              )}
            </Menubar>

            <div className="flex items-start justify-start self-start">
              <ol className="self-start list-decimal list-outside ml-5">
                <li>Choose a verb from the Word Bank.</li>
                <li>
                  Make your selections from the center out, left to right or
                  right to left.
                </li>
                <li>Begin with A Form, then repeat for B Form and C Form.</li>
                <li>
                  Remember to export your completed work as a PDF before
                  switching to other verb types or negatives.
                </li>
              </ol>
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
                              handleWordSelection(word.toLowerCase());
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
                {renderFormComponent()}
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

            <div className="overflow-x-auto w-full border-2 border-black rounded-md shadow-3xl shadow-black">
              <table className="w-full bg-white ">
                <caption
                  style={{ textAlign: "center" }}
                  className="font-bold border border-black"
                >
                  {selectedType} {formType} - {selectedWord}
                </caption>
                <thead>
                  <tr>
                    <th className="w-1/60 border border-black border-t-0 px-4 py-2  ">
                      {" "}
                    </th>
                    <th className="w-1/6 border border-black border-t-0 px-4 py-2  ">
                      {" "}
                    </th>
                    <th className="w-1/3 border border-black  border-t-0 px-4 py-2 ">
                      A Form
                    </th>
                    <th className="w-1/3 border border-black  border-t-0 px-4 py-2">
                      B Form
                    </th>
                    <th className="w-1/3 border-black border   border-t-0 px-4 py-2">
                      C Form
                    </th>
                    {selectedType != "VII" &&
                      (selectedForm === "C FORM" ||
                        selectedForm === "C FORM-NEGATIVE") && (
                        <th className="w-1/6 border-black border border-t-0 py-2">
                          C Form Selection
                        </th>
                      )}
                  </tr>
                </thead>
                <tbody>
                  {(["Past", "Present", "Future", "Future2"] as Tense[]).map(
                    (tense, index) => (
                      <tr key={tense}>
                        <td className="border border-black p-2">
                          <div className="flex justify-center">
                            <span className="block transform rotate-90 whitespace-nowrap">
                              {tense === "Future2" ? "Future" : tense}
                            </span>
                          </div>
                        </td>
                        <td className="border border-black p-2">
                          {/* Verb specific */}
                          {/* {selectedType === "VAI" &&
                            selectedForm === "A FORM" && (
                              <VAIAFormResult index={index} />
                            )} */}
                          {items.map((item, idx) => (
                            <div
                              key={idx}
                              className={`p-2 rounded-md mb-2 whitespace-nowrap ${
                                idx % 2 === 0
                                  ? "bg-gray-100"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {item}
                            </div>
                          ))}
                        </td>
                        {["A", "B", "C"].map((form) => (
                          <td className="border border-black p-2" key={form}>
                            {/* {conjugatedVerbs[form as Form][tense as Tense].map(
                              (verb, index) => (
                                <div key={index}>{verb}</div>
                              )
                            )} */}
                            {items.map((_, idx) => (
                              <div
                                key={idx}
                                className={`p-2 rounded-md mb-2 whitespace-nowrap ${
                                  idx % 2 === 0
                                    ? "bg-gray-100"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                {conjugatedVerbs[form as Form][tense as Tense][
                                  idx
                                ] ?? "NA"}
                              </div>
                            ))}
                          </td>
                        ))}
                        {selectedType != "VII" &&
                          (selectedForm === "C FORM" ||
                            selectedForm === "C FORM-NEGATIVE") && (
                            <td className="border border-black p-2">
                              <Combobox
                                verbType={selectedType}
                                selectedWord={selectedWord}
                                tense={tense}
                                onSelect={(value) => handleCForm(tense, value)}
                              />
                            </td>
                          )}
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <ConfirmResetDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onConfirm={pendingAction ? pendingAction : () => {}}
        />
      </main>
    </ProtectedRoute>
  );
}
