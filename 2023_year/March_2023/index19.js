// https://leetcode.com/problems/create-target-array-in-the-given-order/submissions/920846943/

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = []; // initialize an empty array
    for(let i=0; i<nums.length; i++){ // loop through the every element of an array
        target.splice(index[i], 0, nums[i]); // add element to the target as per index
    }
    return target; // return the target array
};

console.log(createTargetArray([0,1,2,3,4],[0,1,2,2,1])); // [0,4,1,3,2]

/*
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
*/