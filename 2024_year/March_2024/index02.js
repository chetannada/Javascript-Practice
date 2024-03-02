// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // initialize map
    let map = new Map();

    // loop through the every element of array nums
    for (let i = 0; i < nums.length; i++) {

        // find the difference between target and ith element of nums
        let diff = target - nums[i];

        // if diff is present in map then return value of diff in map and i index in array
        if (map.has(diff)) {
            return [map.get(diff), i];
        }

        // every time set the ith value of nums and i index in map
        map.set(nums[i], i);
    }

};

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/


/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/


/*
Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/