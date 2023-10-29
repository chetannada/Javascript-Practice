// https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/description/

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {

    // initialize rowLen equal to length of grid
    const rowLen = grid.length

    // initialize colLen equal to length of grid[0]
    const colLen = grid[0].length

    // initialize rowOnes equal to array of length to be rowLen with all element are 0 using Array() and fill()
    let rowOnes = new Array(rowLen).fill(0)

    // initialize columnOnes equal to array of length to be colLen with all element are 0 using Array() and fill()
    let columnOnes = new Array(colLen).fill(0)

    // loop through the every element of array rowLen
    for (let i = 0; i < rowLen; i++) {

        // loop through the every element of array colLen
        for (let j = 0; j < colLen; j++) {

            // add rowOnes[i] and grid[i][j] and assign to rowOnes[i] 
            rowOnes[i] += grid[i][j]

            // add columnOnes[j] and grid[i][j] and assign to columnOnes[j]
            columnOnes[j] += grid[i][j]
        }
    }

    // loop through the every element of array rowLen
    for (let i = 0; i < rowLen; i++) {

        // loop through the every element of array colLen
        for (let j = 0; j < colLen; j++) {

            // add rowOnes[i] and columnOnes[j] and subtract (rowLen - rowOnes[i]) and (colLen - columnOnes[j]) and assign to grid[i][j]
            // here we are subtracting (rowLen - rowOnes[i]) to find rowZeros and  (colLen - columnOnes[j]) to find colZeros
            grid[i][j] = rowOnes[i] + columnOnes[j] - (rowLen - rowOnes[i]) - (colLen - columnOnes[j])
        }

    }

    // return array grid
    return grid
};

/*
You are given a 0-indexed m x n binary matrix grid.

A 0-indexed m x n difference matrix diff is created with the following procedure:

Let the number of ones in the ith row be onesRowi.
Let the number of ones in the jth column be onesColj.
Let the number of zeros in the ith row be zerosRowi.
Let the number of zeros in the jth column be zerosColj.
diff[i][j] = onesRowi + onesColj - zerosRowi - zerosColj
Return the difference matrix diff.
*/


/*
Example 1:

Input: grid = [[0,1,1],[1,0,1],[0,0,1]]
Output: [[0,0,4],[0,0,4],[-2,-2,2]]
Explanation:
- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 2 + 1 - 1 - 2 = 0 
- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 2 + 1 - 1 - 2 = 0 
- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 2 + 3 - 1 - 0 = 4 
- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 2 + 1 - 1 - 2 = 0 
- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 2 + 1 - 1 - 2 = 0 
- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 2 + 3 - 1 - 0 = 4 
- diff[2][0] = onesRow2 + onesCol0 - zerosRow2 - zerosCol0 = 1 + 1 - 2 - 2 = -2
- diff[2][1] = onesRow2 + onesCol1 - zerosRow2 - zerosCol1 = 1 + 1 - 2 - 2 = -2
- diff[2][2] = onesRow2 + onesCol2 - zerosRow2 - zerosCol2 = 1 + 3 - 2 - 0 = 2

Example 2:

Input: grid = [[1,1,1],[1,1,1]]
Output: [[5,5,5],[5,5,5]]
Explanation:
- diff[0][0] = onesRow0 + onesCol0 - zerosRow0 - zerosCol0 = 3 + 2 - 0 - 0 = 5
- diff[0][1] = onesRow0 + onesCol1 - zerosRow0 - zerosCol1 = 3 + 2 - 0 - 0 = 5
- diff[0][2] = onesRow0 + onesCol2 - zerosRow0 - zerosCol2 = 3 + 2 - 0 - 0 = 5
- diff[1][0] = onesRow1 + onesCol0 - zerosRow1 - zerosCol0 = 3 + 2 - 0 - 0 = 5
- diff[1][1] = onesRow1 + onesCol1 - zerosRow1 - zerosCol1 = 3 + 2 - 0 - 0 = 5
- diff[1][2] = onesRow1 + onesCol2 - zerosRow1 - zerosCol2 = 3 + 2 - 0 - 0 = 5
*/


/*
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 105
1 <= m * n <= 105
grid[i][j] is either 0 or 1.
*/