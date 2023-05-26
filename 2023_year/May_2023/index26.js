// https://leetcode.com/problems/find-the-difference-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let arr1 = [], arr2 = []; // initialize an empty array arr1 and arr2
    for(let i=0; i<nums1.length; i++){ // loop through the every element of array num1
        if(!nums2.includes(nums1[i])){ // if every element of num1 is not present in nums2
            arr1.push(nums1[i]); // then push the element of num1 in arr1
        }
    }
    for(let j=0; j<nums2.length; j++){ // loop through the every element of array num2
        if(!nums1.includes(nums2[j])){ // if every element of num2 is not present in nums1
            arr2.push(nums2[j]); // then push the element of num2 in arr1
        }
    }
    return [[...new Set(arr1)], [...new Set(arr2)]]; // return the unique element of arr1 and arr2 inside new array
};

/*
Example 1:
Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

Example 2:
Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

Constraints:
1 <= nums1.length, nums2.length <= 1000
-1000 <= nums1[i], nums2[i] <= 1000
*/