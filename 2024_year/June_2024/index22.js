// https://leetcode.com/problems/count-number-of-nice-subarrays/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {

    // run array.map() and convert each element to 0 if it's even otherwise odd and assign back to nums
    nums = nums.map((num) => num % 2 === 0 ? 0 : 1);

    // initialize start, count, result and oddCount to 0
    let start = 0, count = 0, result = 0, oddCount = 0;

    // run for loop from index 0 to length of nums
    for (let i = 0; i < nums.length; i++) {

        // if current element of nums is 1
        if (nums[i] === 1) {

            // make count to 0 and increment oddCount
            count = 0;
            oddCount++;
        }

        // run while loop if oddCount is equal to k 
        while (oddCount === k) {

            // increment count
            count++;

            // if start index of nums is equal to 1 then decrease oddCount
            if (nums[start] === 1) {
                oddCount--;
            }

            // increase start
            start++;
        }

        // add count to result
        result += count;
    }

    // return final result
    return result;
};


/*
Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.
*/


/*
Example 1:

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

Example 2:

Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.

Example 3:

Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16
*/


/*
Constraints:

1 <= nums.length <= 50000
1 <= nums[i] <= 10^5
1 <= k <= nums.length
*/