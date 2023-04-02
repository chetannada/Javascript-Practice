// https://leetcode.com/problems/largest-local-values-in-a-matrix/

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let len = grid.length;
// declare (n-2 x n-2) matrix
const matrix = Array(len - 2)
  .fill(0)
  .map(() => Array(len - 2).fill(0));

for (let i = 0; i < len - 2; i++) {
  for (let j = 0; j < len - 2; j++) {
    //find the max in each 3x3 martix
    matrix[i][j] = Math.max(
      grid[i][j],
      grid[i][j + 1],
      grid[i][j + 2],
      grid[i + 1][j],
      grid[i + 1][j + 1],
      grid[i + 1][j + 2],
      grid[i + 2][j],
      grid[i + 2][j + 1],
      grid[i + 2][j + 2]
    );
  }
}

return matrix;
};

/*
Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
Output: [[9,9],[8,6]]
Explanation: The diagram above shows the original matrix and the generated matrix.
Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.

Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
Output: [[2,2,2],[2,2,2],[2,2,2]]
Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.
*/