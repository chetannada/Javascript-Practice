// https://leetcode.com/problems/remove-duplicate-letters/description/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {

    // initialize stack as empty array to store smallest lexicographical unique letters
    let stack = [];

    // initialize seen object to keep track of duplicate letters
    let seen = {};

    // initialize occurence object to keep track of letters last index
    let occurence = {};

    // run for loop from index 0 to length of s
    for (let i = 0; i < s.length; i++) {

        // assign last index of every letter of s
        occurence[s[i]] = i;
    }

    // run for loop from index 0 to length of s
    for (let i = 0; i < s.length; i++) {

        // initialize char as current letter of s
        let char = s[i];

        // if char is in seen then continue the loop
        if (seen[char]) {
            continue;
        }

        // run while loop until if length of stack is greater than 0
        // and last element of stack is greater than char
        // ans occurence of last element of stack index is greater than i
        while (stack.length > 0 && stack[stack.length - 1] > char && occurence[stack[stack.length - 1]] > i) {

            // remove last element from stack
            let pop = stack.pop();

            // update key pop in seen as false
            seen[pop] = false;
        }

        // add key char of seen as true
        seen[char] = true;

        // push every char in stack
        stack.push(char);
    }

    // convert stack array into string and return it
    return stack.join('');
};



/*
Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is 
the smallest in lexicographical order
 among all possible results.
*/


/*
Example 1:

Input: s = "bcabc"
Output: "abc"

Example 2:

Input: s = "cbacdcbc"
Output: "acdb"
*/


/*
Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
*/