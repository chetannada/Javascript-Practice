// https://leetcode.com/problems/continuous-subarray-sum/description/

function checkSubarraySum(nums: number[], k: number): boolean {

    // initialize hashmap for storing modulo with index
    let map: Map<number, number> = new Map();

    // initialize preSum to 0
    let preSum: number = 0;

    // add key 0 and value -1 in map to check modulo 0 appear again or not
    map.set(0, -1);

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // add nums[i] in preSum
        preSum += nums[i];

        // find modulo of preSum to k
        let modulo: number = preSum % k;

        // if map has modulo
        if (map.has(modulo)) {

            // subtraction of i to value of modulo in map is greater than or equal to 2 then return true
            if (i - map.get(modulo) >= 2) {
                return true;
            }
        } else {

            // else set the value of modulo and i in map
            map.set(modulo, i);
        }
    }

    // otherwise return false
    return false;
};

/*
Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

A good subarray is a subarray where:

its length is at least two, and
the sum of the elements of the subarray is a multiple of k.
Note that:

A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.
*/


/*
Example 1:

Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

Example 2:

Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.

Example 3:

Input: nums = [23,2,6,4,7], k = 13
Output: false
*/


/*
Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= sum(nums[i]) <= 231 - 1
1 <= k <= 231 - 1
*/