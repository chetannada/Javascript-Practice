// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/


/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {

    // initialize stack to track adjacent duplicate letters
    let stack = [];

    let loop = true;

    for (let char of s) {

        loop = true;

        // if last element of stack and char are same means it's duplicate so remove from stack and make loop false
        while (stack.length && (stack.at(-1) === char)) {
            loop = false;
            stack.pop();
        }

        // if loop is true then push char in stack
        if (loop) {
            stack.push(char);
        }

    }

    // convert stack to string and then return it
    return stack.join('');
};


/*
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
*/


/*
Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

Example 2:

Input: s = "azxxzy"
Output: "ay"

*/


/*
Constraints:

    1 <= s.length <= 105
    s consists of lowercase English letters.

*/