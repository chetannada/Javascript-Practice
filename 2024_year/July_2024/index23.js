// https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {

    // initialize map for counting frequency of elements of nums
    let map = new Map();

    // iterate through the every element of array nums
    for (let num of nums) {

        // count the frequency of num value and set in map
        map.set(num, (map.get(num) || 0) + 1);
    }

    // if map value of a is equal to map value of b then sort in decreasing order otherwise increasing order
    return nums.sort((a, b) => map.get(a) === map.get(b) ? b - a : map.get(a) - map.get(b));
};

/*
Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.
*/


/*
Example 1:

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

Example 2:

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

Example 3:

Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]
*/


/*
Constraints:

1 <= nums.length <= 100
-100 <= nums[i] <= 100
*/