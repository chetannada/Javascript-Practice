// https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    // initialize two empty array prefix and suffix to store 
    // multipcation of previous element
    let prefix = [], suffix = [], n = nums.length;

    // initialize first element of prefix be 1
    prefix[0] = 1;

    // run for loop from index 1 to n
    for (let i = 1; i < n; i++) {

        // do multiplication of previous element of prefix and nums 
        // and initialize to current element of prefix
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }

    // initialize last element of suffix be 1
    suffix[n - 1] = 1;

    // run for loop from index n-2 to 0
    for (let i = n - 2; i >= 0; i--) {

        // do multiplication of last element of suffix and nums 
        // and initialize to current element of suffix
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    // run for loop from index 0 to n
    for (let i = 0; i < n; i++) {

        // do multiplication of current element of prefix and suffix and 
        // initialize to current element of prefix
        prefix[i] = prefix[i] * suffix[i];
    }

    // return answer prefix
    return prefix;
};

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/


/*
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/


/*
Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/
