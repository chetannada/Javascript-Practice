// https://leetcode.com/problems/fibonacci-number/description/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {

    // initialize dp(dynamic programming) as empty array
    let dp = [];

    // set the value of 0th element of dp as 0 and 1th element of dp as 1
    dp[0] = 0;
    dp[1] = 1;

    // run for loop from 2 to n
    for (let i = 2; i <= n; i++) {

        // dp[i] is sum of i-1th and i-2th element value of dp
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // return nth element value of dp
    return dp[n];
};


/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
*/


/*
Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

Example 3:

Input: n = 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
*/


/*
Constraints:

0 <= n <= 30
*/