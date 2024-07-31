// https://leetcode.com/problems/number-of-common-factors/description/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {

    // find minimum from a and b
    let min = Math.min(a, b);

    // initialize count to be 0
    let count = 0;

    // run for loop from 1 to min
    for (let i = 1; i <= min; i++) {

        // a modulo i is equal to 0 and b modulo i is equal to 0 then increment count
        if (a % i === 0 && b % i === 0) {
            count++;
        }
    }

    // return final answer count
    return count;
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
*/


/*
Constraints:

1 <= a, b <= 1000
*/