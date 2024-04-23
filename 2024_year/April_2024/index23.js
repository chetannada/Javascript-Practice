// https://leetcode.com/problems/left-and-right-sum-differences/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    // initialize n as length of nums and answer array as n element
    let n = nums.length, answer = new Array(n).fill(0);

    // initialize sum for counting sum value and left sum and right sum as array with 0 value
    let sum = 0, leftSum = [0], rightSum = [0];

    // run for loop from index 0 to n-1
    for (let i = 0; i < n - 1; i++) {

        // add nums[i] in sum
        sum += nums[i];

        // push sum in leftSum
        leftSum.push(sum);
    }

    // re-initialize sum to 0
    sum = 0;

    // run for loop from n-1 to greater than 0th index
    for (let i = n - 1; i > 0; i--) {

        // add nums[i] to sum
        sum += nums[i];

        // add sum to rightSum from starting
        rightSum.unshift(sum);
    }

    // run for loop from index 0 to n
    for (let i = 0; i < n; i++) {

        // find absolute value of subtraction of ith element of leftSum and rightSum
        let value = Math.abs(leftSum[i] - rightSum[i]);

        // assign value to answer[i]
        answer[i] = value;
    }

    // return array answer
    return answer;
};

/*
Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.
Where:

leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
Return the array answer.
*/


/*
Example 1:

Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

Example 2:

Input: nums = [1]
Output: [0]
Explanation: The array leftSum is [0] and the array rightSum is [0].
The array answer is [|0 - 0|] = [0].
*/


/*
Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 105
*/