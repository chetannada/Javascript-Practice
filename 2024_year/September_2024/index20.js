// https://leetcode.com/problems/minimum-size-subarray-sum/description/


/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {

    // initialize count as Infinity for counting minimum size subarray sum
    // initialize prefix sum as 0
    // initialize two pointer i and j as 0 for tracking minimum size subarray index
    let count = Infinity, sum = 0, i = 0, j = 0;

    // run for loop from index 0 to nums length
    for (; i < nums.length; i++) {

        // add nums[i] in sum
        sum += nums[i];

        // run while loop until sum is greater than or equal to target
        while (sum >= target) {

            // initialize index as i - j + 1
            let index = i - j + 1;

            // update count with minimum value from count and index
            count = Math.min(count, index);

            // subtract nums[j] with sum
            sum -= nums[j];

            // increase j pointer
            j++;
        }
    }

    // return 0 if count is Infinity otherwise count itself
    return count === Infinity ? 0 : count;
};


/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/


/*
Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/


/*
Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
*/