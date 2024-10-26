import React from "react";
import { Button } from "../ui/button";
import shouldEnableButton from "@/lib/utils";

interface PersonButtonProps {
  activeRow: number;
  handleRowClick: (rowIndex: number) => void;

  rowIndex: number; // The row index to be passed to handleRowClick

  setSelectedPerson: (person: string) => void; // Include this for tense setting
}

const EmptyButtonPerson: React.FC<PersonButtonProps> = ({
  activeRow,
  handleRowClick,
  rowIndex,

  setSelectedPerson,
}) => (
  <div>
    <Button
      variant="outline"
      className="mb-2"
      onClick={() => {
        setSelectedPerson(" ");
        handleRowClick(rowIndex); // Disable other rows
      }}
      disabled={activeRow != -1 && activeRow != rowIndex}
    ></Button>
  </div>
);

export default EmptyButtonPerson;
