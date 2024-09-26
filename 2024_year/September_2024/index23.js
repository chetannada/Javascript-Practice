// https://leetcode.com/problems/jump-game-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {

    // initialize jump as 0 for number of jump needed to reach the end
    let jump = 0;

    // initialize currentEnd as 0 which is end of current jump range
    let currentEnd = 0;

    // initialize farthest as 0 which we can reach at each step
    let farthest = 0;

    // run for loop from index 0 to length of nums - 1
    for (let i = 0; i < nums.length - 1; i++) {

        // update farthest with maximum value between farthest and i + nums[i]
        farthest = Math.max(farthest, i + nums[i]);

        // if we already reach the end of current jump range
        if (i === currentEnd) {

            // make jump by incrementing by 1
            jump++;

            // update currentEnd to the farthest 
            currentEnd = farthest;

            // if we already reach the last index then break out of the loop
            if (currentEnd > nums.length - 1) {
                break;
            }
        }
    }

    // return minimum number of jump
    return jump;
};


/*
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
*/

/*
Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: nums = [2,3,0,1,4]
Output: 2
*/


/*
Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 1000
It's guaranteed that you can reach nums[n - 1].
*/