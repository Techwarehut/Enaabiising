import React from "react";

interface VAIAFormResultProps {
  index: number;
}

export const items = [
  "I",
  "You",
  "S/he, it",
  "His/Her",
  "Unspecified / X",
  "We (exclusive)",
  "We (inclusive)",
  "Y’all",
  "They",
];

const VAIAFormResult: React.FC<VAIAFormResultProps> = ({ index }) => {
  const items = [
    "I",
    "You",
    "S/he, it",
    "His/Her",
    "Unspecified / X",
    "We (exclusive)",
    "We (inclusive)",
    "Y’all",
    "They",
  ];

  return (
    <div className="flex flex-col space-y-2">
      {items.map((item, i) => (
        <div key={i} className="p-2 bg-gray-100 rounded-md">
          {item}
        </div>
      ))}
    </div>
  );
};

export default VAIAFormResult;
