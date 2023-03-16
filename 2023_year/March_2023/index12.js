// https://leetcode.com/problems/left-and-right-sum-differences/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let answer = [], leftSum = [], rightSum = [], a = 0, b= 0;
    for(let i=0; i<nums.length; i++){
        leftSum.push(a);
        a = a + nums[i];
        rightSum.unshift(b);
        b = b + nums[nums.length - 1 - i];
    }
    for(let j=0; j<nums.length; j++){
    answer[j] = Math.abs(leftSum[j] - rightSum[j]);
    }
    return answer;
};

console.log(leftRigthDifference([10,4,8,3])); // [15,1,11,22]

/*
Input: nums = [10,4,8,3]
Output: [15,1,11,22]
Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
*/