import React from "react";
import { Button } from "../ui/button";
import shouldEnableButton from "@/lib/utils";

interface PersonButtonProps {
  label: string;
  rule: string;
  activeRow: number;
  rowIndex: number;
  setSelectedPerson: (value: string) => void;
  handleRowClick: (index: number) => void;
  selectedTense: string;
  selectedWord: string;
  suffix?: string; // Optional suffix prop
  oppositeRule?: string;
  setWorkingRowIndex?: (rowIndex: number) => void;
  pronounRow?: number;
}

const PersonButton: React.FC<PersonButtonProps> = ({
  label,
  rule,
  activeRow,
  rowIndex,
  setSelectedPerson,
  handleRowClick,
  selectedTense,
  selectedWord,
  suffix,
  oppositeRule,
  setWorkingRowIndex,
  pronounRow,
}) => {
  const word = selectedTense === " " ? selectedWord : selectedTense;
  return (
    <div>
      <Button
        variant="outline"
        className="mb-2"
        onClick={() => {
          setSelectedPerson(`${label}`);
          handleRowClick(rowIndex);
          if (setWorkingRowIndex && pronounRow) setWorkingRowIndex(pronounRow);
        }}
        disabled={
          !selectedWord ||
          (activeRow !== -1 && activeRow !== rowIndex) || // Ensure boolean
          (rule ? !shouldEnableButton(word, "", rule, true) : false) || // Call only if rule is not empty
          (oppositeRule && selectedTense
            ? shouldEnableButton(word, "", oppositeRule, true)
            : false)
        }
      >
        {label}
      </Button>
      {suffix && <span>{suffix}</span>}
    </div>
  );
};

export default PersonButton;
