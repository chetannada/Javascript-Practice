// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {

    // Initialize common function with str as parameter
    function common(str) {

        // find the index of '#' in string str using indexOf()
        let index = str.indexOf('#');

        // if index is equal to 0 or 1 then remove index and previous character from str
        if (index === 0 || index === 1) {
            str = str.slice(index + 1);
        } else {

            // else copy other character apart from index and previous index character
            str = str.slice(0, index - 1) + str.slice(index + 1);
        }

        // return string str
        return str;
    }

    // find the length of string s and t
    let sLen = s.length;
    let tLen = t.length;

    // loop through the length of sLen
    for (let i = 0; i < sLen; i++) {

        // if string s includes '#' then invoke the function common() and pass s as argument
        if (s.includes('#')) {
            s = common(s)
        } else {

            // else break the loop
            break;
        }
    }

    // loop through the length of tLen
    for (let j = 0; j < tLen; j++) {

        // if string t includes '#' then invoke the function common() and pass t as argument
        if (t.includes('#')) {
            t = common(t)
        } else {

            // else break the loop
            break;
        }
    }
    // return true if s is strictly equal to s otherwise false
    return s === t
};

/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
*/


/*
Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/


/*
Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
*/