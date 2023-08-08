// https://leetcode.com/problems/remove-trailing-zeros-from-a-string/

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {

    for (let i = num.length - 1; i >= 0; i--) { // loop through the every element of string num from end
        if (num[i] != 0) {  // if every character of num is not equal to zero
            return num.slice(0, i + 1); // return  the character of num upto ith character
        }
    }
};

/*
Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.
*/

/*
Example 1:
Input: num = "51230100"
Output: "512301"
Explanation: Integer "51230100" has 2 trailing zeros, we remove them and return integer "512301".

Example 2:
Input: num = "123"
Output: "123"
Explanation: Integer "123" has no trailing zeros, we return integer "123".
 
Constraints:
1 <= num.length <= 1000
num consists of only digits.
num doesn't have any leading zeros.
*/