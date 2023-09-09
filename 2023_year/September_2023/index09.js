// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {

    // initialize result to -1
    let result = -1;

    // loop through every element of array nums
    for (let i = 0; i < nums.length; i++) {

        // find existInt from array nums using slice() and includes()
        let existInt = nums.slice(i + 1).includes(-nums[i]);

        // if existInt is true and result is less than every element of nums or result is less than every element of negative value of nums then add absolute value of that element of nums into result 
        if (existInt && (result < nums[i] || result < -nums[i])) {

            result = Math.abs(nums[i]);
        }
    }

    // return the result 
    return result;
};

/*
Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.

Return the positive integer k. If there is no such integer, return -1.
*/


/*
Example 1:

Input: nums = [-1,2,-3,3]
Output: 3
Explanation: 3 is the only valid k we can find in the array.

Example 2:

Input: nums = [-1,10,6,7,-7,1]
Output: 7
Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

Example 3:

Input: nums = [-10,8,6,7,-2,-3]
Output: -1
Explanation: There is no a single valid k, we return -1.
*/


/*
Constraints:

1 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
nums[i] != 0
*/