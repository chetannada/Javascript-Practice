// https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {

    // initialize empty positive array, negative array and result array
    let positive = [], negative = [], result = [];

    // loop through every element of array nums
    for (let i = 0; i < nums.length; i++) {

        // if every element of nums is equal to absolute value of that element of nums then push that element in array positive otherwise in push in negative array
        if (nums[i] === Math.abs(nums[i])) {
            positive.push(nums[i]);
        } else {
            negative.push(nums[i]);
        }
    }

    // loop through every element of array positive
    for (let j = 0; j < positive.length; j++) {

        // push every element of array positive in array result
        result.push(positive[j]);

        // push every element of array negative in array result
        result.push(negative[j]);
    }

    // return array result
    return result;
};


/*
You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should rearrange the elements of nums such that the modified array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.
*/


/*
Example 1:

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
Example 2:

Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].
*/


/*
Constraints:

2 <= nums.length <= 2 * 105
nums.length is even
1 <= |nums[i]| <= 105
nums consists of equal number of positive and negative integers.
*/