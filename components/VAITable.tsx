import React, { useState } from "react";
import { Button } from "./ui/button";

// Define the props interface
interface VaiTableProps {
  selectedWord: string;
  selectedPerson: string;
  selectedTense: string;
  selectedPerson2: string;
  setSelectedPerson: (person: string) => void;
  setSelectedTense: (tense: string) => void;
  setSelectedPerson2: (person: string) => void;
  verbConjugated: boolean; // New prop to handle reset
}

const VaiTable: React.FC<VaiTableProps> = ({
  selectedWord,
  selectedPerson,
  selectedTense,
  selectedPerson2,
  setSelectedPerson,
  setSelectedTense,
  setSelectedPerson2,
  verbConjugated,
}) => {
  const [activeRow, setActiveRow] = useState<number>(-1);

  const shouldEnableButton = (
    rightWord: string,
    leftWord: string,
    rule: string,
    checkStart: boolean = true
  ): boolean => {
    const isVowel = (char: string) => "AEIOUaeiou".includes(char);
    const isShortVowel = (char: string) => "aio".includes(char);

    const parseLetters = (rule: string) => {
      const match = rule.match(/\(([^)]+)\)/);
      return match ? match[1].split(",").map((letter) => letter.trim()) : [];
    };

    const letters = parseLetters(rule);

    switch (rule) {
      case "(V)":
        return checkStart
          ? rightWord.length > 0 && isVowel(rightWord[0])
          : leftWord.length > 0 && isVowel(leftWord[leftWord.length - 1]);

      case "(Drop short vowels: a, i, o)":
        return (
          leftWord.length > 0 && isShortVowel(leftWord[leftWord.length - 1])
        );

      default:
        const startsWithLetter = checkStart
          ? letters.includes(rightWord[0])
          : letters.includes(leftWord[leftWord.length - 1]);
        return startsWithLetter;
    }
  };

  const handleRowClick = (rowIndex: number) => {
    setActiveRow(rowIndex);
  };

  const resetRows = () => {
    // Reset all rows to enabled
    if (verbConjugated) {
      setActiveRow(-1);
    }
  };

  return (
    <div
      style={{ overflowX: "auto" }}
      className="border border-black rounded-md shadow-3xl shadow-black"
    >
      <table
        border={1}
        cellPadding="10"
        cellSpacing="0"
        style={{ borderCollapse: "collapse", width: "100%" }}
        className="border border-black rounded-lg"
      >
        <thead className="border border-black">
          <tr>
            <th className="border border-black"> </th>
            <th className="border border-black">Person</th>
            <th className="border border-black">Tense</th>
            <th className="border border-black">VAI</th>
            <th className="border border-black">Person</th>
          </tr>
        </thead>
        <tbody>
          {/*------------------ Row for "I" -----------------------------*/}
          <tr>
            <td className="border border-black">I</td>
            <td className="border border-black">
              {/* Button for 'ni-' */}
              <Button
                variant="outline"
                className="mb-2"
                onClick={() => {
                  setSelectedPerson("ni-");
                  handleRowClick(0); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 0}
              >
                ni
              </Button>
              <br />
              {/* Button for 'in-' */}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("in-");
                  handleRowClick(0); // Disable other rows
                }}
                disabled={
                  !shouldEnableButton(selectedTense, "", "(b,d,g)", true) ||
                  (activeRow != -1 && activeRow != 0)
                }
              >
                in
              </Button>{" "}
              -(b,d,g)
            </td>
            <td className="border border-black" rowSpan={2}>
              {/* Button for 'gii-' */}
              <Button
                variant="outline"
                className="mb-2"
                onClick={() => {
                  setSelectedTense("gii-");
                  handleRowClick(0); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 0}
              >
                gii
              </Button>
              <br />
              {/* Button for 'd-' */}
              <Button
                variant="outline"
                className="mb-2"
                onClick={() => {
                  setSelectedTense("d-");
                  handleRowClick(0); // Disable other rows
                }}
                disabled={
                  !shouldEnableButton(selectedWord, "", "(V)", true) ||
                  (activeRow != -1 && activeRow != 0)
                }
              >
                d
              </Button>{" "}
              -(V)
              <br />
              {/* Button for 'wii-' */}
              <Button
                variant="outline"
                className="mb-2"
                onClick={() => {
                  setSelectedTense("wii-");
                  handleRowClick(0); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 0}
              >
                wii
              </Button>
              <br />
              {/* Button for 'ga-' */}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTense("ga-");
                  handleRowClick(0); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 0}
              >
                ga
              </Button>
            </td>
            {/* VAI Cell */}
            <td className="border border-black" rowSpan={9}>
              {selectedWord}
            </td>
            <td className="border border-black">
              {/* Button for '_' */}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("_");
                  handleRowClick(0); // Disable other rows
                }}
                className="mb-2"
                disabled={
                  !shouldEnableButton(
                    "",
                    selectedWord,
                    "(Drop short vowels: a, i, o)",
                    false
                  ) ||
                  (activeRow != -1 && activeRow != 0)
                }
              >
                _
              </Button>{" "}
              (Drop short vowels: a, i, o)
              <br />
              {/* Empty Button */}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("");
                  handleRowClick(0); // Disable other rows
                }}
                disabled={
                  shouldEnableButton(
                    "",
                    selectedWord,
                    "(Drop short vowels: a, i, o)",
                    false
                  ) ||
                  (activeRow != -1 && activeRow != 0)
                }
              ></Button>
            </td>
          </tr>

          {/* ------------Row for "You"------------------- */}
          <tr>
            <td className="border border-black">You</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("gi-");
                  handleRowClick(0); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 0}
              >
                gi
              </Button>
            </td>

            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("_");
                  handleRowClick(0); // Disable other rows
                }}
                disabled={
                  shouldEnableButton(
                    "",
                    selectedWord,
                    "(Drop short vowels: a, i, o)",
                    false
                  ) ||
                  (activeRow != -1 && activeRow != 0)
                }
              >
                _
              </Button>{" "}
              (Drop short vowels: a, i, o)
            </td>
          </tr>

          {/* ----------------Row for "S/he, it"----------------------*/}
          <tr>
            <td className="border border-black">S/he, it</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              ></Button>
            </td>

            <td className="border border-black" rowSpan={3}>
              <Button
                variant="outline"
                className="mb-1"
                onClick={() => {
                  setSelectedTense("gii-");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              >
                gii
              </Button>
              <br />
              <Button
                variant="outline"
                className="mb-1"
                onClick={() => {
                  setSelectedTense("");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              ></Button>
              <br />
              <Button
                variant="outline"
                className="mb-1"
                onClick={() => {
                  setSelectedTense("wii-");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              >
                wii
              </Button>
              <br />
              <Button
                variant="outline"
                className="mb-1"
                onClick={() => {
                  setSelectedTense("da-");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              >
                da
              </Button>
            </td>
            <td>
              <Button
                variant="outline"
                className="mb-1"
                onClick={() => {
                  setSelectedTense("");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              ></Button>
            </td>
          </tr>

          {/*------------ Row for "His/Her"------------------- */}
          <tr>
            <td className="border border-black">His/Her</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              ></Button>
            </td>
            <td className="border border-black">
              (V) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-wan");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              >
                wan
              </Button>
              , (N/M) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-oon");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              >
                oon
              </Button>
            </td>
          </tr>

          {/*---------------- Row for "Unspecified / X"------------------- */}
          <tr>
            <td className="border border-black">Unspecified / X</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              ></Button>
            </td>
            <td className="border border-black">
              (V) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-oon");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              >
                m
              </Button>
              , (N) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-im");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              >
                im
              </Button>
              , (M) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-am");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              >
                am
              </Button>
            </td>
          </tr>

          {/* ------------Row for "We (exclusive)"----------------- */}
          <tr>
            <td className="border border-black">We (exclusive)</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("ni-");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
                className="mb-1"
              >
                ni
              </Button>
              <br />
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("in-");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={
                  !shouldEnableButton(selectedTense, "", "(b,d,g)", true) ||
                  (activeRow != -1 && activeRow != 2)
                }
              >
                in
              </Button>{" "}
              - (b,d,g)
            </td>
            <td className="border border-black" rowSpan={3}>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTense("gii-");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
                className="mb-1"
              >
                gii
              </Button>
              <br />
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTense("d-");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={
                  !shouldEnableButton(selectedWord, "", "(V)", true) ||
                  (activeRow != -1 && activeRow != 2)
                }
                className="mb-1"
              >
                d
              </Button>{" "}
              -(V)
              <br />
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTense("wii-");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
                className="mb-1"
              >
                wii
              </Button>
              <br />
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTense("ga-");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                ga
              </Button>
            </td>
            <td className="border border-black">
              (V) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-min");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                min
              </Button>
              , (N) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-imin");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                imin
              </Button>
              , (M)-{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-amin");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                amin
              </Button>
            </td>
          </tr>

          {/* ------------------Row for "We (inclusive)"------------------------ */}
          <tr>
            <td className="border border-black">We (inclusive)</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("gi-");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                gi
              </Button>
            </td>
            <td className="border border-black">
              {" "}
              (V) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-min");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                min
              </Button>
              , (N) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-imin");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                imin
              </Button>
              , (M)-{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-amin");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                amin
              </Button>
            </td>
          </tr>

          {/* Row for "Y’all" */}
          <tr>
            <td className="border border-black">Y’all</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("gi-");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                gi
              </Button>
            </td>
            <td className="border border-black">
              (V) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-oon");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                m
              </Button>
              , (N) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-im");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                im
              </Button>
              , (M) -{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-am");
                  handleRowClick(2); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 2}
              >
                am
              </Button>
            </td>
          </tr>

          {/* ----------------Row for "They"------------------- */}
          <tr>
            <td className="border border-black">They</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("");
                  handleRowClick(3); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 3}
              ></Button>
            </td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("gii-");
                  handleRowClick(3); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 3}
                className="mb-1"
              >
                gii
              </Button>
              <br />
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson("");
                  handleRowClick(3); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 3}
                className="mb-1"
              ></Button>
              <br />
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTense("wii-");
                  handleRowClick(3); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 3}
                className="mb-1"
              >
                wii
              </Button>
              <br />
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTense("da-");
                  handleRowClick(3); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 3}
              >
                da
              </Button>
            </td>
            <td className="border border-black">
              (V)-{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-wag");
                  handleRowClick(3); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 3}
              >
                wag
              </Button>
              , (N/M)-{" "}
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson2("-oog");
                  handleRowClick(3); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 3}
              >
                oog
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      {/* Reset button to re-enable all rows */}
      {verbConjugated && <Button onClick={resetRows}>Reset Rows</Button>}
    </div>
  );
};

export default VaiTable;
