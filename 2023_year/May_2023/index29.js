// https://leetcode.com/problems/sum-of-unique-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let arr = []; // initialize an empty array
    let duplicateNumArr = nums.filter((item, index, arr) => arr.indexOf(item) !== index); // find duplicate element from array using array.filter()
    for(let i =0; i<nums.length; i++){ // loop through the element of array nums
        if(!duplicateNumArr.includes(nums[i])){ // if nums[i] is not present in duplicate array
            arr.push(nums[i]); // then push nums element into arr
        }
    }
    return arr.reduce((a,b) => a + b, 0); // find the sum of arr using reduce and return it
};

/*
Example 1:
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.

Example 3:
Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
 
Constraints:
1 <= nums.length <= 100
1 <= nums[i] <= 100
*/