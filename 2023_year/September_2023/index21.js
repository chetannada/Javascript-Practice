// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {

    // initialize array stack
    const stack = [];

    // loop thorugh every character of s
    for (const char of s) {

        // if stack of stack.length -1 is equal to char then remove element from the last in stack otherwise push the char in stack
        stack[stack.length - 1] === char ? stack.pop() : stack.push(char);
    }

    // convert array stack to string using join() and return it
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