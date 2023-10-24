// https://leetcode.com/problems/power-of-four/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {

    // divide Math.log(n) by Math.log(4) and check if it is integer using Number.isInteger() then return true otherwise false
    return Number.isInteger(Math.log(n) / Math.log(4))
};

/*
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.
*/


/*
Example 1:

Input: n = 16
Output: true

Example 2:

Input: n = 5
Output: false

Example 3:

Input: n = 1
Output: true
*/


/*
Constraints:

-231 <= n <= 231 - 1
*/