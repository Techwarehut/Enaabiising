import React from "react";
import { Button } from "../ui/button";
import shouldEnableButton from "@/lib/utils";

interface PersonButtonProps {
  activeRow: number;
  handleRowClick: (rowIndex: number) => void;

  rowIndex: number; // The row index to be passed to handleRowClick
  selectedWord: string; // Add selectedWord prop
  setSelectedPerson2: (
    person2: string,
    action: string,
    replaceString?: string
  ) => void; // Include this for tense setting
  setWorkingRowIndex?: (rowIndex: number) => void;
  pronounRow?: number;
}

const EmptyButtonPerson2: React.FC<PersonButtonProps> = ({
  activeRow,
  handleRowClick,
  rowIndex,
  selectedWord,
  setSelectedPerson2,
  setWorkingRowIndex,
  pronounRow,
}) => (
  <div>
    <Button
      variant="outline"
      className="mb-2"
      onClick={() => {
        setSelectedPerson2(" ", "append");
        handleRowClick(rowIndex); // Disable other rows
        if (setWorkingRowIndex && pronounRow) setWorkingRowIndex(pronounRow);
      }}
      disabled={
        (activeRow != -1 && activeRow != rowIndex) ||
        shouldEnableButton(
          "",
          selectedWord,
          "(Drop short vowels: a, i, o)",
          false
        )
      }
    ></Button>
  </div>
);

export default EmptyButtonPerson2;
