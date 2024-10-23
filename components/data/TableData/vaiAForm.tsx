export const vaiData = [
  {
    id: { text: "I", rowspan: 3 },
    Person: { text: "ni-", action: "", rules: "", rowspan: 1 },
    tense: { text: "gii-", action: "", rules: "", rowspan: 1 },
    verb: { text: "", rowspan: 3 }, // Merged across three rows
    Person2: {
      text: "_",
      action: "-",
      rules: "(Drop short vowels: a,i,o)",
      rowspan: 3, // Adjusted to match the actual rowspan
    },
  },
  {
    id: { text: "", rowspan: 2 }, // Empty for merging
    Person: { text: "in-", action: "", rules: "(b,d,g)", rowspan: 2 },
    tense: { text: "d-", action: "", rules: "(V)", rowspan: 1 },
    verb: { text: "", rowspan: 2 }, // Merged with the previous row
    Person2: {
      text: "", // Empty for merging
      action: "",
      rules: "",
      rowspan: 2,
    },
  },
  {
    id: { text: "", rowspan: 1 }, // Empty for merging
    Person: { text: "", action: "", rules: "", rowspan: 1 },
    tense: { text: "wii-", action: "", rules: "", rowspan: 1 },
    verb: { text: "", rowspan: 2 }, // Merged with the previous row
    Person2: {
      text: "", // Empty for merging
      action: "",
      rules: "",
      rowspan: 2,
    },
  },
  {
    id: { text: "You", rowspan: 1 },
    Person: { text: "gi-", action: "", rules: "", rowspan: 1 },
    tense: { text: "ga-", action: "", rules: "", rowspan: 1 },
    verb: { text: "", rowspan: 1 },
    Person2: {
      text: "_",
      action: "-",
      rules: "",
      rowspan: 1,
    },
  },
];
