// https://leetcode.com/problems/unique-morse-code-words/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  if (words.length === 1) return 1;
  const alphabet = Array.from(Array(26))
    .map((e, i) => i + 97)
    .map((x) => String.fromCharCode(x));
  const morsChar = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const obj = {};
  for (let k = 0; k < alphabet.length; k++) {
    obj[alphabet[k]] = morsChar[k];
  }
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    let str = "";
    for (let j = 0; j < words[i].length; j++) {
      str += obj[words[i][j]];
    }
    arr.push(str);
  }
  return [...new Set(arr)].length;
};

/*
Example 1:

Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".
Example 2:

Input: words = ["a"]
Output: 1
  */
