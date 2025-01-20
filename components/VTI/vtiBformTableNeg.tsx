import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { TableProps } from "../TableTypes";
import shouldEnableButton from "@/lib/utils";
import PersonButton from "../TableComponents/PersonButton";
import TenseButtonGroup from "../TableComponents/TenseButtonGroup";
import DropShortVowel from "../TableComponents/DropShortVowelButton";
import EmptyButtonPerson2 from "../TableComponents/EmptyButtonPerson2";
import EmptyButtonPerson from "../TableComponents/EmptyButtonPerson";
import Person2RuleButton from "../TableComponents/Person2RuleButton";
import Person2RuleButtonRep from "../TableComponents/Person2RuleReplaceButton";

const VtiFormBTableNeg: React.FC<TableProps> = ({
  selectedWord,
  selectedPerson,
  selectedTense,
  selectedPerson2,
  setSelectedPerson,
  setSelectedTense,
  setSelectedPerson2,
  verbConjugated,
}) => {
  const [activeRow, setActiveRow] = useState<number>(-1);

  const handleRowClick = (rowIndex: number) => {
    setActiveRow(rowIndex);
  };

  const resetRows = () => {
    setActiveRow(-1);
  };

  useEffect(() => {
    resetRows(); // Call resetRows whenever selectedWord changes
  }, [selectedWord]);

  useEffect(() => {
    if (verbConjugated) {
      resetRows(); // Call resetRows when verbConjugated changes and is true
    }
  }, [verbConjugated]);

  return (
    <div
      style={{ overflowX: "auto" }}
      className="border border-black rounded-md shadow-3xl shadow-black"
    >
      <table
        border={1}
        cellPadding="10"
        cellSpacing="0"
        style={{ borderCollapse: "collapse", width: "100%" }}
        className="border border-black rounded-lg"
      >
        <caption
          style={{ textAlign: "center", margin: "10px 0" }}
          className="font-bold"
        >
          VTI - B Form - (__) I do not do to it
        </caption>
        <thead className="border border-black">
          <tr>
            <th className="border border-black"> </th>
            <th className="border border-black">Person</th>
            <th className="border border-black">Tense</th>
            <th className="border border-black">VAI</th>
            <th className="border border-black">Person</th>
          </tr>
        </thead>
        <tbody>
          {/*------------------ Row for "I" -----------------------------*/}
          <tr>
            <td className="border border-black">I - it</td>
            <td className="border border-black" rowSpan={9}>
              {/* Button for 'ni-' */}
              {/*  <EmptyButtonPerson
                activeRow={activeRow}
                rowIndex={0}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedWord={selectedWord}
              /> */}
            </td>
            <td className="border border-black" rowSpan={9}>
              <TenseButtonGroup
                labels={["gii", " ", "wii", "ji"]}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                rowIndex={0}
                selectedWord={selectedWord}
                setSelectedTense={setSelectedTense}
                selectedPerson={selectedPerson}
              />
            </td>
            {/* VAI Cell */}
            <td className="border border-black" rowSpan={9}>
              {selectedWord}
            </td>
            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oosiwaanh"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isiwaanh"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="isiwaanh"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
              />
            </td>
          </tr>

          {/* ------------Row for "You"------------------- */}
          <tr>
            <td className="border border-black">You - it</td>
            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oosiwan"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isiwan"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anziwan"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
              />
            </td>
          </tr>

          {/* ----------------Row for "S/he, it"----------------------*/}
          <tr>
            <td className="border border-black">S/he - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oosig"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isig"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anzig"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
              />
            </td>
          </tr>

          {/*------------ Row for "His/Her"------------------- */}
          <tr>
            <td className="border border-black">H/ - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oonsinig"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="insinig"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anzinig"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
              />
            </td>
          </tr>

          {/*---------------- Row for "Unspecified / X"------------------- */}
          <tr>
            <td className="border border-black">X - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oosing"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="ising"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anzing"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
              />
            </td>
          </tr>

          {/* ------------Row for "We (exclusive)"----------------- */}
          <tr>
            <td className="border border-black">We (exc) - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oosiwaang"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="oosiwaang"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anziwaang"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
              />
            </td>
          </tr>

          {/* ------------------Row for "We (inclusive)"------------------------ */}
          <tr>
            <td className="border border-black">We (inc) - it</td>
            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oosiwang"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isiwang"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anziwang"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
              />
            </td>
          </tr>

          {/* Row for "Y’all" */}
          <tr>
            <td className="border border-black">Y’all - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oosiweg"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isiweg"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anziweg"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
              />
            </td>
          </tr>

          {/* ----------------Row for "They"------------------- */}
          <tr>
            <td className="border border-black">They - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oosigwaa"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isigwaa"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anzigwaa"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VtiFormBTableNeg;
