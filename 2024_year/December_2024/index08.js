// https://leetcode.com/problems/remove-outermost-parentheses/description/

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let result = "";

    // initialize count to track Outer parantheses
    let count = 0;

    for (let i = 0; i < s.length; i++) {

        // if s[i] is equal to "("
        if (s[i] === "(") {

            // if count is greater than 0 then add s[i] in result
            if (count > 0) {
                result += s[i];
            }

            // increment count
            count++;
        } else if (s[i] === ")") { // else if s[i] is equal to ")"

            // otherwise decrement count
            count--;

            // if count is greater than 0 then add s[i] in result
            if (count > 0) {
                result += s[i];
            }
        }
    }

    // return result
    return result;
};


/*
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

    For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
*/


/*
Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".

*/


/*
Constraints:

    1 <= s.length <= 105
    s[i] is either '(' or ')'.
    s is a valid parentheses string.

*/