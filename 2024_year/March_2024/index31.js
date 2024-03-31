// https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {

    // initialize n for length of nums
    // min as Infinity (max value)
    const n = nums.length;
    let min = Infinity;

    // run for loop from index 0 to n
    for (let i = 0; i < n; i++) {

        // initialize currentOr to 0
        let currentOr = 0;

        // run for loop from index i to n
        for (let j = i; j < n; j++) {

            // find bitwise OR between currentOr and jth element of nums
            currentOr |= nums[j];

            // if currentOr is greater than k
            if (currentOr >= k) {

                // find minimum between min and (j - i + 1) and break the loop
                min = Math.min(min, j - i + 1);
                break;
            }
        }
    }

    // if min is equal to Infinity then return -1 otherwise min
    return min === Infinity ? -1 : min;
};

/*
You are given an array nums of non-negative integers and an integer k.

An array is called special if the bitwise OR of all of its elements is at least k.

Return the length of the shortest special non-empty 
subarray
 of nums, or return -1 if no special subarray exists.
*/


/*
Example 1:

Input: nums = [1,2,3], k = 2

Output: 1

Explanation:

The subarray [3] has OR value of 3. Hence, we return 1.

Example 2:

Input: nums = [2,1,8], k = 10

Output: 3

Explanation:

The subarray [2,1,8] has OR value of 11. Hence, we return 3.

Example 3:

Input: nums = [1,2], k = 0

Output: 1

Explanation:

The subarray [1] has OR value of 1. Hence, we return 1.
*/


/*
Constraints:

1 <= nums.length <= 50
0 <= nums[i] <= 50
0 <= k < 64
*/