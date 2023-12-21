// https://leetcode.com/problems/contiguous-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let hash = { 0: -1 };
    let count = 0;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) count--;
        else count++;

        if (hash[count] != null) max = Math.max(max, i - hash[count]);
        else hash[count] = i
    }

    return max;
};

/*
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
*/


/*
Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
*/


/*
Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/