// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {

    // copy the array using spread operator and then sort it in ascending order
    let sorted = [...nums].sort((a, b) => a - b);

    // initialize count to track shortest continuous subarray and j as 0 to track same element which is not part of subarray
    let count = 0, j = 0;

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // nums[i] not equal to sorted[i]
        if (nums[i] !== sorted[i]) {

            // add 1 and j to count
            count = count + 1 + j;

            // update j as 0 to count continuos subarray
            j = 0;
        } else if (count !== 0) {

            // else if count not equal to 0 then increment j
            j++;
        }
    }

    // return final answer count
    return count;
}



/*
Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.

Return the shortest such subarray and output its length.
*/


/*
Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Example 2:

Input: nums = [1,2,3,4]
Output: 0

Example 3:

Input: nums = [1]
Output: 0
*/


/*
Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105
*/