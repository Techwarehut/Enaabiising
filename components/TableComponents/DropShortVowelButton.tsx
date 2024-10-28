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
    replaceString: string
  ) => void; // Include this for tense setting
}

const DropShortVowel: React.FC<PersonButtonProps> = ({
  activeRow,
  handleRowClick,
  rowIndex,
  selectedWord,
  setSelectedPerson2,
}) => (
  <div>
    <Button
      variant="outline"
      className="mb-2"
      onClick={() => {
        handleRowClick(rowIndex); // Pass the same row index

        setSelectedPerson2("_", "replace", "V"); // Set tense
      }}
      disabled={
        !selectedWord ||
        (activeRow !== -1 && activeRow !== rowIndex) ||
        !shouldEnableButton(
          "",
          selectedWord,
          "(Drop short vowels: a, i, o)",
          false
        )
      }
    >
      _
    </Button>
    (Drop short vowels: a, i, o)
  </div>
);

export default DropShortVowel;
