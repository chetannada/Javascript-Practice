// https://leetcode.com/problems/majority-element/description/


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    // initialize map
    let map = new Map();

    // loop through every element of nums and add in map
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let maxValue = 0;
    let maxIndex = 0;

    // loop through the every key and value pair of array map using map.entries()
    for (let [key, value] of map.entries()) {

        // if value is greater then maxValue
        if (value > maxValue) {

            // initialize value to maxValue and key to maxIndex
            maxValue = value;
            maxIndex = key;
        }
    }

    // return maxIndex
    return maxIndex;
};


/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/


/*
Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/


/*
Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/