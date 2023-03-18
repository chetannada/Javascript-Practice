// https://leetcode.com/problems/running-sum-of-1d-array/submissions/917652390/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // initialize the empty array result and count
    let result = [], count = 0;
    for(let i=0; i<nums.length; i++){
        count+= nums[i]; // add count and num[i] to the count
        result.push(count); // push count to the result array
    }
    return result;
};

console.log(runningSum([1,2,3,4])); // [1,3,6,10]

/*
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/