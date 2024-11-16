// https://leetcode.com/problems/counting-bits/description/


/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {

    // initialize dp as new array with length n + 1 and fill with 0
    let dp = new Array(n + 1).fill(0);

    // initialize offSet to 1
    let offSet = 1;

    // run for loop from index 1 to n
    for (let i = 1; i <= n; i++) {

        // if twice of offSet is equal to i then twice the offSet and assign back to offSet
        if (offSet * 2 === i) {
            offSet *= 2;
        }

        // add 1 to dp[i - offSet] and assign to dp[i]
        dp[i] = dp[i - offSet] + 1;
    }

    // return answer array dp
    return dp;
};


/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
*/


/*
Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
*/


/*
Constraints:

0 <= n <= 105
*/