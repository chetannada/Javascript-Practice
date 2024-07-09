// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    // if numRows is equal to 1 then return [[1]]
    if (numRows === 1) return [[1]];

    // initialize dp (dynamic programming) as empty array
    let dp = [];

    // set the first element of dp as [1]
    dp[0] = [1];

    // set the second element of dp as [1,1]
    dp[1] = [1, 1];

    // run for loop from index 2 to numRows
    for (let i = 2; i < numRows; i++) {

        // set the ith element of dp as empty array
        dp[i] = [];

        // set the first element of ith element of dp as 1
        dp[i][0] = 1;

        // set the last element of ith element of dp as 1
        dp[i][i] = 1;

        // run for loop from 1 to i
        for (j = 1; j < i; j++) {

            // set middle value of ith element of dp as sum of adjacent value of previoud elements of dp
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }

    // return final answer dp
    return dp;
};


/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


*/


/*
Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:

Input: numRows = 1
Output: [[1]]
*/


/*
Constraints:

1 <= numRows <= 30
*/