import React from "react";

interface CTableProps {
  bForm: {
    Past: string[];
    Present: string[];
    Future: string[];
    Future2: string[];
  };
}

const VaiFormCTable: React.FC<CTableProps> = ({ bForm }) => {
  const isBFormComplete =
    bForm.Past.length > 0 &&
    bForm.Present.length > 0 &&
    bForm.Future.length > 0 &&
    bForm.Future2.length > 0;

  return (
    <div>
      {!isBFormComplete ? (
        <div>Please complete the B Form.</div>
      ) : (
        <div>Scroll down to make your C Form selection.</div>
      )}
    </div>
  );
};

export default VaiFormCTable;
