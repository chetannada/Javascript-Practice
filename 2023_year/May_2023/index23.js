// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const matrix = new Array(m).fill(0).map(item => new Array(n).fill(0));
    let output = 0;
    
    for (let i = 0; i < indices.length; i++) {
        const [x, y] = indices[i];
        
        for (let j = 0; j < n; j++) {
            matrix[x][j]++;
            if (matrix[x][j]%2) output++;
            else output--;
        }
        for (let k = 0; k < m; k++) {
            matrix[k][y]++;
            if (matrix[k][y]%2) output++;
            else output--;
        }
    }
    return output;
};

/*
Example 1:
Input: m = 2, n = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.

Example 2:
Input: m = 2, n = 2, indices = [[1,1],[0,0]]
Output: 0
Explanation: Final matrix = [[2,2],[2,2]]. There are no odd numbers in the final matrix.
*/