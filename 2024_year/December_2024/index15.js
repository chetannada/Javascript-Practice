// https://leetcode.com/problems/move-zeroes/description/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    // initialize nonZero to 0
    let nonZero = 0;

    // loop through the every element of array nums
    for (let i = 0; i < nums.length; i++) {

        // initialize current to be ith element of nums
        let current = nums[i];

        // make every ith element of nums to be 0
        nums[i] = 0;

        // if current is not eqaul to 0
        if (current !== 0) {

            // assign current to noZeroth element of nums and increment nonZero
            nums[nonZero] = current;
            nonZero++;
        }
    }

};


/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/


/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]
*/


/*
Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/