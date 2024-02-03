// https://leetcode.com/problems/count-elements-with-maximum-frequency/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {

    // initialize new Map()
    let map = new Map();

    // loop through the every element of nums
    for (let num of nums) {

        // if map has num then increment it's value by 1
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {

            // else set value of num to 1 in map
            map.set(num, 1);
        }
    }

    // convert value array from map
    const arr = [...map.values()];

    // find maximum value from arr
    let max = Math.max(...arr);
    let result = 0;

    // loop through element of arr
    for (let num of arr) {

        // if num is equal to max then add max to result
        if (num === max) {
            result += max;
        }
    }

    // return answer result
    return result;
};


/*
You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array.
*/


/*
Example 1:

Input: nums = [1,2,2,3,1,4]
Output: 4
Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
So the number of elements in the array with maximum frequency is 4.
Example 2:

Input: nums = [1,2,3,4,5]
Output: 5
Explanation: All elements of the array have a frequency of 1 which is the maximum.
So the number of elements in the array with maximum frequency is 5.
*/


/*
Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/