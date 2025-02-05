import React from "react";
import { Button } from "../ui/button";
import shouldEnableButton from "@/lib/utils";
import { tenseBasedOptions } from "../data/CFormComboBox";

interface ButtonGroupProps {
  labels: string[];

  activeRow: number;
  handleRowClick: (rowIndex: number) => void;
  rowIndex: number; // The row index to be passed to handleRowClick
  selectedWord: string; // Add selectedWord prop
  setSelectedTense: (tense: string, time: string) => void; // Include this for tense setting
  selectedPerson: string;
  setWordInVerb: (word: string) => void;
  allowedActiveRows?: number[];
}

const TenseButtonGroupCForm: React.FC<ButtonGroupProps> = ({
  labels,

  activeRow,
  handleRowClick,
  rowIndex,
  selectedWord,
  setSelectedTense,
  selectedPerson,
  setWordInVerb,
  allowedActiveRows,
}) => {
  const tenses = ["Past", "Present", "Future", "Future2"];

  //special VII Cform handling for when "e" is selected.
  const getUpdatedWord = (selectedWord: string) => {
    const presentOptions = tenseBasedOptions.Present;
    const occurrenceMap = new Map<string, number>();

    presentOptions.forEach(({ value }) => {
      const [key] = value.split("->"); // Extract the key (e.g., "aa" from "aa->ayaa")
      const index = selectedWord.indexOf(key);

      if (index !== -1 && !occurrenceMap.has(key)) {
        occurrenceMap.set(key, index);
      }
    });

    // If no match found, return original word
    if (occurrenceMap.size === 0) return selectedWord;

    const entriesArray = Array.from(occurrenceMap.entries());
    const firstTransformationKey = entriesArray.sort(
      (a, b) => a[1] - b[1]
    )[0][0];

    // Find the corresponding transformation value
    const transformation = presentOptions.find(({ value }) =>
      value.startsWith(firstTransformationKey + "->")
    );

    if (!transformation) return selectedWord;

    const [key, replacement] = transformation.value.split("->");

    // Replace only the first occurrence
    return selectedWord.replace(key, replacement);
  };

  const isActiveRow = allowedActiveRows
    ? activeRow !== -1 && !allowedActiveRows.includes(activeRow) // Check if activeRow is NOT in allowedActiveRows
    : activeRow !== -1 && activeRow !== rowIndex; // Default condition when allowedActiveRows is empty

  return (
    <div>
      {labels.map((label, index) => {
        // Determine if the label is special
        const isSpecial = label === "e";

        // Determine the appropriate tense based on the tenses array
        const time = tenses[index]; // Get the corresponding tense

        return (
          <div key={index}>
            <Button
              variant="outline"
              className="mb-2"
              onClick={() => {
                if (!allowedActiveRows) handleRowClick(rowIndex); // Pass the same row index

                if (isSpecial) {
                  setSelectedTense(" ", time);
                  const newWord = getUpdatedWord(selectedWord);

                  setWordInVerb(newWord);
                } else {
                  setSelectedTense(label, time); // Set tense
                }
              }}
              disabled={
                !selectedWord || (activeRow !== -1 && activeRow !== rowIndex)
              }
            >
              {label}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default TenseButtonGroupCForm;
