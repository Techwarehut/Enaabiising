// components/ActionButton.tsx
import React from "react";
import { Button } from "../ui/button";
import shouldEnableButton from "@/lib/utils";

interface ActionButtonProps {
  label: string;
  rule: string;
  activeRow: number;
  rowIndex: number;
  setSelectedPerson2: (
    value: string,
    action: string,
    replaceString: string
  ) => void;
  handleRowClick: (index: number) => void;
  selectedWord: string;
  suffix?: string; // Optional suffix prop
}

const Person2RuleButtonRep: React.FC<ActionButtonProps> = ({
  label,
  rule,
  activeRow,
  rowIndex,
  setSelectedPerson2,
  handleRowClick,
  selectedWord,
  suffix,
}) => {
  const handleClick = () => {
    const cleanedRule = rule.replace(/[()]/g, ""); // Removes parentheses
    setSelectedPerson2(`-${label}`, "replace", cleanedRule);
    handleRowClick(rowIndex); // Disable other rows
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

export default Person2RuleButtonRep;
