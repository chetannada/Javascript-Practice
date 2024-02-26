// https://leetcode.com/problems/split-the-array/submissions/1185645181/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
    // sort the array num in ascending order
    nums.sort((a, b) => a - b);

    // store the first element of array nums in arr1
    let arr1 = [nums[0]];

    // store the second element of array nums in arr2
    let arr2 = [nums[1]];

    // loop through every element of arrray nums from index 2 and increment index by 2
    for (let i = 2; i < nums.length; i += 2) {
        // if arr1 includes ith element of nums then return false
        if (arr1.includes(nums[i])) {
            return false;
        } else {
            // else push ith element of nums in arr1
            arr1.push(nums[i]);
        }

        // if arr2 includes i + 1th element of nums then return false
        if (arr2.includes(nums[i + 1])) {
            return false;
        } else {
            // else push i + 1th element of nums in arr2
            arr2.push(nums[i + 1]);
        }
    }

    // otherwise return true
    return true;
};


/*
You are given an integer array nums of even length. You have to split the array into two parts nums1 and nums2 such that:

nums1.length == nums2.length == nums.length / 2.
nums1 should contain distinct elements.
nums2 should also contain distinct elements.
Return true if it is possible to split the array, and false otherwise.
*/


/*
Example 1:

Input: nums = [1,1,2,2,3,4]
Output: true
Explanation: One of the possible ways to split nums is nums1 = [1,2,3] and nums2 = [1,2,4].

Example 2:

Input: nums = [1,1,1,1]
Output: false
Explanation: The only possible way to split nums is nums1 = [1,1] and nums2 = [1,1]. Both nums1 and nums2 do not contain distinct elements. Therefore, we return false.
*/


/*
Constraints:

1 <= nums.length <= 100
nums.length % 2 == 0 
1 <= nums[i] <= 100
*/