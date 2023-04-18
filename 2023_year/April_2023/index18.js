// https://leetcode.com/problems/delete-greatest-value-in-each-row/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    for(let row of grid){ // sort the array item of grid array
        row.sort((a,b) => b-a);
    }
    let result = 0; // initialize result to zero
    for(let i= 0; i<grid[0].length; i++){ // loop through the first element of grid
        let max = 0; // initialze max to zero
        for(let j= 0; j<grid.length; j++){ // loop through the grid element of array
            max = Math.max(max, grid[j][i]); // find max from the every element of the grid
        }
        result += max; // add the max to result
    }
    return result; // return the result
};

/*
Input: grid = [[1,2,4],[3,3,1]]
Output: 8
Explanation: The diagram above shows the removed values in each step.
- In the first operation, we remove 4 from the first row and 3 from the second row (notice that, there are two cells with value 3 and we can remove any of them). We add 4 to the answer.
- In the second operation, we remove 2 from the first row and 3 from the second row. We add 3 to the answer.
- In the third operation, we remove 1 from the first row and 1 from the second row. We add 1 to the answer.
The final answer = 4 + 3 + 1 = 8.


Example 2:
Input: grid = [[10]]
Output: 10
Explanation: The diagram above shows the removed values in each step.
- In the first operation, we remove 10 from the first row. We add 10 to the answer.
The final answer = 10.
*/