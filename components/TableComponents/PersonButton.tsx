import React from "react";
import { Button } from "../ui/button";

interface PersonButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  suffix?: string; // Optional prop
}

const PersonButton: React.FC<PersonButtonProps> = ({
  label,
  onClick,
  disabled = false,
  suffix,
}) => (
  <div>
    <Button
      variant="outline"
      className="mb-2"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
    {suffix && <span>{suffix}</span>}
  </div>
);

export default PersonButton;
