// https://leetcode.com/problems/count-binary-substrings/description/


/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {

    // initialize count and prev to 0 and curr to 1
    let count = 0, prev = 0, curr = 1;

    // run for loop from index 1 to length of string s
    for (let i = 1; i < s.length; i++) {

        // If the current character is not the same as the previous character
        if (s[i] !== s[i - 1]) {

            // find minimum value from prev and curr group count
            count += Math.min(prev, curr);

            // update prev with curr value
            prev = curr;

            // reset curr group count to 1
            curr = 1;
        } else {
            // If the current character is the same as the previous character, increment the current group count.
            curr++;
        }
    }

    // return sum of count and minimum value from prev and curr group count
    return count + Math.min(prev, curr);
};


/*
Given a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.
*/


/*
Example 1:

Input: s = "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

Example 2:

Input: s = "10101"
Output: 4
Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
*/


/*
Constraints:

1 <= s.length <= 105
s[i] is either '0' or '1'.
*/

