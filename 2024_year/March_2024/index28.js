// https://leetcode.com/problems/subarray-product-less-than-k/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {

    // initialize two pointer i and j for sliding method
    // and mutiple for tracking multiplication value
    // and count for tracking subarray count
    let i = 0, j = 0, multiple = 1, count = 0;

    // run for loop from index j to length of array nums
    for (; j < nums.length; j++) {

        // multiply multiple with jth element of nums
        multiple *= nums[j];

        // run while lopp if multiple is greater than or equal to k
        // i is less than or equal to j
        while (multiple >= k && i <= j) {

            // divide ith element from multiple and increment i
            multiple /= nums[i];
            i++;
        }

        // add j - i + 1 and count and assign to count
        count += j - i + 1;
    }

    // return answer count
    return count;
};

/*
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
*/


/*
Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

Example 2:

Input: nums = [1,2,3], k = 0
Output: 0
*/


/*
Constraints:

1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106
*/