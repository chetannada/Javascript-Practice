// https://leetcode.com/problems/find-the-middle-index-in-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {

    // initialize function sum with parameter arr
    function sum(arr) {

        // return the sum of every element of array arr using reduce()
        return arr.reduce((a, b) => a + b, 0);
    }

    // loop through the every element of array nums
    for (let i = 0; i < nums.length; i++) {

        // initialize variable leftSum and rightSum
        let leftSum, rightSum;

        // if i is equal to zero
        if (i === 0) {

            // make leftSum to zero
            leftSum = 0;

            // invoke the function sum with argument as array of nums and assign to rightSum
            rightSum = sum(nums.slice(i + 1));
        }

        // if i is equal to length of array nums - 1
        if (i === nums.length - 1) {

            // make rightSum to zero
            rightSum = 0;

            // invoke the function sum with argument as array of nums and assign to leftSum
            leftSum = sum(nums.slice(0, -1))
        }

        // if i is not equal to zero and not equal to length of array nums - 1
        if (i !== 0 && i !== nums.length - 1) {

            // invoke the function sum with argument as array of nums and assign to leftSum
            leftSum = sum(nums.slice(0, i));

            // invoke the function sum with argument as array of nums and assign to rightSum
            rightSum = sum(nums.slice(i + 1));
        }

        // if leftSum is equal to rightSum then return index i
        if (leftSum === rightSum) {
            return i;
        }

    }

    // return -1
    return -1;
};


/*
Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.
*/


/*
Example 1:

Input: nums = [2,3,-1,8,4]
Output: 3
Explanation: The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
The sum of the numbers after index 3 is: 4 = 4
Example 2:

Input: nums = [1,-1,4]
Output: 2
Explanation: The sum of the numbers before index 2 is: 1 + -1 = 0
The sum of the numbers after index 2 is: 0
Example 3:

Input: nums = [2,5]
Output: -1
Explanation: There is no valid middleIndex.
*/


/*
Constraints:

1 <= nums.length <= 100
-1000 <= nums[i] <= 1000
*/