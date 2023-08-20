// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {

    // initialize function checkCount with parameter index
    function checkCount(index) {

        // initialize count to zero
        let count = 0;

        // loop through every character of string num
        for (let j = 0; j < num.length; j++) {

            // if index is equal to every character of string num then increment count
            if (index == num[j]) {

                count++;
            }
        }

        // return count
        return count;
    }

    // loop through every character of string num
    for (let i = 0; i < num.length; i++) {

        // invoke the function checkCount with argument index i
        let digitCount = checkCount(i);

        // if every character of num is not equal to digitCount then return false
        if (num[i] != digitCount) {

            return false;
        }
    }

    // return true
    return true;
};

/*
You are given a 0-indexed string num of length n consisting of digits.

Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.
*/


/*
Example 1:

Input: num = "1210"
Output: true
Explanation:
num[0] = '1'. The digit 0 occurs once in num.
num[1] = '2'. The digit 1 occurs twice in num.
num[2] = '1'. The digit 2 occurs once in num.
num[3] = '0'. The digit 3 occurs zero times in num.
The condition holds true for every index in "1210", so return true.

Example 2:

Input: num = "030"
Output: false
Explanation:
num[0] = '0'. The digit 0 should occur zero times, but actually occurs twice in num.
num[1] = '3'. The digit 1 should occur three times, but actually occurs zero times in num.
num[2] = '0'. The digit 2 occurs zero times in num.
The indices 0 and 1 both violate the condition, so return false.
/*

/*
Constraints:

n == num.length
1 <= n <= 10
num consists of digits.
*/