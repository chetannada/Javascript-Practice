// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let sortArr = nums.sort((a,b) => a - b); // sort the element of nums
    let lastEle = sortArr.at(-1); // find last element of sortArr
    let lastSecondEle = sortArr.at(-2); // find last second element of sortArr
    return (lastEle - 1) * (lastSecondEle -1); // return multiplication of last element - 1 and last second element - 1
};

/*
Example 1:
Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

Example 2:
Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.

Example 3:
Input: nums = [3,7]
Output: 12
*/