// https://leetcode.com/problems/factorial-trailing-zeroes/description/


/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {

    // initialize count as 0 and five as 5
    let count = 0, five = 5;

    // run while loop until n is greater than or equal to five
    while (n >= five) {

        // divide n by five and add in count
        count += Math.floor(n / five);

        // multiply five with 5 and update five
        five *= 5;
    }

    // return final answer count
    return count;
};


/*
Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
*/


/*
Example 1:

Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:

Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.

Example 3:

Input: n = 0
Output: 0
*/


/*
Constraints:

0 <= n <= 104
*/