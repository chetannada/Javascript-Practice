// https://leetcode.com/problems/subarray-sum-equals-k/description/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {

    // initialize Hash map
    let map = new Map();

    // set the map value of 0 to 1
    map.set(0, 1);

    // initialize count and sum as 0
    let count = 0, sum = 0;

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // add nums[i] in sum
        sum += nums[i];

        // if map has sum-k
        if (map.has(sum - k)) {

            // add map value of sum - k in count
            count += map.get(sum - k);
        }

        // if map has not sum
        if (!map.has(sum)) {

            // set sum value to 1 in map
            map.set(sum, 1);
        } else {

            // count the frequency of sum in map
            map.set(sum, 1 + map.get(sum));
        }

    }

    // return count
    return count;
};


/*
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.
*/


/*
Example 1:

Input: nums = [1,1,1], k = 2
Output: 2

Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
*/


/*
Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
*/