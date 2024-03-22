// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {

    // initialize deltedZero to keep track of zero
    // and left pointer to keep track of longest subarray
    // and n for length of nums
    let deltedZero = 1, left = 0, n = nums.length;

    // run for loop from index 0 to n
    for (let i = 0; i < n; i++) {

        // if current element is equal to 0
        // so we have to delete that element so we decrement deltedZero
        if (nums[i] === 0) deltedZero--;

        // if deltedZero is less than 0 means we deleted more than one element 
        if (deltedZero < 0) {

            // if left pointer value of nums is equal to 0 then decrement deltedZero 
            if (nums[left] === 0) deltedZero++;

            // move left pointer towords right
            left++;
        }
    }

    // return subtraction of (n - 1) with left
    return (n - 1) - left;
};

/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

*/


/*
Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
*/


/*
Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/