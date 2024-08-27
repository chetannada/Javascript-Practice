// https://leetcode.com/problems/count-almost-equal-pairs-i/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var countPairs = function (nums) {

    // initialize count for for count almost equal pairs
    let count = 0;

    // initialize n as length of nums
    let n = nums.length;

    // run for loop from index 0 to n
    for (let i = 0; i < n; i++) {

        // convert nums[i] into string and then into array
        let arrI = nums[i].toString().split('');

        // run for loop from i+1 to n
        for (let j = i + 1; j < n; j++) {

            // convert nums[j] into string and then into array
            let arrJ = nums[j].toString().split('');

            // if function isAlmostEqual(arrI, nums[j]) or isAlmostEqual(arrJ, nums[i]) are true then increment count
            if (isAlmostEqual(arrI, nums[j]) || isAlmostEqual(arrJ, nums[i])) {
                count++;
            }
        }
    }

    // return final anwer count
    return count;
};

// initialize function isAlmostEqual() which accept arr and match as parameter
function isAlmostEqual(arr, match) {

    // initialize n as length of arr
    let n = arr.length;

    // run for loop from index 0 to n
    for (let i = 0; i < n; i++) {

        // run for loop from index i to n
        for (let j = i; j < n; j++) {

            // swap the ith and jth element of arr
            [arr[i], arr[j]] = [arr[j], arr[i]];

            // convert arr to string and make number and check if it's equal to match if yes then return true
            if (Number(arr.join('')) === match) {
                // swap the ith and jth element of arr again to make it same array
                [arr[i], arr[j]] = [arr[j], arr[i]];
                return true;
            }

            // swap the ith and jth element of arr again to make it same array
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // return true
    return false;
}


/*
You are given an array nums consisting of positive integers.

We call two integers x and y in this problem almost equal if both integers can become equal after performing the following operation at most once:

Choose either x or y and swap any two digits within the chosen number.
Return the number of indices i and j in nums where i < j such that nums[i] and nums[j] are almost equal.

Note that it is allowed for an integer to have leading zeros after performing an operation.
*/


/*
Example 1:

Input: nums = [3,12,30,17,21]

Output: 2

Explanation:

The almost equal pairs of elements are:

3 and 30. By swapping 3 and 0 in 30, you get 3.
12 and 21. By swapping 1 and 2 in 12, you get 21.
Example 2:

Input: nums = [1,1,1,1,1]

Output: 10

Explanation:

Every two elements in the array are almost equal.

Example 3:

Input: nums = [123,231]

Output: 0

Explanation:

We cannot swap any two digits of 123 or 231 to reach the other.
*/


/*
Constraints:

2 <= nums.length <= 100
1 <= nums[i] <= 106
*/