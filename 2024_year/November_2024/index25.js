// https://leetcode.com/problems/basic-calculator-ii/description/


/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {

    // initialize stack as empty array
    let stack = [];

    // initialize num for adding number and prevOperator to track Math operator
    let num = '';
    let prevOperator = '+';

    // run for loop from index 0 to length of s
    for (let i = 0; i <= s.length; i++) {

        // initialize char as s[i]
        let char = s[i];

        // i char is greater than or equal to "0" and less than or equal to "9"
        if (char >= '0' && char <= '9') {

            // add char in num and continue for loop
            num += char;
            continue;
        }

        // if char is less than "0" or char is greater than "9" and char is not equal to " " space or i is equal to length of s
        if ((char < "0" || char > '9') && char !== " " || i === s.length) {

            // if prevOperator is equal to "+" then push num into stack
            if (prevOperator === "+") stack.push(Number(num))

            // if prevOperator is eqaul to "-" then push -num into stack
            if (prevOperator === "-") stack.push(-Number(num))

            // if prevOperator is eqaul to "*" then remove last number from stack and multiply with num and then push into stack
            if (prevOperator === "*") stack.push(stack.pop() * Number(num))

            // if prevOperator is equal to "/" then remove last number from stack and divide with num and then truck that value and then push into stack
            if (prevOperator === "/") stack.push(Math.trunc(stack.pop() / Number(num)));

            // update prevOperator with char and num with "" empty string
            prevOperator = char;
            num = "";
        }

    }

    // do sum of the all the number from stack and return it
    return stack.reduce((total, value) => total + value, 0);
};


/*
Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().
*/


/*
Example 1:

Input: s = "3+2*2"
Output: 7

Example 2:

Input: s = " 3/2 "
Output: 1

Example 3:

Input: s = " 3+5 / 2 "
Output: 5
*/


/*
Constraints:

1 <= s.length <= 3 * 105
s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
s represents a valid expression.
All the integers in the expression are non-negative integers in the range [0, 231 - 1].
The answer is guaranteed to fit in a 32-bit integer.
*/