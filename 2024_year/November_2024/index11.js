// https://leetcode.com/problems/pascals-triangle-ii/description/


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {

    // initialize dp (dynamic programming) as empty array
    let dp = [];

    // set the first element of dp as [1]
    dp[0] = [1];

    // set the second element of dp as [1,1]
    dp[1] = [1, 1];

    // run for loop from index 2 to rowIndex (inclusive)
    for (let i = 2; i <= rowIndex; i++) {

        // set the ith element of dp as empty array
        dp[i] = [];

        // set the first element of ith element of dp as 1
        dp[i][0] = 1;

        // set the last element of ith element of dp as 1
        dp[i][i] = 1;

        // run for loop from 1 to i
        for (j = 1; j < i; j++) {

            // set middle value of ith element of dp as sum of adjacent value of previous elements of dp
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
        }
    }

    // return final answer rowindexth value of dp
    return dp[rowIndex];
};


/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

*/


/*
Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]

Example 2:

Input: rowIndex = 0
Output: [1]

Example 3:

Input: rowIndex = 1
Output: [1,1]

*/


/*
Constraints:

0 <= rowIndex <= 33
*/