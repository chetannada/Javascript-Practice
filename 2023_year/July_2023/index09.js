// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = []; // initialize an empty array res

    for (i = 0; i < numRows; i++) { // loop through the 0 to numRows
        res.push(Array(i + 1));  // initialize the first row of the pascal triangle as [1]
        for (j = 0; j <= i; j++) { // loop through the i
            
            if (j === 0 || j === i) { // if j is equal to zero or j is equal to i then res[i][j] becomes 1
                res[i][j] = 1;
            }
            else { // else calculate the elements of a row, add each pair of adjacent elements of the previous row in each step of the inner loop.
                res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
            }
        }
    }
    return res; // return the res of pascal values 
};

/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
*/


/*
Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
 
Constraints:
1 <= numRows <= 30
*/