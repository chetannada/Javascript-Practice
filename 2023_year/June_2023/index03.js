// https://leetcode.com/problems/two-out-of-three/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let arr = []; // initialize an empty array arr
    function towOut(nums1, nums2, nums3){ // function toOut
        for(let i=0; i<nums1.length; i++){ // loop through the every element of array nums1
            if(nums2.includes(nums1[i]) || nums3.includes(nums1[i])){ // if nums1[i] includes in nums2 or nums3 then push in arr
                arr.push(nums1[i]);
            }
        }
        for(let j=0; j<nums2.length; j++){ // loop through the every element of array nums2
            if(nums3.includes(nums2[j]) && !nums1.includes(nums2[j])){ // if nums2[j] includes in nums3 and not includes in nums1 then push in arr
                arr.push(nums2[j]);
            }
        }
    }
    function greaterArr(nums1, nums2, nums3){ // function greaterArr
        if(nums1.length >= nums2.length && nums1.length >= nums3.length){ // if nums1 array is greater then nums2 and nums3 then call toOut function
            towOut(nums1, nums2, nums3);
        }else if(nums2.length >= nums1.length && nums2.length >= nums3.length){ // else if nums2 array is greater then nums1 and nums3 then call toOut function
           towOut(nums2, nums1, nums3);
        }else{ // else call toOut function in which nums3 is greater
            towOut(nums3, nums2, nums1);
        }
    }
    greaterArr(nums1, nums2, nums3); // call greaterArr function with given array parameter
    return [...new Set(arr)]; // return unique element of array using Set()
};

/*

Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.
 
*/

/*
Example 1:
Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.

Example 2:
Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.

Example 3:
Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.
 
Constraints:
1 <= nums1.length, nums2.length, nums3.length <= 100
1 <= nums1[i], nums2[j], nums3[k] <= 100
*/