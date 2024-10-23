interface Person {
  text: string;
  action: string;
  rules: string;
  rowspan: number;
}

interface RowData {
  id: { text: string; rowspan: number };
  Person: Person;
  tense: Person;
  verb: string;
  Person2: Person;
}

const tableData: RowData[] = [
  // Your existing data here
];
