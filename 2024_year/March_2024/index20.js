// https://leetcode.com/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    // sorting using mergeSort
    return mergeSort(nums)
};

function mergeSort(arr) {
    // Base case: If the array has only one element, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Conquer: Recursively sort the left and right halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Combine: Merge the sorted halves back together
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    const merged = [];
    let i = 0, j = 0;

    // Compare elements from left and right arrays and add the smaller one to merged
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements from either left or right array
    merged.push(...left.slice(i));
    merged.push(...right.slice(j));

    // finally return merged array
    return merged;
}

/*
Given an array of integers nums, sort the array in ascending order and return it.

You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
*/


/*
Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).

Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
Explanation: Note that the values of nums are not necessairly unique.
*/


/*
Constraints:

1 <= nums.length <= 5 * 104
-5 * 104 <= nums[i] <= 5 * 104
*/