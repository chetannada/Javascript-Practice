// https://leetcode.com/problems/maximum-width-ramp/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {

    // initialize max as 0 and stack as empty array
    let max = 0;
    let stack = [];

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // if stack has elements and 0th index of last element of stack is less than or equal to ith element of nums
        if (stack.length > 0 && stack[stack.length - 1][0] <= nums[i]) {

            // initialize count as stack.length - 1
            let count = stack.length - 1;

            // run while loop until count not equal to -1 and stack[count][0] is less than or equal to nums[i]
            while (count !== -1 && stack[count][0] <= nums[i]) {

                // update max with maximum value between max and i - stack[count][1]
                max = Math.max(max, i - stack[count][1]);

                // decrement count
                count--;
            }
        } else {

            // else push 2d array in stack which contain nums[i] and i
            stack.push([nums[i], i]);
        }

    }

    // return max width ramp
    return max;
};



/*
A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.

Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.

 
*/


/*
Example 1:

Input: nums = [6,0,8,2,1,5]
Output: 4
Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.

Example 2:

Input: nums = [9,8,1,0,1,9,4,0,4,1]
Output: 7
Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.
*/


/*
Constraints:

2 <= nums.length <= 5 * 104
0 <= nums[i] <= 5 * 104
*/