import React from "react";
import { Button } from "../ui/button";

interface ButtonGroupProps {
  labels: string[];

  activeRow: number;
  handleRowClick: (rowIndex: number) => void;
  rowIndex: number; // The row index to be passed to handleRowClick
  selectedWord: string; // Add selectedWord prop
  setSelectedTense: (tense: string, time: string) => void; // Include this for tense setting
}

const TenseButtonGroup: React.FC<ButtonGroupProps> = ({
  labels,

  activeRow,
  handleRowClick,
  rowIndex,
  selectedWord,
  setSelectedTense,
}) => {
  const tenses = ["Past", "Present", "Future", "Future2"];
  return (
    <div>
      {labels.map((label, index) => {
        // Determine if the label is special
        const isSpecial = label.includes("-(V)");
        const baseLabel = isSpecial
          ? selectedWord.startsWith("o")
            ? "do"
            : "d"
          : label;
        const tenseSuffix = `${baseLabel}-`;

        // Determine the appropriate tense based on the tenses array
        const time = tenses[index]; // Get the corresponding tense

        return (
          <div key={index}>
            <Button
              variant="outline"
              className="mb-2"
              onClick={() => {
                handleRowClick(rowIndex); // Pass the same row index

                setSelectedTense(tenseSuffix, time); // Set tense
              }}
              disabled={activeRow !== -1 && activeRow !== rowIndex}
            >
              {baseLabel}
            </Button>
            {isSpecial && <span> -(V)</span>}
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default TenseButtonGroup;
