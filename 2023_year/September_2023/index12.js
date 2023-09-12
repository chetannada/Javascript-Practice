// https://leetcode.com/problems/intersection-of-multiple-arrays/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
    // initialize empty array result
    let result = [];

    // loop through the every element of first element of array nums
    for (let i = 0; i < nums[0].length; i++) {

        // initialize k to zero
        let k = 0;

        // loop through every element of array nums from 1
        for (let j = 1; j < nums.length; j++) {

            // if every element of nums does not includes number of first element of nums then increment k
            if (!nums[j].includes(nums[0][i])) {
                k++;
            }
        }

        // if k is equal to zero then push number of first element of nums in array result
        if (k === 0) {
            result.push(nums[0][i]);
        }
    }

    // return the result in ascending order
    return result.sort((a, b) => a - b);
};


/*
Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.
*/


/*
Example 1:

Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation: 
The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].

Example 2:

Input: nums = [[1,2,3],[4,5,6]]
Output: []
Explanation: 
There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
*/


/*
Constraints:

1 <= nums.length <= 1000
1 <= sum(nums[i].length) <= 1000
1 <= nums[i][j] <= 1000
All the values of nums[i] are unique.
*/