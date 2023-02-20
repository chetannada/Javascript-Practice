// https://leetcode.com/problems/search-insert-position/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // Initialize result variavle and set to zero
    let result = 0;
    // loop through the every element of an array
    for(let i= 0; i<nums.length; i++){
        // check if last value of an array is greater than or equal to target
        if(nums[nums.length -1] >= target){
        // check if current item is equal to target
        if(nums[i] === target){
            result = i;
            break;
        }else if(nums[i] > target){ // check if current item is greater then target
            result = i;
            break;
        }
        }else{
            // if last value of array is less than target
            result = nums.length;
        }
    }
    // check if result is zero the retutn array length value neighter result value
    return result;
};
console.log(searchInsert([1,3,5,6], 5)); // 2

/*
Input: nums = [1,3,5,6], target = 5
Output: 2
*/