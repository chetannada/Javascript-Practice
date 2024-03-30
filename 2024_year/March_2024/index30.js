// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {

    // initialize two pointer i and j for sliding window method
    // count for counting subarrays
    // find the max value from array using Math.max()
    let i = 0, j = 0, count = 0, max = Math.max(...nums);

    // run for loop from index 0 to length of nums 
    for (; i < nums.length; i++) {

        // if ith element of nums is equal to max then subtract 1 with k else with 0
        k = k - (nums[i] === max ? 1 : 0);

        // run while loop if k is equal to 0
        while (k === 0) {

            // if jth element of nums is equal to max then add 1 with k else with 0
            k = k + (nums[j] === max ? 1 : 0);

            // increment j pointer
            j++;
        }

        // add j to count
        count += j;
    }

    // return answer count
    return count;
};

/*
You are given an integer array nums and a positive integer k.

Return the number of subarrays where the maximum element of nums appears at least k times in that subarray.

A subarray is a contiguous sequence of elements within an array.
*/


/*
Example 1:

Input: nums = [1,3,2,3,3], k = 2
Output: 6
Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].

Example 2:

Input: nums = [1,4,2,1], k = 3
Output: 0
Explanation: No subarray contains the element 4 at least 3 times.
*/


/*
Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106
1 <= k <= 105
*/