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

const VtiFormATableNeg: React.FC<TableProps> = ({
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
          VTI - A Form - I do not do to it
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
            <td className="border border-black">
              {/* Button for 'ni-' */}
              <PersonButton
                label="ni"
                rule=""
                activeRow={activeRow}
                rowIndex={0}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
              />
              <PersonButton
                label="in"
                rule="(b,d,g)"
                activeRow={activeRow}
                rowIndex={0}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
                suffix=" - (b,d,g)"
              />
            </td>
            <td className="border border-black" rowSpan={2}>
              <TenseButtonGroup
                labels={["gii", "d-(V)", "wii", "ga"]}
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
            <td className="border border-black" rowSpan={2}>
              <Person2RuleButtonRep
                label="oosiin"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isiin"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anziin"
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
            <td className="border border-black">
              <PersonButton
                label="gi"
                rule=""
                activeRow={activeRow}
                rowIndex={0}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
              />
            </td>
          </tr>

          {/* ----------------Row for "S/he, it"----------------------*/}
          <tr>
            <td className="border border-black">S/he - it</td>
            <td className="border border-black">
              <PersonButton
                label="wi"
                rule=""
                activeRow={activeRow}
                rowIndex={1}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
              />
            </td>

            <td className="border border-black" rowSpan={2}>
              <TenseButtonGroup
                labels={["gii", "d-(V)", "wii", "da"]}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                rowIndex={1}
                selectedWord={selectedWord}
                setSelectedTense={setSelectedTense}
                selectedPerson={selectedPerson}
              />
            </td>
            <td className="flex flex-row  border-black">
              <Person2RuleButtonRep
                label="oosiin"
                suffix="(oon) -> "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isiin"
                suffix="(in) -> "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anziin"
                suffix="(an) -> "
                rowIndex={1}
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
            <td className="border border-black">
              <PersonButton
                label="wi"
                rule=""
                activeRow={activeRow}
                rowIndex={1}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
              />
            </td>

            <td className="flex flex-row border-t border-black">
              <Person2RuleButtonRep
                label="oosiini"
                suffix="(oon) -> "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isiini"
                suffix="(in) -> "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anziini"
                suffix="(an) -> "
                rowIndex={1}
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
            <td className="border border-black">Unspecified / X</td>
            <td className="border border-black">
              <EmptyButtonPerson
                rowIndex={2}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson={setSelectedPerson}
                selectedWord={selectedWord}
              />
            </td>
            <td className="border border-black">
              <TenseButtonGroup
                labels={["gii", " ", "wii", "ga"]}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                rowIndex={2}
                selectedWord={selectedWord}
                setSelectedTense={setSelectedTense}
                selectedPerson={selectedPerson}
              />
            </td>

            <td className="flex flex-row border-t border-black">
              <Person2RuleButtonRep
                label="oosiim"
                suffix="(oon) -> "
                rowIndex={2}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isiim"
                suffix="(in) -> "
                rowIndex={2}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anziim"
                suffix="(an) -> "
                rowIndex={2}
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
            <td className="border border-black">
              {/* Button for 'ni-' */}
              <PersonButton
                label="ni"
                rule=""
                activeRow={activeRow}
                rowIndex={3}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
              />
              <PersonButton
                label="in"
                rule="(b,d,g)"
                activeRow={activeRow}
                rowIndex={3}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
                suffix=" - (b,d,g)"
              />
            </td>
            <td className="border border-black" rowSpan={3}>
              <TenseButtonGroup
                labels={["gii", "d-(V)", "wii", "ga"]}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                rowIndex={3}
                selectedWord={selectedWord}
                setSelectedTense={setSelectedTense}
                selectedPerson={selectedPerson}
              />
            </td>
            <td rowSpan={2} className="flex flex-row  border-t border-black">
              <Person2RuleButtonRep
                label="oosiinaa"
                suffix="(oon) -> "
                rowIndex={3}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isiinaa"
                suffix="(in) -> "
                rowIndex={3}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="anziinaa"
                suffix="(an) -> "
                rowIndex={3}
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
            <td className="border border-black">
              <PersonButton
                label="gi"
                rule=""
                activeRow={activeRow}
                rowIndex={3}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
              />
            </td>
          </tr>

          {/* Row for "Y’all" */}
          <tr>
            <td className="border border-black">Y’all - it</td>
            <td className="border border-black">
              <PersonButton
                label="gi"
                rule=""
                activeRow={activeRow}
                rowIndex={3}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
              />
            </td>
            <td className="flex flex-row border-t border-black">
              <Person2RuleButtonRep
                label="oosiinaawaa"
                suffix="(oon) -> "
                rowIndex={3}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isiinaawaa"
                suffix="(in) -> "
                rowIndex={3}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="isiinaawaa"
                suffix="(an) -> "
                rowIndex={3}
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
            <td className="border border-black">
              <PersonButton
                label="wi"
                rule=""
                activeRow={activeRow}
                rowIndex={4}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
              />
            </td>

            <td className="border border-black" rowSpan={3}>
              <TenseButtonGroup
                labels={["gii", "d-(V)", "wii", "da"]}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                rowIndex={4}
                selectedWord={selectedWord}
                setSelectedTense={setSelectedTense}
                selectedPerson={selectedPerson}
              />
            </td>
            <td className="border border-black">
              <Person2RuleButtonRep
                label="oosiinaawaa"
                suffix="(oon) -> "
                rowIndex={4}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
              />
              <Person2RuleButtonRep
                label="isiinaawaa"
                suffix="(in) -> "
                rowIndex={4}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
              />
              <Person2RuleButtonRep
                label="isiinaawaa"
                suffix="(an) -> "
                rowIndex={4}
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

export default VtiFormATableNeg;
