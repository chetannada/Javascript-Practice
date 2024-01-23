// https://leetcode.com/problems/set-mismatch/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let len = nums.length;
    let missing = 0, duplicate = 0;

    // Initialize an array arr of size len+1 with all elements set to 0
    const arr = new Array(len + 1).fill(0);

    // Iterate through the given nums array and update the count of each number in the array arr.
    for (const num of nums) {
        arr[num]++;
    }

    for (let i = 1; i < arr.length; i++) {

        // If the count of a number is 2, it is the duplicate number.
        if (arr[i] === 2) {
            duplicate = i;
        }

        // If the count of a number is 0, it is the missing number.
        if (arr[i] === 0) {
            missing = i;
        }
    }

    // Return an array containing the duplicate and missing numbers.
    return [duplicate, missing];
};

/*
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.
*/


/*
Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]

Example 2:

Input: nums = [1,1]
Output: [1,2]
*/


/*
Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 104
*/