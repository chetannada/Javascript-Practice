// https://leetcode.com/problems/sort-array-by-parity/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {

    // find odd elements from the array nums using filter method
    let odd = nums.filter(item => item % 2 !== 0);

    // find even elements from the array nums using filter method
    let even = nums.filter(item => item % 2 === 0);

    // return the even and odd elements using spread operator
    return [...even, ...odd];
};

/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

Return any array that satisfies this condition.
*/

/*
Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Example 2:

Input: nums = [0]
Output: [0]
*/

/*
Constraints:

1 <= nums.length <= 5000
0 <= nums[i] <= 5000
*/