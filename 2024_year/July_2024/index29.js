// https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/description/

/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {

    // initialize close to track how many close bracket "]" is there in string s
    // maxClose to track how many close bracket "]" is before open bracket "[" 
    let close = 0, maxClose = 0;

    // run for of loop for character s 
    for (let char of s) {

        // if char is open brackt "[" then decrement close
        if (char === "[") {
            close--;
        } else {

            // else increment close
            close++;

            // find max between close and maxClose
            maxClose = Math.max(close, maxClose);
        }
    }

    // add 1 to maxClose and divide by 2 and return it's Math.floor value
    return Math.floor((maxClose + 1) / 2);
};

/*
You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.

A string is called balanced if and only if:

It is the empty string, or
It can be written as AB, where both A and B are balanced strings, or
It can be written as [C], where C is a balanced string.
You may swap the brackets at any two indices any number of times.

Return the minimum number of swaps to make s balanced.
*/


/*
Example 1:

Input: s = "][]["
Output: 1
Explanation: You can make the string balanced by swapping index 0 with index 3.
The resulting string is "[[]]".
Example 2:

Input: s = "]]][[["
Output: 2
Explanation: You can do the following to make the string balanced:
- Swap index 0 with index 4. s = "[]][][".
- Swap index 1 with index 5. s = "[[][]]".
The resulting string is "[[][]]".
Example 3:

Input: s = "[]"
Output: 0
Explanation: The string is already balanced.
 
*/


/*
Constraints:

n == s.length
2 <= n <= 106
n is even.
s[i] is either '[' or ']'.
The number of opening brackets '[' equals n / 2, and the number of closing brackets ']' equals n / 2.
*/