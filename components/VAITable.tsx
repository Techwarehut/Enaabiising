import React from "react";
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
}

const VaiTable: React.FC<VaiTableProps> = ({
  selectedWord,
  selectedPerson,
  selectedTense,
  selectedPerson2,
  setSelectedPerson,
  setSelectedTense,
  setSelectedPerson2,
}) => {
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
          <tr>
            <td className="border border-black">I</td>
            <td className="border border-black">
              <Button
                variant="outline"
                className="mb-2"
                onClick={() => setSelectedPerson("ni-")}
              >
                ni
              </Button>
              <br />
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("in-")}
                disabled={
                  !shouldEnableButton(selectedTense, "", "(b,d,g)", true)
                }
              >
                in
              </Button>{" "}
              -(b,d,g)
            </td>
            <td className="border border-black">
              <Button
                variant="outline"
                className="mb-2"
                onClick={() => setSelectedTense("gii-")}
              >
                gii
              </Button>
              <br />
              <Button
                variant="outline"
                className="mb-2"
                onClick={() => setSelectedTense("d-")}
                disabled={!shouldEnableButton(selectedWord, "", "(V)", true)}
              >
                d
              </Button>{" "}
              -(V)
              <br />
              <Button
                variant="outline"
                className="mb-2"
                onClick={() => setSelectedTense("wii-")}
              >
                wii
              </Button>
              <br />
              <Button variant="outline" onClick={() => setSelectedTense("ga-")}>
                ga
              </Button>
            </td>
            <td className="border border-black" rowSpan={9}>
              {selectedWord}
            </td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => setSelectedPerson2("_")}
                className="mb-2"
                disabled={
                  !shouldEnableButton(
                    "",
                    selectedWord,
                    "(Drop short vowels: a, i, o)",
                    false
                  )
                }
              >
                _
              </Button>{" "}
              (Drop short vowels: a, i, o)
              <br />
              <Button
                variant="outline"
                onClick={() => setSelectedPerson2("_")}
                disabled={shouldEnableButton(
                  "",
                  selectedWord,
                  "(Drop short vowels: a, i, o)",
                  false
                )}
              ></Button>
            </td>
          </tr>

          <tr>
            <td className="border border-black">You</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("gi-")}
              >
                gi
              </Button>
            </td>
            <td className="border border-black">
              <Button
                variant="outline"
                className="mb-1"
                onClick={() => setSelectedTense("gii-")}
              >
                gii
              </Button>
            </td>
            <td className="border border-black">
              (Drop short vowels: a, i, o)
            </td>
          </tr>

          <tr>
            <td className="border border-black">S/he, it</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("gi-")}
              ></Button>
            </td>

            <td className="border border-black" rowSpan={3}>
              {" "}
              <Button
                variant="outline"
                className="mb-1"
                onClick={() => setSelectedTense("gii-")}
              >
                gii
              </Button>
              <br />
              <Button
                variant="outline"
                className="mb-1"
                onClick={() => setSelectedTense("")}
              ></Button>
              <br />
              <Button
                variant="outline"
                className="mb-1"
                onClick={() => setSelectedTense("wii-")}
              >
                wii
              </Button>
              <br />
              <Button
                variant="outline"
                className="mb-1"
                onClick={() => setSelectedTense("da-")}
              >
                da
              </Button>
            </td>
          </tr>
          <tr>
            <td className="border border-black">His/Her</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("")}
              ></Button>
            </td>

            <td className="border border-black">(V)-wan, (N/M)-oon</td>
          </tr>
          <tr>
            <td className="border border-black">Unspecified / X</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("")}
              ></Button>
            </td>

            <td className="border border-black">(V)-m, (N)-im, (M)-am</td>
          </tr>

          <tr>
            <td className="border border-black">We (exclusive)</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("ni-")}
                className="mb-1"
              >
                ni
              </Button>
              <br />
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("in-")}
                disabled={
                  !shouldEnableButton(selectedTense, "", "(b,d,g)", true)
                }
              >
                in
              </Button>{" "}
              - (b,d,g)
            </td>
            <td className="border border-black" rowSpan={3}>
              <Button
                variant="outline"
                onClick={() => setSelectedTense("gii-")}
                className="mb-1"
              >
                gii
              </Button>
              <br />
              <Button
                variant="outline"
                onClick={() => setSelectedTense("d-")}
                disabled={!shouldEnableButton(selectedWord, "", "(V)", true)}
                className="mb-1"
              >
                d
              </Button>{" "}
              -(V)
              <br />
              <Button
                variant="outline"
                onClick={() => setSelectedTense("wii-")}
                className="mb-1"
              >
                wii
              </Button>
              <br />
              <Button variant="outline" onClick={() => setSelectedTense("ga-")}>
                ga
              </Button>
            </td>
            <td className="border border-black">(V)-min, (N)-imin, (M)-amin</td>
          </tr>

          <tr>
            <td className="border border-black">We (inclusive)</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("gi-")}
              >
                gi
              </Button>
            </td>

            <td className="border border-black">(V)-min, (N)-imin, (M)-amin</td>
          </tr>
          <tr>
            <td className="border border-black">Y’all</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("gi-")}
              >
                gi
              </Button>
            </td>

            <td className="border border-black">(V)-m, (N)-im, (M)-am</td>
          </tr>
          <tr>
            <td className="border border-black">They</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("")}
              ></Button>
            </td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("gii-")}
                className="mb-1"
              >
                gii
              </Button>
              <br />
              <Button
                variant="outline"
                onClick={() => setSelectedPerson("")}
                className="mb-1"
              ></Button>
              <br />
              <Button
                variant="outline"
                onClick={() => setSelectedTense("wii-")}
                className="mb-1"
              >
                wii
              </Button>
              <br />
              <Button
                variant="outline"
                onClick={() => setSelectedTense("da-")}
                disabled={
                  !shouldEnableButton(selectedWord, "", "(b,d,g)", false)
                }
              >
                da
              </Button>
            </td>
            <td className="border border-black">(V)-wag, (N/M)-oog</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VaiTable;
