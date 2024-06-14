// https://leetcode.com/problems/minimum-increment-to-make-array-unique/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {

    // sort the array nums in ascending order
    nums.sort((a, b) => a - b);

    // initialize count for counting minimum increment to make array uinque
    let count = 0;

    // run for loop from index 1 to length of nums 
    for (let i = 1; i < nums.length; i++) {

        // if current element of nums is less than or equal to previous element of nums
        if (nums[i] <= nums[i - 1]) {

            // increment previous element by 1 ans store in value
            let value = nums[i - 1] + 1;

            // get difference of value and current element of nums and add in coumt
            count += value - nums[i];

            // assign value to current element of nums
            nums[i] = value;
        }
    }

    // return final answer count
    return count;
};

/*
You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.

Return the minimum number of moves to make every value in nums unique.

The test cases are generated so that the answer fits in a 32-bit integer.
*/


/*
Example 1:

Input: nums = [1,2,2]
Output: 1
Explanation: After 1 move, the array could be [1, 2, 3].

Example 2:

Input: nums = [3,2,1,2,1,7]
Output: 6
Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
*/


/*
Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105
*/