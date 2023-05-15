// https://leetcode.com/problems/matrix-diagonal-sum/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0; // initialize sum to zero
    let n = mat.length - 1; // initialize n to mat length - 1
    for (let i = 0; i <= n; i++) { // loop through to 0 to n
        sum += mat[i][i]; // add mat[i][i] to sum
        if (i !== (n - i)) { // if i not equal to n - i then add mat[i][n - i] to sum
            sum += mat[i][n - i];
        }
    }
    return sum; // return sum;
};

/*
Example 1:
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.

Example 2:
Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8

Example 3:
Input: mat = [[5]]
Output: 5
*/