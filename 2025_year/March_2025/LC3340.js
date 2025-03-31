// https://leetcode.com/problems/check-balanced-string/description/

/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    let odd = 0;
    let even = 0;

    for (let i = 0; i < num.length; i++) {

        // if index is even then add current digit in even else in odd
        if (i % 2 === 0) {
            even += +num[i];
        } else {
            odd += +num[i];
        }
    }

    // if odd is even is equal to odd then its balanced string
    return even === odd;
};


/*
You are given a string num consisting of only digits. A string of digits is called balanced if the sum of the digits at even indices is equal to the sum of digits at odd indices.

Return true if num is balanced, otherwise return false.
*/


/*
Example 1:

Input: num = "1234"

Output: false

Explanation:

The sum of digits at even indices is 1 + 3 == 4, and the sum of digits at odd indices is 2 + 4 == 6.
Since 4 is not equal to 6, num is not balanced.
Example 2:

Input: num = "24123"

Output: true

Explanation:

The sum of digits at even indices is 2 + 1 + 3 == 6, and the sum of digits at odd indices is 4 + 2 == 6.
Since both are equal the num is balanced.
*/


/*
Constraints:

2 <= num.length <= 100
num consists of digits only
*/