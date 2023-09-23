// https://leetcode.com/problems/calculate-money-in-leetcode-bank/description/

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {

    // initialize count and monday to zero and k to 1
    let count = 0, monday = 0, k = 1;

    // loop through 1 to n
    for (let i = 1; i <= n; i++) {

        // add sum of k and monday to count
        count += (k + monday);

        // find monday value by dividing i by 7 and round down the value using Math.floor()
        monday = Math.floor(i / 7);

        // if i modulo 7 is equal to zero then make k equal to 1 otherwise increment k
        if (i % 7 === 0) {
            k = 1;
        } else {
            k++;
        }
    }

    // return the count
    return count;
};


/*
Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.
*/


/*
Example 1:

Input: n = 4
Output: 10
Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.

Example 2:

Input: n = 10
Output: 37
Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.

Example 3:

Input: n = 20
Output: 96
Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.
*/


/*
Constraints:

1 <= n <= 1000
*/