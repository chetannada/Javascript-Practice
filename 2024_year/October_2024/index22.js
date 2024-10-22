// https://leetcode.com/problems/maximum-subarray/description/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    // initialize maxSum as first element of nums
    let maxSum = nums[0];

    // initialize sum as 0
    let sum = 0;

    // run for loop from 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // add ith element in sum
        sum += nums[i];

        // if sum is greater then maxSum then update maxSum with sum
        if (sum > maxSum) {
            maxSum = sum;
        }

        // if sum is less than 0 then update sum as 0
        if (sum < 0) {
            sum = 0;
        }
    }

    // return maxSum
    return maxSum;
};


/*
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.
*/


/*
Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/


/*
Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
*/