// Define the props interface
export interface TableProps {
  selectedWord: string;
  selectedPerson: string;
  selectedTense: string;
  selectedPerson2: string;
  setSelectedPerson: (person: string) => void;
  setSelectedTense: (tense: string, type: string) => void;
  setSelectedPerson2: (
    person2: string,
    action: string,
    replaceString?: string
  ) => void;
  verbConjugated: boolean; // New prop to handle reset
  setWorkingRowIndex: (rowIndex: number) => void;
  setWordInVerb?: (word: string) => void;
}

// Define the props interface
export interface CTableProps {
  selectedWord: string;
  selectedPerson: string;
  selectedTense: string;
  selectedPerson2: string;
  setSelectedPerson: (person: string) => void;
  setSelectedTense: (tense: string, type: string) => void;
  setSelectedPerson2: (
    person2: string,
    action: string,
    replaceString?: string
  ) => void;
  verbConjugated: boolean; // New prop to handle reset
  setWorkingRowIndex: (rowIndex: number) => void;
  setWordInVerb: (word: string) => void;
}
