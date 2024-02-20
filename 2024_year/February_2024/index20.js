// https://leetcode.com/problems/power-of-two/submissions/1180133616/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {

    // if n is less than or equal to 0 then return false
    if (n <= 0) return false;

    // if n is less than or equal to 2 then return true
    if (n <= 2) return true;

    // run while loop if n is greater then 1
    while (n > 1) {

        // if n modulo 2 is not equal to 0 then return false
        if (n % 2 !== 0) return false;

        // divide n by 2 and assigan to n
        n = n / 2;
    }

    // otherwise return true
    return true;
};


/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.
*/


/*
Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1

Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16

Example 3:

Input: n = 3
Output: false
*/


/*
Constraints:

-231 <= n <= 231 - 1
 
*/