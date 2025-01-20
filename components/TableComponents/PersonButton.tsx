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
}) => (
  <div>
    <Button
      variant="outline"
      className="mb-2"
      onClick={() => {
        setSelectedPerson(`${label}`);
        handleRowClick(rowIndex);
      }}
      disabled={
        !selectedWord ||
        (activeRow !== -1 && activeRow !== rowIndex) || // Ensure boolean
        (rule ? !shouldEnableButton(selectedTense, "", rule, true) : false) // Call only if rule is not empty
      }
    >
      {label}
    </Button>
    {suffix && <span>{suffix}</span>}
  </div>
);

export default PersonButton;
