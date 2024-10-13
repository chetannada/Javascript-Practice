// https://leetcode.com/problems/unique-paths/description/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    // initialize ans as 1
    let ans = 1;

    // run for loop from index 1 to less than m
    for (let i = 1; i < m; i++) {

        // multiply ans with (n-1 + i) and divide by i
        ans = ans * (n - 1 + i) / i;
    }

    // return ans
    return ans;
};



/*
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.
*/


/*
Example 1:


Input: m = 3, n = 7
Output: 28

Example 2:

Input: m = 3, n = 2

Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
*/


/*
Constraints:

1 <= m, n <= 100
*/