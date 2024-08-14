// https://leetcode.com/problems/partition-array-for-maximum-sum/description/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {

    // initialize n as length of arr
    let n = arr.length;

    // initialize dp (dynamic programming) array with length of n+1 and fill with 0
    let dp = new Array(n + 1).fill(0);

    // run for loop from index 1 to n (inclusive) and is used to calculate the maximum sum for each subarray ending at index i-1 in arr.
    for (let i = 1; i <= n; i++) {

        // initialize max and maxSum as 0
        // max will keep track of the maximum value in the current partition
        // maxSum will store the maximum sum that can be obtained by partitioning the array up to index i-1
        let max = 0, maxSum = 0;

        // run for loop from index 1 to j <= k && i - j >= 0
        for (let j = 1; j <= k && i - j >= 0; j++) {

            // update max with maximum value between the current max and the element arr[i - j]
            // This keeps track of the largest element in the current partition of j elements
            max = Math.max(max, arr[i - j]);

            // update the maxSum with maximum value between the current maxSum and the sum of:
            // dp[i - j] (the maximum sum of elements before the current partition),
            // and add the current partition sum, which is max * j 
            maxSum = Math.max(maxSum, dp[i - j] + max * j);
        }

        // update ith element of dp with maxSum
        dp[i] = maxSum;
    }

    //  return dp[n], which contains the maximum sum obtainable by partitioning the entire array arr
    return dp[n];
};


/*
Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.

Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer.
*/


/*
Example 1:

Input: arr = [1,15,7,9,2,5,10], k = 3
Output: 84
Explanation: arr becomes [15,15,15,9,10,10,10]

Example 2:

Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
Output: 83

Example 3:

Input: arr = [1], k = 1
Output: 1
*/


/*
Constraints:

1 <= arr.length <= 500
0 <= arr[i] <= 109
1 <= k <= arr.length
*/