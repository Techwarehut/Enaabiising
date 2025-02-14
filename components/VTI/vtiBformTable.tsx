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

const VtiFormBTable: React.FC<TableProps> = ({
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
          VTI - B Form - (__) I do to it
        </caption>
        <thead className="border border-black">
          <tr>
            <th className="border border-black"> </th>
            <th className="border border-black">Person</th>
            <th className="border border-black">Tense</th>
            <th className="border border-black">VTI</th>
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
                label="ooyaanh"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={1}
              />
              <Person2RuleButtonRep
                label="iyaanh"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={1}
              />
              <Person2RuleButtonRep
                label="amaanh"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={1}
              />
            </td>
          </tr>

          {/* ------------Row for "You"------------------- */}
          <tr>
            <td className="border border-black">You - it</td>
            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="ooyin"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={2}
              />
              <Person2RuleButtonRep
                label="iyin"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={2}
              />
              <Person2RuleButtonRep
                label="aman"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={2}
              />
            </td>
          </tr>

          {/* ----------------Row for "S/he, it"----------------------*/}
          <tr>
            <td className="border border-black">S/he - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="ood"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={3}
              />
              <Person2RuleButtonRep
                label="id"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={3}
              />
              <Person2RuleButtonRep
                label="g"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={3}
              />
            </td>
          </tr>

          {/*------------ Row for "His/Her"------------------- */}
          <tr>
            <td className="border border-black">H/ - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oonid"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={4}
              />
              <Person2RuleButtonRep
                label="inid"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={4}
              />
              <Person2RuleButtonRep
                label="aminid"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={4}
              />
            </td>
          </tr>

          {/*---------------- Row for "Unspecified / X"------------------- */}
          <tr>
            <td className="border border-black">X - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oong"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={5}
              />
              <Person2RuleButtonRep
                label="ing"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={5}
              />
              <Person2RuleButtonRep
                label="aming"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={5}
              />
            </td>
          </tr>

          {/* ------------Row for "We (exclusive)"----------------- */}
          <tr>
            <td className="border border-black">We (exc) - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="ooyaang"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={6}
              />
              <Person2RuleButtonRep
                label="iyaang"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={6}
              />
              <Person2RuleButtonRep
                label="amaang"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={6}
              />
            </td>
          </tr>

          {/* ------------------Row for "We (inclusive)"------------------------ */}
          <tr>
            <td className="border border-black">We (inc) - it</td>
            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="ooying"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={7}
              />
              <Person2RuleButtonRep
                label="iying"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={7}
              />
              <Person2RuleButtonRep
                label="amang"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={7}
              />
            </td>
          </tr>

          {/* Row for "Y’all" */}
          <tr>
            <td className="border border-black">Y’all - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="ooyig"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={8}
              />
              <Person2RuleButtonRep
                label="iyig"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={8}
              />
              <Person2RuleButtonRep
                label="amiig"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={8}
              />
            </td>
          </tr>

          {/* ----------------Row for "They"------------------- */}
          <tr>
            <td className="border border-black">They - it</td>

            <td className="flex flex-row border-b border-black">
              <Person2RuleButtonRep
                label="oowaad"
                suffix="(oon) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(oon)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={9}
              />
              <Person2RuleButtonRep
                label="iwaad"
                suffix="(in) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(in)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={9}
              />
              <Person2RuleButtonRep
                label="amowaad"
                suffix="(an) -> "
                rowIndex={0}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                setSelectedPerson2={setSelectedPerson2}
                selectedWord={selectedWord}
                rule="(an)"
                setWorkingRowIndex={setWorkingRowIndex}
                pronounRow={9}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VtiFormBTable;
