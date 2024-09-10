// https://leetcode.com/problems/remove-k-digits/description/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {

    // initialize stack as empty array
    let stack = [];

    // run for of loop for num
    for (let digit of num) {

        // run while loop until length of stack is greater than 0 and k greater than 0 and 
        // last element of stack is greater than digit
        while (stack.length > 0 && k > 0 && stack[stack.length - 1] > digit) {

            // decrement k
            k--;

            // remove last element from stack
            stack.pop();
        }

        // push digit to stack
        stack.push(digit);
    }

    // initialize findZeros as 0
    let findZeros = 0;

    // run while loop until findZeros is less than length of stack and stack[findZeros] is equal to "0" then increase findZeros
    while (findZeros < stack.length && stack[findZeros] === "0") {
        findZeros++;
    }

    // slice the stack array based on findZeros index and stack.length - k index
    stack = stack.slice(findZeros, stack.length - k);

    // convert stack to string
    let result = stack.join("");

    // if result is not empty string than return result otherwise "0"
    return result ? result : "0";
};


/*
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.
*/


/*
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/


/*
Constraints:

1 <= k <= num.length <= 105
num consists of only digits.
num does not have any leading zeros except for the zero itself.
*/