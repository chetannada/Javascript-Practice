// https://leetcode.com/problems/divide-array-into-equal-pairs/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let count = 0; // initialize count to zero
    nums.sort((a,b) => a - b); // sort the elements of array
    for(let i =0; i< nums.length; i++){ // loop through the every elements of array
        if(nums[i] === nums[i+1]){ // if nums[i] and nums[i+1] is equal then increment count and i
            count++;
            i++;
        }else{ // else break the loop
            break;
        }
    }
    return count == (nums.length/2); // return true if count is equal to half of nums length else false
};

/*
You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.
*/

/*
Example 1:
Input: nums = [3,2,3,2,2,2]
Output: true
Explanation: 
There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation: 
There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.
 
Constraints:
nums.length == 2 * n
1 <= n <= 500
1 <= nums[i] <= 500
*/