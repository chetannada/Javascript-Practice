// https://leetcode.com/problems/toeplitz-matrix/

/**
* @param {number[][]} matrix
* @return {boolean}
*/
var isToeplitzMatrix = function (matrix) {

    // loop through length of array matrix
    for (let i = 1; i < matrix.length; i++) {

        // loop through length of array matrix[0]
        for (let j = 0; j < matrix[0].length; j++) {

            // if matrix[i - 1][j - 1] is not equal to undefined and matrix[i][j] is not equal to matrix[i - 1][j - 1]) then return false;
            if (matrix[i - 1][j - 1] !== undefined && matrix[i][j] !== matrix[i - 1][j - 1]) return false;
        }
    }

    // if above condtion will not satisfy then return true
    return true;
};

/*
Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
*/


/*
Example 1:

Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.

Example 2:

Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements.
*/


/*
Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 20
0 <= matrix[i][j] <= 99
*/