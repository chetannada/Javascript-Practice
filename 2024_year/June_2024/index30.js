// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {

    // initialize count to 0
    let count = 0;

    // if length of nums is equal to 1 then return 0
    if (nums.length === 1) return 0;

    // run for loop from index 1 to length of nums
    for (let i = 1; i < nums.length; i++) {

        // if previous element of nums is greater than or equal to current element of nums
        if (nums[i - 1] >= nums[i]) {

            // subtract previous element of nums to current element of nums and add 1 to count
            count += nums[i - 1] - nums[i] + 1;

            // add 1 to previous element of nums and assign to current element of nums
            nums[i] = nums[i - 1] + 1;
        }
    }

    // return final answer count 
    return count;
};

/*
You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
Return the minimum number of operations needed to make nums strictly increasing.

An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.
*/


/*
Example 1:

Input: nums = [1,1,1]
Output: 3
Explanation: You can do the following operations:
1) Increment nums[2], so nums becomes [1,1,2].
2) Increment nums[1], so nums becomes [1,2,2].
3) Increment nums[2], so nums becomes [1,2,3].

Example 2:

Input: nums = [1,5,2,4,1]
Output: 14

Example 3:

Input: nums = [8]
Output: 0
*/


/*
Constraints:

1 <= nums.length <= 5000
1 <= nums[i] <= 104
*/