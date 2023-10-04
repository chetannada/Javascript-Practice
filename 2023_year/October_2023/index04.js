// https://leetcode.com/problems/number-of-good-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {

    // initialize result to be zero
    let result = 0;

    // sort the array nums
    nums.sort((a, b) => a - b);

    // loop through every element of array nums
    for (let i = 0; i < nums.length; i++) {

        // find the last index of current element of array nums using lastIndexOf()
        let lastIndex = nums.lastIndexOf(nums[i]);

        // find the difference between lastIndex and i and add 1
        let diff = lastIndex - i + 1;

        // find goodPair using n * (n - 1) / 2 formula
        let goodPair = (diff * (diff - 1)) / 2;

        // add goodpair to result
        result += goodPair;

        // make i as lastIndex
        i = lastIndex;
    }

    // return the result
    return result;
};

/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/


/*
Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:

Input: nums = [1,2,3]
Output: 0
*/


/*
Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/