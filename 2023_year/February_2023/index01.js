// https://leetcode.com/problems/zigzag-conversion/description/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const arraySolution = new Array(numRows).fill("");
    let row = 0, step;
    for (let index = 0; index < s.length; index++){
        arraySolution[row] += s[index];
        if (row === 0) step = 1;
        if (row === numRows - 1) step = -1;
        row += step;
    }
    return arraySolution.join("");
};

console.log(convert("PAYPALISHIRING", 3));  // "PAHNAPLSIIGYIR"
/*
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Explanation:
P   A   H   N
A P L S I I G
Y   I   R
*/