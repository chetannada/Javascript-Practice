// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count = 0; // initialize count to zero
    for(let i=0; i<nums.length; i++){ // loop through the every element of the array nums
        for(let j=i+1; j<nums.length; j++){ // loop through the every element of the array nums start from i + 1
            if((nums[i] == nums[j]) && (i * j) % k == 0){ // if nums[i] equal to nums[j] and i multiply j divide by k then increment count
                count++;
            }
        }
    }
    return count; // return count
};

/*
Example 1:
Input: nums = [3,1,2,2,2,1,3], k = 2
Output: 4
Explanation:
There are 4 pairs that meet all the requirements:
- nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
- nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
- nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
- nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

Example 2:
Input: nums = [1,2,3,4], k = 1
Output: 0
Explanation: Since no value in nums is repeated, there are no pairs (i,j) that meet all the requirements.
*/