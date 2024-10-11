// https://leetcode.com/problems/rotate-image/description/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    // initialize n as length of matrix
    const n = matrix.length;

    // run for loop from row as 0 to n / 2 length
    for (let row = 0; row < n / 2; row++) {

        // run for loop from col as row to n - row - 1
        for (let col = row; col < n - row - 1; col++) {

            // swap the top-left and top-right cells in the current group
            [matrix[row][col], matrix[col][n - row - 1]] = [matrix[col][n - row - 1], matrix[row][col]];

            // swap the top-left and bottom-right cells in the current group
            [matrix[row][col], matrix[n - row - 1][n - col - 1]] = [matrix[n - row - 1][n - col - 1], matrix[row][col]];

            // swap the top-left and bottom-left cells in the current group
            [matrix[row][col], matrix[n - col - 1][row]] = [matrix[n - col - 1][row], matrix[row][col]]
        }
    }

    // return answer matrix
    return matrix;
};


/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/


/*
Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/


/*
Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
*/