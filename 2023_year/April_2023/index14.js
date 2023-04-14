// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let c1 = s.charAt(0); // find first character of string c1 using charAt()
    let r1 = +(s.charAt(1)); // find r1 and make it number using +
    let c2 = s.charAt(3); // find c2
    let r2 = +(s.charAt(4)); // find r2
    let result = []; // Initialize an empty array
    for(let i=c1.charCodeAt(0); i<=c2.charCodeAt(0); i++){ // loop through the c1 to c2 by using charCodeAt()
        for(let j=r1; j<=r2; j++){ // loop through the r1 to r2
            result.push(`${String.fromCharCode(i)}${j}`); // push every character of c and r
        }
    }
    return result; // return the result
};

/*
Example 1:
Input: s = "K1:L2"
Output: ["K1","K2","L1","L2"]
Explanation:
The above diagram shows the cells which should be present in the list.
The red arrows denote the order in which the cells should be presented.


Example 2:
Input: s = "A1:F1"
Output: ["A1","B1","C1","D1","E1","F1"]
Explanation:
The above diagram shows the cells which should be present in the list.
The red arrow denotes the order in which the cells should be presented.
*/