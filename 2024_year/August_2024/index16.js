// https://leetcode.com/problems/longest-nice-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {

    // initialize mask, j and maxWindow as 0
    // mask is used to keep track of the presence of numbers in the current subarray
    // j represents the left boundary of the sliding window
    // maxWindow stores the maximum length of a nice subarray
    let mask = 0, j = 0, maxWindow = 0;

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // run while loop until bitwise AND of mask and nums[i] not equal to 0
        // If it is not zero, it means that the current nums[i] is already present in the subarray, and we need to reduce the window by moving the left boundary (j)
        while ((mask & nums[i]) !== 0) {

            // do bitwise AND of mask and (Bitwise NOT of nums[i])
            mask = mask & ~nums[j];
            // move j pointer towords right
            j++;
        }

        // do bitwise OR of mask and nums[i]
        // because we know that the current nums[i] is not present in the subarray
        mask = mask | nums[i];

        // update maxWindow with maximum value between maxWindow and i-j+1
        maxWindow = Math.max(maxWindow, i - j + 1);
    }

    // return maxWindow
    return maxWindow;
};


/*
You are given an array nums consisting of positive integers.

We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.

Return the length of the longest nice subarray.

A subarray is a contiguous part of an array.

Note that subarrays of length 1 are always considered nice.
*/


/*
Example 1:

Input: nums = [1,3,8,48,10]
Output: 3
Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
- 3 AND 8 = 0.
- 3 AND 48 = 0.
- 8 AND 48 = 0.
It can be proven that no longer nice subarray can be obtained, so we return 3.

Example 2:

Input: nums = [3,1,5,11,13]
Output: 1
Explanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.
*/


/*
Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
*/