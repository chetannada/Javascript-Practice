// https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/description/


/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let min = Infinity;

    function sumOfDigits(num) {

        // find sum of digits of num by coverting num to string and then array and use reduce method
        let digitSum = num.toString().split("").reduce((a, b) => +a + +b, 0);
        return digitSum;
    }
    for (let i = 0; i < nums.length; i++) {

        // invoke sumOfDigits() function to get sum
        let sum = sumOfDigits(nums[i]);

        // find minimum value between min and sum
        min = Math.min(min, sum);
    }

    return min;
};


/*
You are given an integer array nums.

You replace each element in nums with the sum of its digits.

Return the minimum element in nums after all replacements.
*/



/*
Example 1:

Input: nums = [10,12,13,14]

Output: 1

Explanation:

nums becomes [1, 3, 4, 5] after all replacements, with minimum element 1.

Example 2:

Input: nums = [1,2,3,4]

Output: 1

Explanation:

nums becomes [1, 2, 3, 4] after all replacements, with minimum element 1.

Example 3:

Input: nums = [999,19,199]

Output: 10

Explanation:

nums becomes [27, 10, 19] after all replacements, with minimum element 10.
*/



/*
Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 104
*/