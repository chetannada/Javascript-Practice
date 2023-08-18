// https://leetcode.com/problems/find-the-array-concatenation-value/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function (nums) {

    // initialize function concatenation with len as parameter
    function concatenation(len) {

        // initialize count to zero
        let count = 0;

        // loop through o to len
        for (let i = 0; i < len; i++) {

            // initialize first to every element of array nums
            let first = nums.at(i);

            // initialize last to every last element of array nums
            let last = nums.at(-1 - i);

            // initialize add to concate first and last
            let add = "" + first + last;

            // convert add to number using unary operator (+) then add to count
            count += (+add);

        }

        // return count
        return count;
    }

    // initialize length to round down the length array divide by 2
    let length = Math.floor(nums.length / 2);

    // if length of nums equal to 1 then return first element of nums
    if (nums.length == 1) {
        return nums[0];
    }

    // if length of nums divide by 2 then return concatenation function with argument length
    if (nums.length % 2 == 0) {

        return concatenation(length);
    } else {

        // else return concatenation function with argument length and center element of nums
        return concatenation(length) + nums[length];
    }
};

/*
You are given a 0-indexed integer array nums.

The concatenation of two numbers is the number formed by concatenating their numerals.

For example, the concatenation of 15, 49 is 1549.
The concatenation value of nums is initially equal to 0. Perform this operation until nums becomes empty:

If there exists more than one number in nums, pick the first element and last element in nums respectively and add the value of their concatenation to the concatenation value of nums, then delete the first and last element from nums.
If one element exists, add its value to the concatenation value of nums, then delete it.
Return the concatenation value of the nums.
*/

/*
Example 1:
Input: nums = [7,52,2,4]
Output: 596
Explanation: Before performing any operation, nums is [7,52,2,4] and concatenation value is 0.
 - In the first operation:
We pick the first element, 7, and the last element, 4.
Their concatenation is 74, and we add it to the concatenation value, so it becomes equal to 74.
Then we delete them from nums, so nums becomes equal to [52,2].
 - In the second operation:
We pick the first element, 52, and the last element, 2.
Their concatenation is 522, and we add it to the concatenation value, so it becomes equal to 596.
Then we delete them from the nums, so nums becomes empty.
Since the concatenation value is 596 so the answer is 596.

Example 2:
Input: nums = [5,14,13,8,12]
Output: 673
Explanation: Before performing any operation, nums is [5,14,13,8,12] and concatenation value is 0.
 - In the first operation:
We pick the first element, 5, and the last element, 12.
Their concatenation is 512, and we add it to the concatenation value, so it becomes equal to 512.
Then we delete them from the nums, so nums becomes equal to [14,13,8].
 - In the second operation:
We pick the first element, 14, and the last element, 8.
Their concatenation is 148, and we add it to the concatenation value, so it becomes equal to 660.
Then we delete them from the nums, so nums becomes equal to [13].
 - In the third operation:
nums has only one element, so we pick 13 and add it to the concatenation value, so it becomes equal to 673.
Then we delete it from nums, so nums become empty.
Since the concatenation value is 673 so the answer is 673.
 
Constraints:
1 <= nums.length <= 1000
1 <= nums[i] <= 104
*/