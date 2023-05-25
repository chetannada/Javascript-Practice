// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let prevEl = nums[0]; // initialize prevEl to first element of nums array
    let counter = 0; // initilaize counter to zero
    
    for (let i = 0; i < nums.length - 1; i++) { // loop through the every element of array
        if (nums[i + 1] <= prevEl) { // if next element is less than to previous element 
            const diff = prevEl + 1 - nums[i+1]; // find difference of previous element and next element and add 1
            counter += diff; // add diff in counter
            prevEl++; // increment previous element
        } else { // else make next element as previous element
            prevEl = nums[i+1];
        }
    }

    return counter; // return counter
};


/*
Example 1:
Input: nums = [1,1,1]
Output: 3
Explanation: You can do the following operations:
1) Increment nums[2], so nums becomes [1,1,2].
2) Increment nums[1], so nums becomes [1,2,2].
3) Increment nums[2], so nums becomes [1,2,3].

Example 2:
Input: nums = [1,5,2,4,1]
Output: 14

Example 3:
Input: nums = [8]
Output: 0
*/