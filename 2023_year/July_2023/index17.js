// https://leetcode.com/problems/sort-array-by-parity-ii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let evenArr = [], oddArr = [], result = []; // initialize empty evenArr, oddArr and result
    for(let i=0; i<nums.length; i++){ // loop through the every element of array nums
        if(nums[i] % 2 === 0){ // if element of nums is even then push that element in evenArr
            evenArr.push(nums[i]);
        }else{ // else push that element of nums in oddArr
            oddArr.push(nums[i]);
        }
    }

    for(let j=0; j<evenArr.length; j++){ // loop through the every element of evenArr
        result.push(evenArr[j]); // first push element of evenArr in result
        result.push(oddArr[j]); // then push element of oddArr in result
    }

    return result; // return the arr result
};

/*
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.
*/

/*
Example 1:
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

Example 2:
Input: nums = [2,3]
Output: [2,3]
 
Constraints:
2 <= nums.length <= 2 * 104
nums.length is even.
Half of the integers in nums are even.
0 <= nums[i] <= 1000
*/