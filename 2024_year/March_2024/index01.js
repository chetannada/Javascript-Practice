// https://leetcode.com/problems/next-permutation/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const n = nums.length;

    // Step 1. run for loop from right to left
    for (let i = n - 2; i >= 0; i--) {

        // find first digit that is less than its right
        if (nums[i] < nums[i + 1]) {

            // Step 2. run for loop from right to left
            for (let j = n - 1; j > i; j--) {

                // find the digit that is larger than nums[i]
                if (nums[j] > nums[i]) {

                    // Step 3. swap nums[i] and nums[j]
                    swap(nums, i, j);

                    // Step 4. reverse all elements from i+1
                    reverse(nums, i + 1, n - 1);
                    return;
                }
            }
        }
    }

    // nums is in descending order then reverse the all elements of nums
    nums.reverse();
};

// initialize function swap which swap the i and j element 
const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

// initialize  function reverse which reverse element from start to end
const reverse = (nums, start, end) => {

    // run while loop from start to end
    while (start < end) {

        // swap start index element and end index element of array nums
        swap(nums, start, end);

        // increment start and decrement end
        start++;
        end--;
    }
};


/*
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.
*/


/*
Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]

Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]

Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
*/


/*
Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100
*/