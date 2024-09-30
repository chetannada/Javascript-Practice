// https://leetcode.com/problems/maximum-gap/description/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {

    // if length of nums is less than 2 than return 0
    if (nums.length < 2) return 0;

    // sort the array nums in ascending order
    nums.sort((a, b) => a - b);

    // initialize max as 0
    let max = 0;

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length - 1; i++) {

        // update max with maximum value between max and difference between next and current element of nums
        max = Math.max(max, nums[i + 1] - nums[i]);
    }

    // return final answer max
    return max;
};


/*
Given an integer array nums, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0.

You must write an algorithm that runs in linear time and uses linear extra space.

 
*/


/*
Example 1:

Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

Example 2:

Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.
*/


/*
Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
*/
