// https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {

    // initialize maxSum as 0 for calculating maximum sum value
    // and windowSum as 0 for calculating window sum value in subarray with length k
    // and j pointer as 0 for subarray indexing
    let maxSum = 0, windowSum = 0, j = 0;

    // initialize map for counting frequency and remove duplicate frequency in subarray
    let map = new Map();

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // update windowSum and add current element of nums to windowSum
        windowSum += nums[i];

        // set current element and it's frequency in map
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);

        // if subarray length is greater than or equal to k
        if (i - j >= k) {

            // update windowSum and subtract current element of nums with windowSum
            windowSum -= nums[j];

            // if map has current element value is greater than or equal to 2 then remove 1 count for current element in map
            if (map.get(nums[j]) >= 2) {
                map.set(nums[j], map.get(nums[j]) - 1);
            } else {

                // else delete current element from map
                map.delete(nums[j]);
            }

            // move the j pointer towords right
            j++;
        }

        // if subarray length matches to k
        if (i - j + 1 === k) {

            // if map has distinct element and it's equal to k
            if (map.size === k) {

                // update maxSum as maximum value between maxSum and windowSum
                maxSum = Math.max(maxSum, windowSum);
            }
        }

    }

    // return final answer maxSum
    return maxSum;
};


/*
You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.
*/


/*
Example 1:

Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions

Example 2:

Input: nums = [4,4,4], k = 3
Output: 0
Explanation: The subarrays of nums with length 3 are:
- [4,4,4] which does not meet the requirements because the element 4 is repeated.
We return 0 because no subarrays meet the conditions.
*/


/*
Constraints:

1 <= k <= nums.length <= 105
1 <= nums[i] <= 105
*/