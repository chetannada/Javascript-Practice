// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {

    // initialize count for counting sub-arrays which satisfy the threshold condition
    // initialize windowSum for tracking sum of sub-array of size k
    let count = 0, windowSum = 0;

    // run for loop for calculate sum of sub-array of size k-1 and store in windowSum
    for (let i = 0; i < k - 1; i++) {
        windowSum += arr[i];
    }

    // run for loop for calculate sum of sub-array of remaining elements 
    for (let i = k - 1; i < arr.length; i++) {

        // update windowSum by adding current ith element of arr
        windowSum += arr[i];

        // if average of windowSum is greater than threshould then increment count
        if ((windowSum / k) >= threshold) count++;

        // update windowSum by removing one left most element of array
        windowSum -= arr[i - k + 1];
    }

    // return answer count
    return count;
};

/*
Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.
*/


/*
Example 1:

Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
Output: 3
Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

Example 2:

Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
Output: 6
Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.
*/


/*
Constraints:

1 <= arr.length <= 105
1 <= arr[i] <= 104
1 <= k <= arr.length
0 <= threshold <= 104
*/