// https://leetcode.com/problems/jump-game/description/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {

    // assign goal as last index of nums 
    let goal = nums.length - 1;

    // run for loop from last second element to 0 (inclusive)
    for (let i = nums.length - 2; i >= 0; i--) {

        // if sum of current index i and ith element of nums is greater than or equal to goal
        if (i + nums[i] >= goal) {

            // update the goal with current index i
            goal = i;
        }
    }

    // return true if goal is equal to 0 otherwise false
    return goal === 0;
};


/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 
*/


/*
Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/


/*
Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105
*/