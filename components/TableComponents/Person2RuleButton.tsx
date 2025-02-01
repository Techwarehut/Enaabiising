// components/ActionButton.tsx
import React from "react";
import { Button } from "../ui/button";
import shouldEnableButton from "@/lib/utils";

interface ActionButtonProps {
  label: string;
  rule: string;
  activeRow: number;
  rowIndex: number;
  setSelectedPerson2: (value: string, action: string) => void;
  handleRowClick: (index: number) => void;
  selectedWord: string;
  suffix?: string; // Optional suffix prop
  setWorkingRowIndex?: (rowIndex: number) => void;
  pronounRow?: number;
}

const Person2RuleButton: React.FC<ActionButtonProps> = ({
  label,
  rule,
  activeRow,
  rowIndex,
  setSelectedPerson2,
  handleRowClick,
  selectedWord,
  suffix,
  setWorkingRowIndex,
  pronounRow,
}) => {
  const handleClick = () => {
    setSelectedPerson2(`${label}`, "append");
    handleRowClick(rowIndex); // Disable other rows
    if (setWorkingRowIndex && pronounRow) setWorkingRowIndex(pronounRow);
  };

  return (
    <div className="mb-2">
      {suffix && <span>{suffix}</span>}
      <Button
        variant="outline"
        onClick={handleClick}
        disabled={
          !selectedWord ||
          (activeRow !== -1 && activeRow !== rowIndex) ||
          (rule ? !shouldEnableButton("", selectedWord, rule, false) : false)
        }
      >
        {label}
      </Button>
    </div>
  );
};

export default Person2RuleButton;
