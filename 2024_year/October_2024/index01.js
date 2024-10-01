// https://leetcode.com/problems/largest-number/description/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {

    // convert all integers of nums to string
    let arr = nums.map(num => String(num));

    // use custom sorting and sort the arr in descending order using localeComapre 
    arr.sort((a, b) => (b + a).localeCompare(a + b));

    // if first character in arr is "0" then return "0" otherwise convert arr to string and then return it
    return arr.at(0) === "0" ? "0" : arr.join('');
};


/*
Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

Since the result may be very large, so you need to return a string instead of an integer.
*/


/*
Example 1:

Input: nums = [10,2]
Output: "210"

Example 2:

Input: nums = [3,30,34,5,9]
Output: "9534330"
*/


/*
Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 109
*/