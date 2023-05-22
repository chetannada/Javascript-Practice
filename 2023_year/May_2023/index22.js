// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let count  = 0, arr = []; // initialize an count to zero and empty array arr
    for(let i=0; i<rectangles.length; i++){ // loop through the element of of arr rectangles
        let min = Math.min(...rectangles[i]); // find minimum number from every element of rectagles array
        arr.push(min); // push the min to arr
    }
    let max = Math.max(...arr); // find max number from arr
    arr.forEach((ele) => (ele === max && count++)); // loop through every element of array, if ele is eqaul to max then increment count
    return count; // return count
};

/*
Example 1:
Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
Output: 3
Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
The largest possible square is of length 5, and you can get it out of 3 rectangles.

Example 2:
Input: rectangles = [[2,3],[3,7],[4,3],[3,7]]
Output: 3
*/