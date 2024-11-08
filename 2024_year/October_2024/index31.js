// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {

    // initialize answer to be empty array
    let ans = [];

    // add first value 0 in array nums
    nums.unshift(0);

    // loop through every element of arrya nums
    for (let i = 0; i < nums.length; i++) {

        // find absoulute value of current element of nums
        let index = Math.abs(nums[i]);

        // if indexth element of nums is less than 0 then add index in array ans
        if (nums[index] < 0) ans.push(index);

        // make indexth element of nums to negative
        nums[index] *= (-1);
    }

    // return array ans
    return ans;
};


/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output
*/


/*
Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]

Example 2:

Input: nums = [1,1,2]
Output: [1]

Example 3:

Input: nums = [1]
Output: []
*/


/*
Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n
Each element in nums appears once or twice.
*/