// https://leetcode.com/problems/shuffle-the-array/description/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    const result = [];
    for(let i=0; i<n; i++){
        result.push(nums[i], nums[i+n]);
    }
    return result;
};

console.log(shuffle([2,5,1,3,4,7], 3)); // [2,3,5,4,1,7] 

/*
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
*/