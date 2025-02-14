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

const ViiFormATable: React.FC<TableProps> = ({
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
          VII - A Form - It is
        </caption>
        <thead className="border border-black">
          <tr>
            <th className="border border-black"> </th>
            <th className="border border-black">Person</th>
            <th className="border border-black">Tense</th>
            <th className="border border-black">VII</th>
            <th className="border border-black">Person</th>
          </tr>
        </thead>
        <tbody>
          {/*------------------ Row for "It" -----------------------------*/}
          <tr>
            <td className="border border-black">It</td>
            <td className="border border-black" rowSpan={4}>
              {/*  <EmptyButtonPerson
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson={setSelectedPerson}
                selectedWord={selectedWord}
              /> */}
            </td>
            <td className="border border-black" rowSpan={4}>
              <TenseButtonGroup
                labels={["gii", " ", "wii", "da"]}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                rowIndex={0}
                selectedWord={selectedWord}
                setSelectedTense={setSelectedTense}
                selectedPerson={selectedPerson}
              />
            </td>
            {/* VAI Cell */}
            <td className="border border-black" rowSpan={4}>
              {selectedWord}
            </td>
            <td className="border border-black">
              {/* Empty Button */}
              <EmptyButtonPerson2
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                rowIndex={0}
                selectedWord={selectedWord}
                setSelectedPerson2={setSelectedPerson2}
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={1}
              />
            </td>
          </tr>

          {/* ------------Row for "They"------------------- */}
          <tr>
            <td className="border border-black">They</td>
            <td className="flex flex-row border-b border-black">
              <Person2RuleButton
                label="noon"
                suffix="(V) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={2}
              />
              <Person2RuleButton
                label="oon"
                suffix="(D/N) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(d,n)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={2}
              />
            </td>
          </tr>

          {/* ----------------Row for "H/"----------------------*/}
          <tr>
            <td className="border border-black">H/</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButton
                label="ni"
                suffix="(V) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={3}
              />
              <Person2RuleButton
                label="ini"
                suffix="(D/N) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(d,n)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={3}
              />
            </td>
          </tr>

          {/*------------ Row for "H/s"------------------- */}
          <tr>
            <td className="border border-black">H/s</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButton
                label="niwan"
                suffix="(V) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={4}
              />
              <Person2RuleButton
                label="iniwan"
                suffix="(D/N) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(d,n)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={4}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViiFormATable;
