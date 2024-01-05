// https://leetcode.com/problems/constrained-subsequence-sum/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var constrainedSubsetSum = function (nums, k) {
    const arr = [];
    const sum = Array(nums.length).fill(0);
    let result = nums[0];

    for (let i = 0; i < nums.length; i++) {

        sum[i] = nums[i];

        if (arr.length) sum[i] += sum[arr[0]];

        result = Math.max(result, sum[i]);

        if (arr.length && i - arr[0] >= k) arr.shift();

        while (arr.length && sum[arr[arr.length - 1]] <= sum[i]) arr.pop();

        if (sum[i] > 0) arr.push(i);
    }

    return result;
};


/*
Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence of that array such that for every two consecutive integers in the subsequence, nums[i] and nums[j], where i < j, the condition j - i <= k is satisfied.

A subsequence of an array is obtained by deleting some number of elements (can be zero) from the array, leaving the remaining elements in their original order.
*/


/*
Example 1:

Input: nums = [10,2,-10,5,20], k = 2
Output: 37
Explanation: The subsequence is [10, 2, 5, 20].

Example 2:

Input: nums = [-1,-2,-3], k = 1
Output: -1
Explanation: The subsequence must be non-empty, so we choose the largest number.

Example 3:

Input: nums = [10,-2,-10,-5,20], k = 2
Output: 23
Explanation: The subsequence is [10, -2, -5, 20].
*/


/*
Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/