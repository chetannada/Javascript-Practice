// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count = 0; // initialize count to zero
    if(nums.length == 1) return count; // if array length is one then return count
    // run two for loop for calculate difference
    for(let i=0; i<nums.length; i++){ 
        for(let j=i+1; j<nums.length; j++){
            if(Math.abs(nums[i] - nums[j]) == k){ // if difference eqaul to k then increment count
                count++;
            }
        }
    }
    return count;
};

/*
Example 1:

Input: nums = [1,2,2,1], k = 1
Output: 4
Explanation: The pairs with an absolute difference of 1 are:
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]
- [1,2,2,1]


Example 2:

Input: nums = [1,3], k = 3
Output: 0
Explanation: There are no pairs with an absolute difference of 3.


Example 3:

Input: nums = [3,2,1,5,4], k = 2
Output: 3
Explanation: The pairs with an absolute difference of 2 are:
- [3,2,1,5,4]
- [3,2,1,5,4]
- [3,2,1,5,4]
*/