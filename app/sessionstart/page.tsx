"use client";
import { vaiData } from "@/components/data/TableData/vaiAForm";
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
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import VaiTable from "@/components/VAITable";
import { setDefaultAutoSelectFamily } from "net";
import { useState } from "react";

export default function Session() {
  const [selectedType, setSelectedType] = useState<string>("VAI");
  const [selectedForm, setSelectedForm] = useState<string>("A FORM");
  const [selectedWord, setSelectedWord] = useState<string>("");
  const [selectedPerson, setSelectedPerson] = useState<string>("");
  const [selectedTense, setSelectedTense] = useState<string>("");
  const [selectedPerson2, setSelectedPerson2] = useState<string>("");

  const formLists: Record<string, Record<string, string[]>> = {
    VAI: { A: vaiWords, B: vaiWords, C: vaiWords },
    VII: { A: viiWords, B: viiWords, C: viiWords },
    VTA: { A: vtaWords, B: vtaWords, C: vtaWords },
    VTI: { A: vtiWords, B: vtiWords, C: vtiWords },
  };

  console.log(selectedPerson);

  const handleMenuSelection = (type: string, form: string) => {
    setSelectedType(type);
    setSelectedForm(form);
    setSelectedWord("");
  };

  const currentList = formLists[selectedType][selectedForm.split(" ")[0]]; // Get the list based on selected type and form

  const rows: JSX.Element[] = []; // Explicitly define the type
  let index = 0; // Index to manage rows

  while (index < vaiData.length) {
    const currentRow = vaiData[index];

    // Check if the current row should be rendered with a new <tr>
    rows.push(
      <tr key={`row-${index}`} className="border ">
        {/* ID Column */}
        <td rowSpan={currentRow.id?.rowspan} className="border  text-center">
          {currentRow.id?.text}
        </td>

        {/* Person Column */}
        <td
          /*  rowSpan={currentRow.Person?.rowspan} */
          className="border  text-center"
        >
          {currentRow.Person?.text} {currentRow.Person?.action}{" "}
          {currentRow.Person?.rules}
        </td>

        {/* Tense Column */}
        <td
          /* rowSpan={currentRow.tense.rowspan} */
          className="border text-center"
        >
          {currentRow.tense?.text} {currentRow.tense?.action}{" "}
          {currentRow.tense?.rules}
        </td>

        {/* Verb Column */}
        <td
          /* rowSpan={currentRow.verb?.rowspan} */
          className="border text-center"
        >
          {currentRow.verb?.text}
        </td>

        {/* Person2 Column */}
        <td
          /* rowSpan={currentRow.Person2?.rowspan} */
          className="border text-center"
        >
          {currentRow.Person2?.text} {currentRow.Person2?.action}{" "}
          {currentRow.Person2?.rules}
        </td>
      </tr>
    );

    // Skip rows based on rowspan of the ID
    index += 1;
  }

  // Use the rows in your <tbody>

  return (
    <main className="flex-1 flex-col items-center justify-center w-full max-w-8xl ">
      <Header2 />
      <section className="flex-1 flex-col items-center w-full max-w-8xl justify-center p-2 md:p-8 ">
        <div className="flex flex-col items-center justify-center bg-white p-2 md:p-12 w-full max-w-8xl rounded  gap-8 border-2 border-black">
          <Menubar className="flex-1 w-full items-center justify-between border-2 border-black shadow-3xl rounded-lg shadow-black">
            {["VAI", "VII", "VTA", "VTI"].map((type, index) => (
              <div
                key={type}
                className={`flex w-full p-2 -mr-1 hover:bg-[#D4FCFC] ${
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

          <div className="flex w-full flex-col md:flex-row-reverse mt-4  gap-4">
            <div className="flex flex-col w-full md:w-1/4 max-h-96 md:max-h-[600px]">
              <div className=" flex-col w-full rounded border border-black shadow-3xl shadow-black overflow-y-auto">
                <div className="border-b-1 p-2 border-black">
                  <h3 className="font-bold text-center">Word Bank</h3>
                </div>
                <div className="bg-gray-100 p-2 rounded">
                  {currentList.map((word, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <Button
                        variant="ghost"
                        onClick={() => setSelectedWord(word)}
                      >
                        {word}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-col w-full md:w-3/4">
              {/* <div className="overflow-x-auto border border-black rounded-lg shadw-lg shadow-black">
                <table className="min-w-full bg-white ">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2"> </th>
                      <th className="border px-4 py-2">Person</th>
                      <th className="border px-4 py-2">Tense</th>
                      <th className="border px-4 py-2">VAI</th>
                      <th className="border px-4 py-2">Person</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </table>
              </div> */}
              <VaiTable
                selectedWord={selectedWord}
                selectedPerson={selectedPerson}
                selectedTense={selectedTense}
                selectedPerson2={selectedPerson2}
                setSelectedPerson={setSelectedPerson}
                setSelectedTense={setSelectedTense}
                setSelectedPerson2={setSelectedPerson2}
              />
            </div>
          </div>

          <div className="flex items-start justify-start self-start">
            <p className="mt-4">
              After the verb is conjugated correctly, it will appear in the
              table below.
            </p>
          </div>

          <div
            style={{ overflowX: "auto" }}
            className="flex w-full md:w-3/4 self-start h-8 bg-[#7EE6D6] min-h-28 rounded-lg border border-black shadow-3xl shadow-black"
          >
            <div className="flex w-full flex-row items-center justify-center px-2 gap-4">
              {[
                selectedPerson,
                selectedTense,
                selectedWord,
                selectedPerson2,
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
          </div>

          <div className="overflow-x-auto w-full border border-black rounded-lg shadw-lg shadow-black">
            <table className="w-full bg-white ">
              <thead>
                <tr>
                  <th className="border px-4 py-2  "> </th>
                  <th className="border px-4 py-2 ">A Form</th>
                  <th className="border px-4 py-2">B Form</th>
                  <th className="border px-4 py-2">C Form</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
