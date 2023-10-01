// https://leetcode.com/problems/132-pattern/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    // initialize m to -Infinity
    let m = -Infinity;

    // initialize a empty array stack
    const stack = [];

    // Run a Loop from last to first index of array nums
    for (let i = nums.length - 1; i >= 0; i--) {

        // If nums[i] is greater than the top element of stack, then pop the element from array stack
        while (nums[i] > stack[stack.length - 1]) {
            m = stack.pop();
        }

        // If m is greater than nums[i] then return true
        if (nums[i] < m) {
            return true
        }

        // Otherwise, push nums[i] into array stack
        stack.push(nums[i])
    }

    // If the above condition is not satisfied then return false.
    return false
};

/*
Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.
*/


/*
Example 1:

Input: nums = [1,2,3,4]
Output: false
Explanation: There is no 132 pattern in the sequence.
Example 2:

Input: nums = [3,1,4,2]
Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:

Input: nums = [-1,3,2,0]
Output: true
Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
*/


/*
Constraints:

n == nums.length
1 <= n <= 2 * 105
-109 <= nums[i] <= 109
*/