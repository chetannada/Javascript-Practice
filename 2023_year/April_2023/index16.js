// https://leetcode.com/problems/sort-the-people/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let result = []; // initialize an empty array result
    for(let i= 0; i<names.length; i++){ // loop through every element of an array of names
        const index = heights.indexOf(Math.max(...heights)); // find index of max number of heights
        heights[index] = 0; // set heights of index to zero
        result.push(names[index]); // push the names of index of value to result
    }
    return result;  // return the array of result
};

/*
Example 1:
Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.

Example 2:
Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
*/