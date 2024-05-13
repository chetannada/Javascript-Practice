// https://leetcode.com/problems/next-greater-element-ii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {

    // initialize an array ans filled with -1 of the same length as the input array nums.
    const ans = Array(nums.length).fill(-1);

    // and stack as an empty array, which will be used to store indices of elements from nums.
    const stack = [];

    // Loops through nums array twice its length. This is because it's a circular array, and we want to consider each element twice to cover all possible comparisons.
    for (let i = 0; i < nums.length * 2; i++) {

        // find current index using modulo
        const index = i % nums.length;

        // run while loop to find Next Greater Elements:
        while (stack.length && nums[stack.at(-1)] < nums[index]) {
            ans[stack.pop()] = nums[index];
        }

        // Push Current Index to Stack:
        stack.push(index);

    }

    // return answer array
    return ans;
};

/*
Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.
*/


/*
Example 1:

Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.

Example 2:

Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]
*/


/*
Constraints:

1 <= nums.length <= 104
-109 <= nums[i] <= 109
*/