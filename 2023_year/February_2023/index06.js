// https://leetcode.com/problems/integer-to-roman/description/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let romanNumber = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  if (num === 0) {
    return "";
  }
  // use for loop to iterate romanNumber
  for (let i = 0; i < romanNumber.length; i++) {
    if (num >= romanNumber[i][1]) {
      // returns one letter and then function calls itself to return the next letter if condtion satisfied.
      let result = romanNumber[i][0] + intToRoman(num - romanNumber[i][1]);
      return result;
    }
  }
};

console.log(intToRoman(1994)); // "MCMXCIV"

/*
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
