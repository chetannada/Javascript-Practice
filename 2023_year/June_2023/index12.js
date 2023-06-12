// https://leetcode.com/problems/find-greatest-common-divisor-of-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let max = Math.max(...nums); // find maximum number from array nums
    let min = Math.min(...nums); // find minimum number from array nums

    function gcd(min, max){
        let divisor = 1; // initilaize divisor to 1
        for(let i=1; i<=min; i++){ // loop through through the 1 to min
            if(min % i === 0 && max % i === 0){ // if min and max both are divisable by i then divisior becomes i
                divisor = i
            }
        }
        return divisor; // return divisor
    }
    return gcd(min, max); // return function gcd divisor value and min and max are parameter
};


/*
Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
*/


/*
Example 1:
Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.

Example 2:
Input: nums = [7,5,6,8,3]
Output: 1
Explanation:
The smallest number in nums is 3.
The largest number in nums is 8.
The greatest common divisor of 3 and 8 is 1.

Example 3:
Input: nums = [3,3]
Output: 3
Explanation:
The smallest number in nums is 3.
The largest number in nums is 3.
The greatest common divisor of 3 and 3 is 3.
 
Constraints:
2 <= nums.length <= 1000
1 <= nums[i] <= 1000
*/