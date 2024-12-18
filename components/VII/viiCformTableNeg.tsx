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

const ViiFormCTableNeg: React.FC<TableProps> = ({
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
          VII - C Form - (__) It is not
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
          {/*------------------ Row for "It" -----------------------------*/}
          <tr>
            <td className="border border-black">It</td>
            <td className="border border-black" rowSpan={4}>
              <EmptyButtonPerson
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson={setSelectedPerson}
                selectedWord={selectedWord}
              />
            </td>
            <td className="border border-black" rowSpan={4}>
              <TenseButtonGroup
                labels={["gaa", "e", "waa", "ge"]}
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
              <Person2RuleButton
                label="sinog"
                suffix="(V) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
              />
              <Person2RuleButton
                label="zinog"
                suffix="(N) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n)"
              />
              <Person2RuleButtonRep
                label="sinog"
                suffix="(D) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(d)"
              />
            </td>
          </tr>

          {/* ------------Row for "They"------------------- */}
          <tr>
            <td className="border border-black">They</td>
            <td className="border border-black">
              <Person2RuleButton
                label="sinogin"
                suffix="(V) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
              />
              <Person2RuleButton
                label="zinogin"
                suffix="(N) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n)"
              />
              <Person2RuleButtonRep
                label="sinogin"
                suffix="(D) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(d)"
              />
            </td>
          </tr>

          {/* ----------------Row for "H/"----------------------*/}
          <tr>
            <td className="border border-black">H/</td>

            <td className="flex flex-row  border-black" rowSpan={2}>
              <Person2RuleButton
                label="sinoonig"
                suffix="(V) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(V)"
              />
              <Person2RuleButton
                label="zinoonig"
                suffix="(N) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n)"
              />
              <Person2RuleButtonRep
                label="sinoonig"
                suffix="(D) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(d)"
              />
            </td>
          </tr>

          {/*------------ Row for "H/s"------------------- */}
          <tr>
            <td className="border border-black">H/s</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViiFormCTableNeg;
