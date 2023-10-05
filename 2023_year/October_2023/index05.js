// https://leetcode.com/problems/add-digits/description/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {

    // initialize function add with parameter digits
    function add(digits) {

        // convert digits to string using toString() and then array using split() and then sum of all digits using reduce()
        let sum = digits.toString().split('').reduce((a, b) => +a + +b, 0);

        // if sum length is greater than 1 then return function add() with sum as argument
        if (sum.toString().split('').length > 1) {
            return add(sum);
        } else {
            // else return sum
            return sum;
        }
    }

    // return function add() with num as argument
    return add(num);
};

/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
*/


/*
Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:

Input: num = 0
Output: 0
*/


/*
Constraints:

0 <= num <= 231 - 1
*/