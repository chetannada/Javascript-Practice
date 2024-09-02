// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

    // initialize map to count frequency of nums
    let map = new Map();

    // run for loop of loops for nums
    for (let num of nums) {

        // count the frequency of element of nums
        map.set(num, (map.get(num) || 0) + 1);
    }

    // initialize valueArr as array values from map
    let valueArr = [...map.values()];

    // if valueArr has any element that greater than 1 then return true otherwise false
    return valueArr.some(ele => ele > 1);
};


/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/


/*
Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/


/*
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/