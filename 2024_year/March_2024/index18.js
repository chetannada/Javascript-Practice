// https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/

/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
var countSubstrings = function (s, c) {

    // initialize m for counting total number of substrings
    let m = 0;

    // run for of loop for string s
    for (let char of s) {

        // if char is equal to c then increment m;
        if (char === c) {
            m++;
        }
    }

    // return answer in m * (m + 1) / 2 formate where m is count
    // m * (m + 1) / 2 is used to do sum of natural number start from 1 to m
    return (m * (m + 1)) / 2;
};

/*
You are given a string s and a character c. Return the total number of 
substrings
 of s that start and end with c.
*/


/*
Example 1:

Input: s = "abada", c = "a"

Output: 6

Explanation: Substrings starting and ending with "a" are: "abada", "abada", "abada", "abada", "abada", "abada".

Example 2:

Input: s = "zzz", c = "z"

Output: 6

Explanation: There are a total of 6 substrings in s and all start and end with "z".
*/


/*
Constraints:

1 <= s.length <= 105
s and c consist only of lowercase English letters.
*/