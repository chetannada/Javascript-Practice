// https://leetcode.com/problems/first-missing-positive/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {

    // initialize n for length of array
    // initialize new array of size n+1 to store the positive numbers from the input array.
    let n = nums.length, arr = new Array(n + 1).fill(0);

    // run for loop from 0 index to n
    for (let i = 0; i < n; i++) {

        // initialize num equal to ith element of nums
        let num = nums[i];

        // if num is greater then 0 then assign num to numth index in array arr
        if (num > 0) {
            arr[num] = num;
        }
    }

    // make first element to Infinity
    arr[0] = Infinity;

    // find index of 0 in arr
    let index = arr.indexOf(0);

    // return n+1 if index is equal to -1 otherwise return index value
    return index === -1 ? n + 1 : index;
};

/*
Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
*/


/*
Example 1:

Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:

Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:

Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/


/*
Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
*/