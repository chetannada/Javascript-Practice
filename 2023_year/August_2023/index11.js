// https://leetcode.com/problems/number-of-common-factors/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    let arr = []; // initialize empty array arr
    let min = Math.min(a, b); // store minimum number from a and b into min using Math.min()

    // loop thorugh every number from 1 to min
    for (let i = 1; i <= min; i++) {

        // if a anf b both divisable by i then push i into array arr
        if (a % i == 0 && b % i == 0) {
            arr.push(i);
        }
    }

    // return length of array arr
    return arr.length;
};

/*
Given two positive integers a and b, return the number of common factors of a and b.

An integer x is a common factor of a and b if x divides both a and b.
*/

/*
Example 1:
Input: a = 12, b = 6
Output: 4
Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

Example 2:
Input: a = 25, b = 30
Output: 2
Explanation: The common factors of 25 and 30 are 1, 5.
 
Constraints:
1 <= a, b <= 1000
*/