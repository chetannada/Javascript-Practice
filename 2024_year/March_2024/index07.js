// https://leetcode.com/problems/partition-array-according-to-given-pivot/description/

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {

    // initialize n equal to length of nums
    let n = nums.length;

    // create new Array of n length and all fill with pivot
    let result = new Array(n).fill(pivot);

    // initialize two pointer left and right and start and end for keep track of indexing
    let left = 0, right = n - 1, start = 0, end = n - 1;

    // run while loop until left is less than n
    while (left < n) {

        // current element of left index is less than pivot then 
        // assign it to the result array with start index
        // increment start index to keep track of left element
        if (nums[left] < pivot) {
            result[start] = nums[left];
            start++;
        }

        // current element of right index is greater than pivot then 
        // assign it to the result array with end index
        // decrement start index to keep track of right element
        if (nums[right] > pivot) {
            result[end] = nums[right];
            end--;
        }

        // increment left and decrement right index
        left++;
        right--;
    }

    // return answer result
    return result;
};

/*
You are given a 0-indexed integer array nums and an integer pivot. Rearrange nums such that the following conditions are satisfied:

Every element less than pivot appears before every element greater than pivot.
Every element equal to pivot appears in between the elements less than and greater than pivot.
The relative order of the elements less than pivot and the elements greater than pivot is maintained.
More formally, consider every pi, pj where pi is the new position of the ith element and pj is the new position of the jth element. For elements less than pivot, if i < j and nums[i] < pivot and nums[j] < pivot, then pi < pj. Similarly for elements greater than pivot, if i < j and nums[i] > pivot and nums[j] > pivot, then pi < pj.
Return nums after the rearrangement.
*/


/*
Example 1:

Input: nums = [9,12,5,10,14,3,10], pivot = 10
Output: [9,5,3,10,10,12,14]
Explanation: 
The elements 9, 5, and 3 are less than the pivot so they are on the left side of the array.
The elements 12 and 14 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [9, 5, 3] and [12, 14] are the respective orderings.

Example 2:

Input: nums = [-3,4,3,2], pivot = 2
Output: [-3,2,4,3]
Explanation: 
The element -3 is less than the pivot so it is on the left side of the array.
The elements 4 and 3 are greater than the pivot so they are on the right side of the array.
The relative ordering of the elements less than and greater than pivot is also maintained. [-3] and [4, 3] are the respective orderings.
*/


/*
Constraints:

1 <= nums.length <= 105
-106 <= nums[i] <= 106
pivot equals to an element of nums.
*/