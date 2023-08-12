// https://leetcode.com/problems/self-dividing-numbers/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    // initialize empty array result 
    let result = [];

    // loop through the left to right
    for (let i = left; i <= right; i++) {

        // convert i to string using toString()
        let digits = i.toString();

        // loop through the every character of digits
        for (let j = 0; j < digits.length; j++) {

            // if every character of digits is not equal to zero and digits is divisable by every character of digits
            if (digits[j] != 0 && digits % digits[j] == 0) {

                // if j is equal to length of the digits then push number digits in result
                if (j == digits.length - 1) {
                    result.push(+digits);
                }
            } else {
                // else break the loop
                break;
            }
        }
    }

    // return the array result
    return result;
};

/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].
*/

/*
Example 1:
Input: left = 1, right = 22
Output: [1,2,3,4,5,6,7,8,9,11,12,15,22]

Example 2:
Input: left = 47, right = 85
Output: [48,55,66,77]
 
Constraints:
1 <= left <= right <= 104
*/