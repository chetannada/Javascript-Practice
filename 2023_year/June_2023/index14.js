// https://leetcode.com/problems/row-with-maximum-ones/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let maxRow = 0; // initialize maxRow equal to zero
    let maxCount = 0; // initialize maxCount equal to zero

    for(let i = 0; i < mat.length; i++) { // loop through the every element of array
        let tempCount = mat[i].filter(x => x === 1).length; // initialize tempCount who has length of array who has max element 1 using array.filter()
        if(tempCount > maxCount) { // if tempCount is greaterthan maxCount
            maxRow = i; // then maxRow becomes i
            maxCount = tempCount; // maxCount becomes tempCount
        }
    }

    return [maxRow, maxCount]; // return maxRow and maxCount in form of array
};


/*
Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.

In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.

Return an array containing the index of the row, and the number of ones in it.
*/


/*
Example 1:
Input: mat = [[0,1],[1,0]]
Output: [0,1]
Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1]. 

Example 2:
Input: mat = [[0,0,0],[0,1,1]]
Output: [1,2]
Explanation: The row indexed 1 has the maximum count of ones (2). So we return its index, 1, and the count. So, the answer is [1,2].

Example 3:
Input: mat = [[0,0],[1,1],[0,0]]
Output: [1,2]
Explanation: The row indexed 1 has the maximum count of ones (2). So the answer is [1,2].
*/