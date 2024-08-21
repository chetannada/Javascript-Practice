// https://leetcode.com/problems/sort-the-matrix-diagonally/description/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {

    // initialize function setDiagonal(mat, y, x) with max, y and x as paramter
    function setDiagonal(mat, y, x) {

        // initialize array diag to add diagonal value
        let diag = [];

        // calculate minimum between mat.length - y and mat[0].length - x
        let size = Math.min(mat.length - y, mat[0].length - x);

        // run for loop from index 0 to size to add diagonal value in diag
        for (let i = 0; i < size; i++) {
            diag.push(mat[i + y][i + x]);
        }


        // sort the diag array into ascending order
        diag.sort((a, b) => a - b);

        // run for loop from index 0 to size to assign diagonal value in mat
        for (let i = 0; i < size; i++) {
            mat[i + y][i + x] = diag[i];
        }

    }


    // run for loop from index 0 to mat[0].length and invoke the function setDiagonal(mat, 0, j) and pass mat, 0 and j
    for (let j = 0; j < mat[0].length; j++) {
        setDiagonal(mat, 0, j);
    }

    // run for loop from index 1 to mat.length and invoke the function setDiagonal(mat, i, 0) and pass mat, i and 0
    for (let i = 1; i < mat.length; i++) {
        setDiagonal(mat, i, 0);
    }

    // return sorted matrix mat
    return mat;
};


/*
A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.
*/


/*
Example 1:


Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

Example 2:

Input: mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
Output: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]
*/


/*
Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
1 <= mat[i][j] <= 100
*/