// https://leetcode.com/problems/integer-break/description/

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {

    // If n is less than or equal to 3, then return n - 1
    if (n <= 3) {
        return n - 1;
    }
    // If n is divisible by 3 then return power of 3 * divide n by 3
    else if (n % 3 === 0) {
        return Math.pow(3, Math.floor(n / 3));
    }

    // If n leaves a remainder of 1 when divided by 3 then return power of 3 * divide n by 3 - 1 and multiply with 4
    else if (n % 3 === 1) {
        return Math.pow(3, Math.floor(n / 3) - 1) * 4;
    }

    // else return power of 3 * divide n by 3 and multiply with 2
    else {
        return Math.pow(3, Math.floor(n / 3)) * 2;
    }
};

/*
Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.
*/


/*
Example 1:

Input: n = 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.

Example 2:

Input: n = 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
*/


/*
Constraints:

2 <= n <= 58
*/