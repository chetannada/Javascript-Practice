// https://leetcode.com/problems/majority-element-ii/description/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {

    // initialize numBy3 as length of nums divide by 3
    let numBy3 = nums.length / 3;

    // initialize Hashmap for counting new frequency
    let map = new Map();

    // run for of loop for nums
    for (let num of nums) {

        // count the frequency of num in map
        map.set(num, (map.get(num) || 0) + 1);
    }

    // initialize result as empty array
    let result = [];

    // run for of loop for map.entries()
    for (let [key, value] of map.entries()) {

        // if value is greater then numBy3
        if (value > numBy3) {

            // push key in result
            result.push(key);
        }
    }

    // return final answer result
    return result;
};



/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
*/


/*
Example 1:

Input: nums = [3,2,3]
Output: [3]

Example 2:

Input: nums = [1]
Output: [1]

Example 3:

Input: nums = [1,2]
Output: [1,2]
 
*/


/*
Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
*/