// https://leetcode.com/problems/running-sum-of-1d-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {

    // initialize result as first element of array nums
    const result = [nums[0]]

    // run for loop from index 1 to length of nums
    for (let i = 1; i < nums.length; i++) {

        // add ith element and i-1th of result element value in result
        result.push(nums[i] + result[i - 1]);
    }

    // return result array
    return result
};

/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/


/*
Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

*/


/*
Constraints:

    1 <= nums.length <= 1000
    -10^6 <= nums[i] <= 10^6

*/
