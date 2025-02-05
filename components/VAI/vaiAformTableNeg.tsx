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

const VaiFormATableNeg: React.FC<TableProps> = ({
  selectedWord,
  selectedPerson,
  selectedTense,
  selectedPerson2,
  setSelectedPerson,
  setSelectedTense,
  setSelectedPerson2,
  verbConjugated,
  setWorkingRowIndex,
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
          VAI - A Form - Independent - I am not
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
            <td className="border border-black">I</td>
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
                oppositeRule="(b,d,g)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={1}
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
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={1}
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
              <Person2RuleButton
                label="siin"
                suffix="(V) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
              />
              <Person2RuleButton
                label="ziin"
                suffix="(N) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n)"
              />
              <Person2RuleButtonRep
                label="nziin"
                suffix="(M) - >"
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(m)"
              />
            </td>
          </tr>

          {/* ------------Row for "You"------------------- */}
          <tr>
            <td className="border border-black">You</td>
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
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={2}
              />
            </td>
          </tr>

          {/* ----------------Row for "S/he, it"----------------------*/}
          <tr>
            <td className="border border-black">S/he, it</td>
            <td className="border border-black" rowSpan={3}>
              <EmptyButtonPerson
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson={setSelectedPerson}
                selectedWord={selectedWord}
              />
            </td>

            <td className="border border-black" rowSpan={3}>
              <TenseButtonGroup
                labels={["gii", " ", "wii", "da"]}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                rowIndex={1}
                selectedWord={selectedWord}
                setSelectedTense={setSelectedTense}
                selectedPerson={selectedPerson}
              />
            </td>
            <td className="flex flex-row border-b border-black">
              <Person2RuleButton
                label="siin"
                suffix="(V) - "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={3}
              />
              <Person2RuleButton
                label="ziin"
                suffix="(N) - "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={3}
              />
              <Person2RuleButtonRep
                label="nziin"
                suffix="(M) - >"
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(m)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={3}
              />
            </td>
          </tr>

          {/*------------ Row for "His/Her"------------------- */}
          <tr>
            <td className="border border-black">H/</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButton
                label="siiwan"
                suffix="(V) - "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={4}
              />
              <Person2RuleButton
                label="ziiwan"
                suffix="(N) - "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={4}
              />
              <Person2RuleButtonRep
                label="nziiwan"
                suffix="(M) - >"
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(m)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={4}
              />
            </td>
          </tr>

          {/*---------------- Row for "Unspecified / X"------------------- */}
          <tr>
            <td className="border border-black">Unspecified / X</td>

            <td className="flex flex-row ">
              <Person2RuleButton
                label="siim"
                suffix="(V) - "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={5}
              />
              <Person2RuleButton
                label="ziim"
                suffix="(N) - "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={5}
              />
              <Person2RuleButtonRep
                label="nziim"
                suffix="(M) - >"
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(m)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={5}
              />
            </td>
          </tr>

          {/* ------------Row for "We (exclusive)"----------------- */}
          <tr>
            <td className="border border-black">We (exclusive)</td>
            <td className="border border-black">
              {/* Button for 'ni-' */}
              <PersonButton
                label="ni"
                rule=""
                activeRow={activeRow}
                rowIndex={2}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
                oppositeRule="(b,d,g)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={6}
              />
              <PersonButton
                label="in"
                rule="(b,d,g)"
                activeRow={activeRow}
                rowIndex={2}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
                suffix=" - (b,d,g)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={6}
              />
            </td>
            <td className="border border-black" rowSpan={2}>
              <TenseButtonGroup
                labels={["gii", "d-(V)", "wii", "ga"]}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                rowIndex={2}
                selectedWord={selectedWord}
                setSelectedTense={setSelectedTense}
                selectedPerson={selectedPerson}
              />
            </td>
            <td rowSpan={2} className="flex flex-row  border-t border-black">
              <Person2RuleButton
                label="siimin"
                suffix="(V) - "
                rowIndex={2}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
              />
              <Person2RuleButton
                label="ziimin"
                suffix="(N) - "
                rowIndex={2}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n)"
              />
              <Person2RuleButtonRep
                label="nziimin"
                suffix="(M) - >"
                rowIndex={2}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(m)"
              />
            </td>
          </tr>

          {/* ------------------Row for "We (inclusive)"------------------------ */}
          <tr>
            <td className="border border-black">We (inclusive)</td>
            <td className="border border-black">
              <PersonButton
                label="gi"
                rule="(b,d,g)"
                activeRow={activeRow}
                rowIndex={2}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedTense={selectedTense}
                selectedWord={selectedWord}
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={7}
              />
            </td>
          </tr>

          {/* Row for "Y’all" */}
          <tr>
            <td className="border border-black">Y’all</td>
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
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={8}
              />
            </td>
            <td className="border border-black">
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
            <td className="flex flex-row border-t border-black">
              <Person2RuleButton
                label="siim"
                suffix="(V) - "
                rowIndex={3}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
              />
              <Person2RuleButton
                label="ziim"
                suffix="(N) - "
                rowIndex={3}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n)"
              />
              <Person2RuleButtonRep
                label="nziim"
                suffix="(M) - >"
                rowIndex={3}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(m)"
              />
            </td>
          </tr>

          {/* ----------------Row for "They"------------------- */}
          <tr>
            <td className="border border-black">They</td>
            <td className="border border-black">
              <EmptyButtonPerson
                rowIndex={4}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson={setSelectedPerson}
                selectedWord={selectedWord}
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={9}
              />
            </td>

            <td className="border border-black" rowSpan={3}>
              <TenseButtonGroup
                labels={["gii", " ", "wii", "da"]}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                rowIndex={4}
                selectedWord={selectedWord}
                setSelectedTense={setSelectedTense}
                selectedPerson={selectedPerson}
              />
            </td>
            <td className="border border-black">
              <Person2RuleButton
                label="siiwag"
                suffix="(V) - "
                rowIndex={4}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
              />
              <Person2RuleButton
                label="ziiwag"
                suffix="(N) - "
                rowIndex={4}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n)"
              />
              <Person2RuleButtonRep
                label="nziiwag"
                suffix="(M) - >"
                rowIndex={4}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(m)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VaiFormATableNeg;
