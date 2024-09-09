// https://leetcode.com/problems/reach-end-of-array-with-max-score/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumScore = function (nums) {

    // initialize n as length of nums
    const n = nums.length;

    // initialize ans and iPrev as 0
    let ans = 0;
    let iPrev = 0;

    // run for loop from index 1 to n
    for (let i = 1; i < n; i++) {

        // if nums[iPrev] is less than or equal to nums[i]
        if (nums[iPrev] <= nums[i]) {

            // add score and is calculate as (i - iPrev) * nums[iPrev]
            ans += (i - iPrev) * nums[iPrev];

            // update iPrev with i
            iPrev = i;
        }
    }

    // if iPrev is not equal to n - 1
    if (iPrev !== n - 1) {

        // add score and is calculate as (n - 1 - iPrev) * nums[iPrev]
        ans += (n - 1 - iPrev) * nums[iPrev];
    }

    // return final answer
    return ans;
};


/*
You are given an integer array nums of length n.

Your goal is to start at index 0 and reach index n - 1. You can only jump to indices greater than your current index.

The score for a jump from index i to index j is calculated as (j - i) * nums[i].

Return the maximum possible total score by the time you reach the last index.
*/


/*
Example 1:

Input: nums = [1,3,1,5]

Output: 7

Explanation:

First, jump to index 1 and then jump to the last index. The final score is 1 * 1 + 2 * 3 = 7.

Example 2:

Input: nums = [4,3,1,3,2]

Output: 16

Explanation:

Jump directly to the last index. The final score is 4 * 4 = 16.
*/


/*
Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
*/