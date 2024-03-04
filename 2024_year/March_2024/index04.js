// https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/description/

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var countSubmatrices = function (grid, k) {
  let row = grid.length;
  let col = grid[0].length;
  let count = 0;

  // create 2d array with row+1 and col+1 length and fill with 0
  let prefixArr = new Array(row + 1)
    .fill(0)
    .map(() => new Array(col + 1).fill(0));

  // run two nested for loop with index 1 to row and 1 to col
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      // do sum of current value of grid
      // and left element of prefixArr
      // and top left element of prefixArr
      // and subtract diagonally top element of prefixArr
      // finally store in the prefixArr[i][j]
      prefixArr[i][j] =
        grid[i - 1][j - 1] +
        prefixArr[i][j - 1] +
        prefixArr[i - 1][j] -
        prefixArr[i - 1][j - 1];

      // if prefixArr[i][j] is less than or equal to k then increment count
      if (prefixArr[i][j] <= k) {
        count++;
      }
    }
  }

  // return answer count
  return count;
};

/*
You are given a 0-indexed integer matrix grid and an integer k.

Return the number of 
submatrices
 that contain the top-left element of the grid, and have a sum less than or equal to k.
*/

/*
Example 1:

Input: grid = [[7,6,3],[6,6,1]], k = 18
Output: 4
Explanation: There are only 4 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 18.

Example 2:

Input: grid = [[7,2,9],[1,5,0],[2,6,6]], k = 20
Output: 6
Explanation: There are only 6 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 20.
*/

/*
Constraints:

m == grid.length 
n == grid[i].length
1 <= n, m <= 1000 
0 <= grid[i][j] <= 1000
1 <= k <= 109
*/
