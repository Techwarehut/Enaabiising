import React from "react";
import { Button } from "../ui/button";
import shouldEnableButton from "@/lib/utils";

interface ButtonGroupProps {
  labels: string[];

  activeRow: number;
  handleRowClick: (rowIndex: number) => void;
  rowIndex: number; // The row index to be passed to handleRowClick
  selectedWord: string; // Add selectedWord prop
  setSelectedTense: (tense: string, time: string) => void; // Include this for tense setting
  selectedPerson: string;
}

const TenseButtonGroup: React.FC<ButtonGroupProps> = ({
  labels,

  activeRow,
  handleRowClick,
  rowIndex,
  selectedWord,
  setSelectedTense,
  selectedPerson,
}) => {
  const tenses = ["Past", "Present", "Future", "Future2"];
  return (
    <div>
      {labels.map((label, index) => {
        // Determine if the label is special
        const isSpecial = label.includes("-(V)");
        const isVowel = selectedWord.match(/^[aeiou]/i);
        /*  const baseLabel = isSpecial
          ? selectedWord.startsWith("o")
            ? "do"
            : "d"
          : label; */

        const baseLabel = isSpecial
          ? isVowel // Check if it starts with a vowel
            ? selectedWord.startsWith("o")
              ? "do"
              : "d"
            : " " // Set to " " if it doesn't start with a vowel
          : label;

        // const tenseSuffix = `${baseLabel}-`;
        // Only append '-' if the label is not a space
        const tenseSuffix =
          baseLabel.trim() === "" || isSpecial ? baseLabel : `${baseLabel}-`;

        // Determine the appropriate tense based on the tenses array
        const time = tenses[index]; // Get the corresponding tense

        const ruleWord = baseLabel === " " ? selectedWord : baseLabel;
        return (
          <div key={index}>
            {isSpecial ? (
              <>
                <Button
                  variant="outline"
                  className="mb-2"
                  onClick={() => {
                    handleRowClick(rowIndex); // Pass the same row index

                    setSelectedTense(tenseSuffix, time); // Set tense
                  }}
                  disabled={
                    !selectedWord ||
                    (activeRow !== -1 && activeRow !== rowIndex) ||
                    (selectedPerson === "in" &&
                      !shouldEnableButton(ruleWord, "", "(b,d,g)", true)) ||
                    (selectedPerson === "ni" &&
                      shouldEnableButton(ruleWord, "", "(b,d,g)", true)) // Call only if rule is not empty
                  }
                >
                  {baseLabel}
                </Button>
                {isVowel && <span> -(V)</span>}
              </>
            ) : (
              <Button
                variant="outline"
                className="mb-2"
                onClick={() => {
                  handleRowClick(rowIndex); // Pass the same row index

                  setSelectedTense(tenseSuffix, time); // Set tense
                }}
                disabled={
                  !selectedWord ||
                  (activeRow !== -1 && activeRow !== rowIndex) ||
                  (selectedPerson === "in" &&
                    !shouldEnableButton(baseLabel, "", "(b,d,g)", true)) ||
                  (selectedPerson === "ni" &&
                    shouldEnableButton(baseLabel, "", "(b,d,g)", true)) // Call only if rule is not empty
                }
              >
                {baseLabel}
              </Button>
            )}
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default TenseButtonGroup;
