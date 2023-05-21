// https://leetcode.com/problems/find-the-highest-altitude/

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let arr = [0]; // initialize an arr with one element zero
    for(let i=0; i<gain.length; i++){ // loop through the every element of gain array
        let sum = arr[i] + gain[i]; // add every element of arr and gain and store into sum
        arr.push(sum); // add sum to arr
    }
    return Math.max(...arr); // return maximum element from arr
};

/*
Example 1:
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

Example 2:
Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
*/