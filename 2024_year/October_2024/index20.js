// https://leetcode.com/problems/set-matrix-zeroes/description/


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

    // initialize m as length of matrix and n as length of first element of matrix
    let m = matrix.length;
    let n = matrix[0].length;

    // initialize row and column as array with length of m and n and all elements are fille with 1 
    let row = new Array(m).fill(1);
    let column = new Array(n).fill(1);

    // run for loop from index 0 to m
    for (let i = 0; i < m; i++) {

        // run for loop from index 0 to n
        for (let j = 0; j < n; j++) {

            // if matrix[i][j] is equal to 0
            if (matrix[i][j] === 0) {

                // update row[i] and column[j] as 0
                row[i] = 0;
                column[j] = 0;
            }
        }
    }


    // run for loop from index 0 to m
    for (let i = 0; i < m; i++) {

        // run for loop from index 0 to n
        for (let j = 0; j < n; j++) {

            // if row[i] is equal to 0 or column[j] is equal to 0
            if (row[i] === 0 || column[j] === 0) {

                // update matrix[i][j] as 0
                matrix[i][j] = 0;
            }
        }
    }

    // Do not return anything, modify matrix in-place instead.
};


/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.
*/


/*
Example 1:

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 
*/


/*
Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
*/