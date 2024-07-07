// https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/

/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {

    // initialize power as 2 to the power of n
    let power = Math.pow(2, n);

    // initialize result as empty array
    let result = [];

    // initialize function validStr() with padBin as parameter 
    function validStr(padBin) {

        // run for loop from 1 to length of padBin
        for (let j = 1; j < padBin.length; j++) {

            // if current and previous element of padBin is equal to "0" then return false
            if (padBin[j - 1] === "0" && padBin[j] === "0") {
                return false;
            }
        }

        // otherwise return true
        return true;
    }

    // run for loop fron index 0 to power
    for (let i = 0; i < power; i++) {

        // convert i to binary number
        let bin = i.toString(2);

        // padstart bin with value "0"
        let padBin = bin.padStart(n, "0");

        // invoke validStr(padBin) function with padBin as argument if it's true then push padBin in result 
        if (validStr(padBin)) {
            result.push(padBin);
        }

    }

    // return result
    return result;
};

/*
You are given a positive integer n.

A binary string x is valid if all 
substrings
 of x of length 2 contain at least one "1".

Return all valid strings with length n, in any order.
*/


/*
Example 1:

Input: n = 3

Output: ["010","011","101","110","111"]

Explanation:

The valid strings of length 3 are: "010", "011", "101", "110", and "111".

Example 2:

Input: n = 1

Output: ["0","1"]

Explanation:

The valid strings of length 1 are: "0" and "1".
*/


/*
Constraints:

1 <= n <= 18
*/