// https://leetcode.com/problems/sum-of-subarray-minimums/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    let sum = 0;
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i - 1; j >= -1; j--) {
            if (j === -1) {
                left.push(-1)
                break
            }
            else if (arr[j] <= arr[i]) {
                left.push(j)
                break
            }
        }

        for (let j = i + 1; j <= arr.length; j++) {
            if (j === arr.length) {
                right.push(arr.length)
                break
            }
            else if (arr[j] < arr[i]) {
                right.push(j)
                break
            }
        }

    }

    for (let i = 0; i < left.length; i++) {
        sum += (i - left[i]) * (right[i] - i) * arr[i]
    }

    return sum % (10 ** 9 + 7);
};

/*
Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.
*/


/*
Example 1:

Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.

Example 2:

Input: arr = [11,81,94,43,3]
Output: 444
*/


/*
Constraints:

1 <= arr.length <= 3 * 104
1 <= arr[i] <= 3 * 104
*/