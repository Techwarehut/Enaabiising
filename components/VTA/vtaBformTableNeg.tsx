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

const VtaFormBTableNeg: React.FC<TableProps> = ({
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
          VTA - B Form - (__) I do not to h/
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
            <td className="border border-black">I-you</td>
            <td className="border border-black" rowSpan={7}>
              {/* Button for 'ni-' */}
              <EmptyButtonPerson
                activeRow={activeRow}
                rowIndex={0}
                setSelectedPerson={setSelectedPerson}
                handleRowClick={handleRowClick}
                selectedWord={selectedWord}
              />
            </td>
            <td className="border border-black" rowSpan={7}>
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
            <td className="border border-black" rowSpan={7}>
              {selectedWord}
            </td>
            <td className="flex flex-row ">
              <Person2RuleButtonRep
                label="nisinoonaanh"
                suffix="(zh) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(zh)"
              />
              <Person2RuleButton
                label="isinoonaanh"
                suffix="(m/n/’) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n,m,’)"
              />
              <Person2RuleButton
                label="isinoonaanh"
                suffix="(aw) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(aw)"
              />
            </td>
          </tr>

          {/* ------------Row for "You"------------------- */}
          <tr>
            <td className="border border-black">I - h/</td>

            <td className="flex flex-row border-t border-black">
              <Person2RuleButtonRep
                label="naasiwag"
                suffix="(zh) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(zh)"
              />
              <Person2RuleButton
                label="aasiwag"
                suffix="(m/n/’/aw) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n,m,’,aw)"
              />
            </td>
          </tr>

          {/* ----------------Row for "S/he, it"----------------------*/}
          <tr>
            <td className="border border-black">You - me</td>

            <td className="flex flex-row border-t border-b border-black">
              <Person2RuleButton
                label="isiwan"
                suffix="(zh/m/n/’/aw) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(zh,n,m,’,aw)"
              />
            </td>
          </tr>

          {/*------------ Row for "His/Her"------------------- */}
          <tr>
            <td className="border border-black">You - h/</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="naasiwad"
                suffix="(zh) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(zh)"
              />
              <Person2RuleButton
                label="aasiwad"
                suffix="(m/n/’/aw) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n,m,’,aw)"
              />
            </td>
          </tr>

          {/*---------------- Row for "Unspecified / X"------------------- */}
          <tr>
            <td className="border border-black">S/he - me</td>

            <td className="flex flex-row " rowSpan={2}>
              <Person2RuleButton
                label="isig"
                suffix="(zh/m/n/’/aw) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(zh,n,m,’,aw)"
              />
            </td>
          </tr>

          {/* ------------Row for "We (exclusive)"----------------- */}
          <tr>
            <td className="border border-black">S/he - you</td>
            <td className="flex flex-row border-t border-black">
              <Person2RuleButtonRep
                label="nisinok"
                suffix="(zh) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(zh)"
              />
              <Person2RuleButton
                label="isinok"
                suffix="(m/n/’) - "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n,m,’)"
              />
              <Person2RuleButton
                label="isinok"
                suffix="(aw) - "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(aw)"
              />
            </td>
          </tr>

          {/* ------------------Row for "We (inclusive)"------------------------ */}
          <tr>
            <td className="border border-black">S/he - h/</td>

            <td className="flex flex-row border-t border-black">
              <Person2RuleButtonRep
                label="naasig"
                suffix="(zh) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(zh)"
              />
              <Person2RuleButton
                label="aasig"
                suffix="(m/n/’/aw) - "
                rowIndex={1}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(n,m,’,aw)"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VtaFormBTableNeg;
