// https://leetcode.com/problems/number-of-arithmetic-triplets/description/

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {

    // initialize count for answer
    let count = 0;

    // run for loop from index 1 to length - 1
    for (let j = 1; j < nums.length - 1; j++) {

        // run for loop from index 0 to j
        for (let i = 0; i < j; i++) {

            // run for loop from index j + 1 to length of nums
            for (let k = j + 1; k < nums.length; k++) {

                // if nums[j] - nums[i] is equal to diff and nums[k] - nums[j] is equal to diff then increment count
                if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) count++;
            }
        }
    }

    // return count
    return count++;
};

/*
You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

    i < j < k,
    nums[j] - nums[i] == diff, and
    nums[k] - nums[j] == diff.

Return the number of unique arithmetic triplets.
*/


/*
Example 1:

Input: nums = [0,1,4,6,7,10], diff = 3
Output: 2
Explanation:
(1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
(2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 

Example 2:

Input: nums = [4,5,6,7,8,9], diff = 2
Output: 2
Explanation:
(0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
(1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.

*/


/*
Constraints:

    3 <= nums.length <= 200
    0 <= nums[i] <= 200
    1 <= diff <= 50
    nums is strictly increasing.

*/