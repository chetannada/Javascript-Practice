// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b) => a - b); // sort the array items in nums using sort()
    if(nums.length === 1) return nums[0]; // if there is one element in array return that element

    for(let i=0; i<nums.length; i++){ // loop through the every element of array nums
        let next = nums[i+1]; // initialize next for next element of nums array
        if(next || next == 0){ // if next or next is equal to zero
            if(nums[i] == next){ // if current element and next are equal then increment i
                i++;
            }else{ // else return current element
                return nums[i];
            }
        }else{ // else return curretn element
            return nums[i];
        }
    }
};

/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

/*
Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
 
Constraints:
1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/