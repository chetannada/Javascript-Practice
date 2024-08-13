// https://leetcode.com/problems/n-th-tribonacci-number/description/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {

    // initialize dp (dynamic programming) as empty array
    let dp = [];

    // assign 0th index as 0, 1th index and 2th index as 1
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    // run for loop from index 3 to n (inclusive)
    for (let i = 3; i <= n; i++) {

        // follow description syntax for tn
        // Tn+3 = Tn + Tn+1 + Tn+2
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }

    // return nth index value of dp
    return dp[n];
};

/*
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.
*/


/*
Example 1:

Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

Example 2:

Input: n = 25
Output: 1389537
*/


/*
Constraints:

0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
*/