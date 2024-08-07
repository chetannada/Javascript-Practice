// https://leetcode.com/problems/remove-outermost-parentheses/description/

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {

    // initialize open and close for open Parentheses and close Parentheses and j as 0 to track valid Parentheses
    let open = 0, close = 0, j = 0;

    // initialize result as empty string
    let result = "";

    // iterate through the every character of string s
    for (let i = 0; i < s.length; i++) {

        // if s[i] is equal t o "(" then increment open
        if (s[i] === "(") {
            open++;
        }

        // if s[i] is equal to ")" then increment close
        if (s[i] === ")") {
            close++;
        }

        // if open is equal to close
        if (open === close) {

            // add sring s from j+1 index to i (i not inclusive) in result
            result += s.slice(j + 1, i);

            // assign i+1 as j
            j = i + 1;

            // assign open and close as 0
            open = 0;
            close = 0;
        }
    }

    // return final answer result
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