// https://leetcode.com/problems/reverse-string/description/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {

    // initialize len which is rounds a length of s rounded UP to the nearest integer
    // and two pointer start and end
    let len = Math.ceil(s.length / 2), start = 0, end = s.length - 1;

    // run while loop until starat less than len
    while (start < len) {

        // interchange the start and end index value of s to make reverse string
        [s[start], s[end]] = [s[end], s[start]];

        // move star pointer to the right side and end to the left side
        start++;
        end--;
    }

    // return reverse string s
    return s;
};

/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/


/*
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/


/*
Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/