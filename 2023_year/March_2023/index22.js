// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = eval(nums.join("+")); // element sum of nums using eval()
    let digitSum = 0; // initialize digitSum to zero
    for(let i=0; i<nums.length; i++){ // iterate through the every element of the array
        if(nums[i] > 9){ // if number is greater than 9
            let sum = eval(String(nums[i]).split("").join("+")); // conver number to string and then array and again to string and sum using eval()
            digitSum = digitSum + sum;
        }else{
            digitSum = digitSum + nums[i]; // add nums[i] to digitsum if number is less than 9
        }
    }
    let ans = Math.abs(elementSum - digitSum); // find absolute difference of elementSum and digitSum
    return ans; // return answer
};

/*
Example 1:

Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Explanation:
The element sum of nums is 1 + 2 + 3 + 4 = 10.
The digit sum of nums is 1 + 2 + 3 + 4 = 10.
The absolute difference between the element sum and digit sum is |10 - 10| = 0.
*/