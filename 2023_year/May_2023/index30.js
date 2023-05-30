// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

    /**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    // find the duplicate num from nums and return first element from array
      return nums.filter((item, index, arr) => arr.indexOf(item) !== index)[0];
  };

/*
Example 1:
Input: nums = [1,2,3,3]
Output: 3

Example 2:
Input: nums = [2,1,2,5,3,2]
Output: 2

Example 3:
Input: nums = [5,1,5,2,5,3,5,4]
Output: 5
 
Constraints:
2 <= n <= 5000
nums.length == 2 * n
0 <= nums[i] <= 104
nums contains n + 1 unique elements and one of them is repeated exactly n times.
*/