// https://leetcode.com/problems/product-of-array-except-self/


/**
 * @param {number[]} nums
  * @return {number[]}
   */
var productExceptSelf = function (nums) {

    const resultArr = [];

    for (let i = 0; i < nums.length; i++) {
        let productVal = nums[i];

        if (resultArr.length !== 0) {
            productVal = productVal * resultArr[i - 1];
        }

        resultArr.push(productVal);
    }

    let productVal = 1;
    let i = nums.length - 1;

    for (i; i > 0; i--) {
        resultArr[i] = resultArr[i - 1] * productVal;
        productVal = nums[i] * productVal;
    }

    resultArr[i] = productVal;

    return resultArr;
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