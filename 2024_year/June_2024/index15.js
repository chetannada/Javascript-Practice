// https://leetcode.com/problems/xor-operation-in-an-array/

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {

    // create n element of array fill with 0
    let nums = new Array(n).fill(0);

    // run for in loop for nums
    for (let key in nums) {

        // add start to twice of key and assign to current element of nums
        nums[key] = start + (2 * key);
    }

    // return bitwise XOR of every elements of nums
    return nums.reduce((a, b) => a ^ b);
};

/*
You are given an integer n and an integer start.

Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.
*/


/*
Example 1:

Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.

Example 2:

Input: n = 4, start = 3
Output: 8
Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.
*/


/*
Constraints:

1 <= n <= 1000
0 <= start <= 1000
n == nums.length
*/