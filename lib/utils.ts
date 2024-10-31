import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const shouldEnableButton = (
  rightWord: string,
  leftWord: string,
  rule: string,
  checkStart: boolean = true
): boolean => {
  if (!leftWord && !rightWord) return true;
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
      if (leftWord.length < 2) return false;
      const lastTwoChars = leftWord.slice(-2);
      const lastChar = lastTwoChars[1]; // Last character
      const secondLastChar = lastTwoChars[0]; // Second to last character

      return isShortVowel(lastChar) && lastChar !== secondLastChar;

    default:
      const startsWithLetter = checkStart
        ? letters.some((letter) => rightWord.startsWith(letter))
        : letters.some((letter) => leftWord.endsWith(letter));
      return startsWithLetter;
  }
};
export default shouldEnableButton;
