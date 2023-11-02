// https://leetcode.com/problems/find-triangular-sum-of-an-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {

    // run the while loop until nums.length greater than 1
    while (nums.length > 1) {

        // create new array using Array() take length of array nums.length - 1 and fill with 0 using fill()
        let newNums = Array(nums.length - 1).fill(0);

        // run the for loop for array nums uptp nums.length - 1
        for (let i = 0; i < nums.length - 1; i++) {

            // assign remainder of a division operation between addition of current and next element value of array nums and 10 to newNums[i]
            newNums[i] = (nums[i] + nums[i + 1]) % 10;
        }

        // assign array newNums to nums
        nums = newNums;
    }

    // return first value of array nums
    return nums[0];
};

/*
You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).

The triangular sum of nums is the value of the only element present in nums after the following process terminates:

Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
Replace the array nums with newNums.
Repeat the entire process starting from step 1.
Return the triangular sum of nums.
*/

/*
Example 1:

Input: nums = [1,2,3,4,5]
Output: 8
Explanation:
The above diagram depicts the process from which we obtain the triangular sum of the array.

Example 2:

Input: nums = [5]
Output: 5
Explanation:
Since there is only one element in nums, the triangular sum is the value of that element itself.
*/


/*
Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 9
*/