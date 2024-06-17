// https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/

/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {

    // initialize count to 0
    let count = 0;

    // initialize new array of length 24 and fill with 0
    let arr = new Array(24).fill(0);

    // run for of loop for hours
    for (let hour of hours) {

        // here we have to check (num1 + num2) % 24 = 0 or
        // (24 - num1 % 24) % 24 = num2 % 24
        // so wer are using second equation to solve this problem in O(n) time
        // add value of (24 - hour % 24) % 24 in array arr and add in count
        count += arr[(24 - hour % 24) % 24];

        // increment hour% 24 value in arr
        arr[hour % 24]++;
    }

    // return count
    return count;
};



/*
Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.

A complete day is defined as a time duration that is an exact multiple of 24 hours.

For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.
*/


/*
Example 1:

Input: hours = [12,12,30,24,24]

Output: 2

Explanation: The pairs of indices that form a complete day are (0, 1) and (3, 4).

Example 2:

Input: hours = [72,48,24,3]

Output: 3

Explanation: The pairs of indices that form a complete day are (0, 1), (0, 2), and (1, 2).
*/


/*
Constraints:

1 <= hours.length <= 5 * 105
1 <= hours[i] <= 109
*/