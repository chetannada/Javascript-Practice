// https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/description/


/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {

        // if current element of s is ")"
        if (s[i] === ")") {

            let tempArr = [];

            // run while loop until last element of stack is not equal t0 "("
            while (stack.at(-1) !== "(") {
                tempArr.push(stack.pop());
            }

            stack.pop();

            // push all element of tempARr in stack
            stack.push(...tempArr);

        } else {

            // else push every element in stack
            stack.push(s[i]);
        }
    }

    return stack.join("");
}


/*
You are given a string s that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.
*/


/*
Example 1:

Input: s = "(abcd)"
Output: "dcba"
Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
*/


/*
Constraints:

1 <= s.length <= 2000
s only contains lower case English characters and parentheses.
It is guaranteed that all parentheses are balanced.
*/