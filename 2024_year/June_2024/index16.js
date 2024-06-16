// https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/

/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function (hours) {

    // initialize count to 0
    let count = 0;

    // run for loop from index 0 to length of hours
    for (let i = 0; i < hours.length; i++) {

        // run for loop from index i + 1 to length of hours
        for (let j = i + 1; j < hours.length; j++) {

            // if sum of hours[i] and hours[j] and modulo with 24 is equal to 0 then increment count 
            if ((hours[i] + hours[j]) % 24 === 0) {
                count++;
            }
        }
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

Explanation:

The pairs of indices that form a complete day are (0, 1) and (3, 4).

Example 2:

Input: hours = [72,48,24,3]

Output: 3

Explanation:

The pairs of indices that form a complete day are (0, 1), (0, 2), and (1, 2).
*/


/*
Constraints:

1 <= hours.length <= 100
1 <= hours[i] <= 109
*/