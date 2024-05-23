// https://leetcode.com/problems/sum-of-unique-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {

    // initialize sum for addition of Unique elements
    let sum = 0;

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // if lastIndexOf nums[i] and indexOf of nums[i] both are equal to i then add nums[i] to sum
        if (nums.lastIndexOf(nums[i]) === i && nums.indexOf(nums[i]) === i) {
            sum += nums[i];
        }
    }

    // return answer sum
    return sum;
};

/*
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.
*/


/*
Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
*/


/*
Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/