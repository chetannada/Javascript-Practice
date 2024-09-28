// https://leetcode.com/problems/sort-colors/description/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

    // initialize Hashmap for counting frequency of elements of nums
    let map = new Map();

    // initialize array colors with value 0 to 2 and result as empty array to store final answer 
    let colors = [0, 1, 2], result = [];

    // run for of loop for nums to count frequency of elements of nums and store in map
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // run for of loop for colors 
    for (let color of colors) {

        // if map has color property then push frequency of color value and fill with color value in result
        if (map.has(color)) {
            result.push(...Array(map.get(color)).fill(color));
        }
    }

    // run for loop from index 0 to length of nums to initialize  all elements of result in to nums
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }

    // return final answer nums
    return nums;
};


/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
*/


/*
Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
*/


/*
Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
*/