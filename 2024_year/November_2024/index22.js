// https://leetcode.com/problems/rotate-array/description/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    // initialize function rotateArray() with arr and n as paramter
    function rotateArray(arr, n) {

        // initialize temp as empty array
        let temp = [];

        // run for loop from index 1 to n (inclusive)
        for (let i = 1; i <= n; i++) {

            // remove last element from arr and push to temp
            temp.push(arr.pop());
        }

        // reverse the array temp
        temp.reverse();

        // add elements of array temp to first in array arr
        arr.unshift(...temp);
    }

    // if k is equal to length of nums
    if (k <= nums.length) {

        // invoke the function rotateArray() with nums and k as arguments
        rotateArray(nums, k);
    } else {

        // initialize modulo as k modulo length of nums
        let modulo = k % nums.length;

        // invoke the function rotateArray() with nums and modulo as arguments
        rotateArray(nums, modulo);
    }
};


/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 
*/


/*
Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
*/


/*
Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
*/