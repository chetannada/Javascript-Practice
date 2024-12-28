// https://leetcode.com/problems/intersection-of-two-arrays/description/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    // initialize unique1 for unique elements in array nums1 using Set
    let unique1 = [...new Set(nums1)];

    // // initialize unique2 for unique elements in array nums2 using Set
    let unique2 = [...new Set(nums2)];

    // initialize empty array arr
    let arr = [];

    // run for loop from index 0 to length of unique1
    for (let i = 0; i < unique1.length; i++) {

        // run for loop from index 0 to length of unique2
        for (let j = 0; j < unique2.length; j++) {

            // if ith element of unique1 is equal to ith element of unique2 then push element of unique1 in arr then break the loop
            if (unique1[i] === unique2[j]) {
                arr.push(unique1[i]);
                break;
            }
        }
    }

    // return answer arr
    return arr;
};



/*
Given two integer arrays nums1 and nums2, return an array of their 
intersection
. Each element in the result must be unique and you may return the result in any order.
*/


/*
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
*/


/*
Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/