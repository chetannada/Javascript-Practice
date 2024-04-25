// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {

    // initialize sum equal to 0
    let sum = 0;

    // run for loop from index 0 to length of arr
    for (let i = 0; i < arr.length; i++) {

        // run for loop from index i to length of arr
        for (let j = i; j < arr.length; j += 2) {

            // run for loop from index i to j
            for (let k = i; k <= j; k++) {

                // add arr[k] to sum
                sum += arr[k];
            }
        }
    }

    // return answer sum
    return sum;
};

/*
Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.

A subarray is a contiguous subsequence of the array.


*/


/*
Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66
 
*/


/*
Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= 1000
*/