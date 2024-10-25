import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { TableProps } from "../TableTypes";
import shouldEnableButton from "@/lib/utils";
import PersonButton from "../TableComponents/PersonButton";
import TenseButtonGroup from "../TableComponents/TenseButtonGroup";

const VaiFormATable: React.FC<TableProps> = ({
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

  const handleRowClick = (rowIndex: number) => {
    setActiveRow(rowIndex);
  };

  const resetRows = () => {
    setActiveRow(-1);
  };

  useEffect(() => {
    resetRows(); // Call resetRows whenever selectedWord changes
  }, [selectedWord]);

  useEffect(() => {
    console.log("Iam here", verbConjugated);
    if (verbConjugated) {
      resetRows(); // Call resetRows when verbConjugated changes and is true
    }
  }, [verbConjugated]);

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
              <PersonButton
                label="ni"
                onClick={() => {
                  setSelectedPerson("ni-");
                  handleRowClick(0); // Disable other rows
                }}
                disabled={activeRow !== -1 && activeRow !== 0}
              />
              <PersonButton
                label="in"
                onClick={() => {
                  setSelectedPerson("in-");
                  handleRowClick(0);
                }}
                disabled={
                  !shouldEnableButton(selectedTense, "", "(b,d,g)", true) ||
                  (activeRow !== -1 && activeRow !== 0)
                }
                suffix=" -(b,d,g)"
              />
            </td>
            <td className="border border-black" rowSpan={2}>
              <TenseButtonGroup
                labels={["gii", "d-(V)", "wii", "ga"]}
                activeRow={activeRow}
                handleRowClick={handleRowClick}
                rowIndex={0}
                selectedWord={selectedWord}
                setSelectedTense={setSelectedTense}
              />
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
                  setSelectedPerson2("_", "replace", "V");
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
                  setSelectedPerson2(" ", "append");
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
                  setSelectedPerson2("_", "replace", "V");
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
            </td>
          </tr>

          {/* ----------------Row for "S/he, it"----------------------*/}
          <tr>
            <td className="border border-black">S/he, it</td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedPerson(" ");
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
                  setSelectedTense("gii-", "Past");
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
                  setSelectedTense(" ", "Present");
                  handleRowClick(1); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 1}
              ></Button>
              <br />
              <Button
                variant="outline"
                className="mb-1"
                onClick={() => {
                  setSelectedTense("wii-", "Future");
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
                  setSelectedTense("da-", "Future2");
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
                  setSelectedPerson2(" ", "append");
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
                  setSelectedPerson(" ");
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
                  setSelectedPerson2("-wan", "append");
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
                  setSelectedPerson2("-oon", "append");
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
                  setSelectedPerson(" ");
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
                  setSelectedPerson2("-oon", "append");
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
                  setSelectedPerson2("-im", "append");
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
                  setSelectedPerson2("-am", "append");
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
                  setSelectedTense("gii-", "Past");
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
                  setSelectedTense("d-", "Present");
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
                  setSelectedTense("wii-", "Future");
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
                  setSelectedTense("ga-", "Future2");
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
                  setSelectedPerson2("-min", "append");
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
                  setSelectedPerson2("-imin", "append");
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
                  setSelectedPerson2("-amin", "append");
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
                  setSelectedPerson2("-min", "append");
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
                  setSelectedPerson2("-imin", "append");
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
                  setSelectedPerson2("-amin", "append");
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
                  setSelectedPerson2("-oon", "append");
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
                  setSelectedPerson2("-im", "append");
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
                  setSelectedPerson2("-am", "append");
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
                  setSelectedPerson(" ");
                  handleRowClick(3); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 3}
              ></Button>
            </td>
            <td className="border border-black">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTense("gii-", "Past");
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
                  setSelectedTense(" ", "Present");
                  handleRowClick(3); // Disable other rows
                }}
                disabled={activeRow != -1 && activeRow != 3}
                className="mb-1"
              ></Button>
              <br />
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedTense("wii-", "Future");
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
                  setSelectedTense("da-", "Future");
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
                  setSelectedPerson2("-wag", "append");
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
                  setSelectedPerson2("-oog", "append");
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
    </div>
  );
};

export default VaiFormATable;
