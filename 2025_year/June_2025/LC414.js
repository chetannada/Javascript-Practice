// https://leetcode.com/problems/third-maximum-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {

    // find unique number from nums
    const set = new Set(nums);

    // sort the array in ascending order
    const arr = [...set].sort((a, b) => a - b);

    // find maximum number of the array
    let max = arr.at(-1);

    // find third maximum number of the array
    let finalMax = arr.at(-3);

    // if finalMax or finalMax is 0 then return finalMax and max
    return finalMax || finalMax === 0 ? finalMax : max;
};


/*
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
*/


/*
Example 1:

Input: nums = [3,2,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2.
The third distinct maximum is 1.
Example 2:

Input: nums = [1,2]
Output: 2
Explanation:
The first distinct maximum is 2.
The second distinct maximum is 1.
The third distinct maximum does not exist, so the maximum (2) is returned instead.
Example 3:

Input: nums = [2,2,3,1]
Output: 1
Explanation:
The first distinct maximum is 3.
The second distinct maximum is 2 (both 2's are counted together since they have the same value).
The third distinct maximum is 1.
*/


/*
Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/