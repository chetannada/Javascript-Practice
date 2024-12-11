// https://leetcode.com/problems/valid-parentheses/description/


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    // initialize stack to store opening brackets
    let stack = [];

    // if current character is opening brackets then push that character in stack and return false if current character is not match the same type of brackets
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push("(");
        } else if (s[i] === "[") {
            stack.push("[");
        } else if (s[i] === "{") {
            stack.push("{");
        } else if (s[i] === ")") {
            if (stack.pop() !== "(") {
                return false;
            }
        } else if (s[i] === "]") {
            if (stack.pop() !== "[") {
                return false;
            }
        } else if (s[i] === "}") {
            if (stack.pop() !== "{") {
                return false;
            }
        }
    }

    // if stack has length then return false otherwise true
    return stack.length ? false : true;
};


/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

*/


/*
Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

*/


/*
Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

*/