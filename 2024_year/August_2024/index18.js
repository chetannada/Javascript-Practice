// https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {

    // initialize count, zeroCount and oneCount as 0
    // count is for count substring and zeroCount is for count "0" in string and oneCount is for count "1" in string
    let count = 0, zeroCount = 0, oneCount = 0;

    // run loop from 0 index to length of s
    // initialize two pointer left and right for sliding window
    for (let left = 0, right = 0; left < s.length; left++) {

        // if left index of s is "0" then increment zeroCount else oneCount
        if (s[left] === "0") {
            zeroCount++;
        } else {
            oneCount++;
        }

        // run while loop until zeroCount is greater than k and oneCount is greater than k 
        while (zeroCount > k && oneCount > k) {

            // if right index of s is "0" then decrement zeroCount else oneCount
            if (s[right] === "0") {
                zeroCount--;
            } else {
                oneCount--;
            }

            // move right pointer towords right
            right++;
        }

        // update count with subtract right from left and add 1 
        count += left - right + 1;
    }

    return count;
};


/*
You are given a binary string s and an integer k.

A binary string satisfies the k-constraint if either of the following conditions holds:

The number of 0's in the string is at most k.
The number of 1's in the string is at most k.
Return an integer denoting the number of 
substrings
 of s that satisfy the k-constraint.
*/


/*
Example 1:

Input: s = "10101", k = 1

Output: 12

Explanation:

Every substring of s except the substrings "1010", "10101", and "0101" satisfies the k-constraint.

Example 2:

Input: s = "1010101", k = 2

Output: 25

Explanation:

Every substring of s except the substrings with a length greater than 5 satisfies the k-constraint.

Example 3:

Input: s = "11111", k = 1

Output: 15

Explanation:

All substrings of s satisfy the k-constraint.
*/


/*
Constraints:

1 <= s.length <= 50 
1 <= k <= s.length
s[i] is either '0' or '1'.
*/