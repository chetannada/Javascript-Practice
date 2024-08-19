// https://leetcode.com/problems/number-of-good-pairs/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    // initialize map for count the frequency of element and count for answer
    let map = new Map(), count = 0;

    // run for of loop for nums
    for (let num of nums) {

        // count the frequency for num in map
        map.set(num, (map.get(num) || 0) + 1);
    }

    // run for of loop for map values
    for (let n of map.values()) {

        // count the values using formula n * (n - 1)
        count += ((n * (n - 1)) / 2);
    }

    // return answer count
    return count;
};


/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/


/*
Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:

Input: nums = [1,2,3]
Output: 0
*/


/*
Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/