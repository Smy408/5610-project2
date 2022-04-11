import wordBankEasy from "./wordle-easybank.txt";
import wordBankMedium from "./wordle-mediumbank.txt";
import wordBankHard from "./wordle-hardbank.txt";

export const boardDefaults = [[
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
], 
[
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
], 
[
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
]];

export const generateWordSet = async (currentDifficulty) => {
  let wordSet;
  let todaysWord;
  if(currentDifficulty === 1) {
    await fetch(wordBankMedium)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split("\n");
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordArr);
      });
  } else if (currentDifficulty === 2) {
    await fetch(wordBankHard)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = result.split("\n");
        todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordArr);
      });
  } else {
    await fetch(wordBankEasy)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });
  }
  return { wordSet, todaysWord };
};
