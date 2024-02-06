// https://leetcode.com/problems/first-unique-character-in-a-string/description/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {

    // loop through the every character of string s
    for (let i = 0; i < s.length; i++) {

        // if index of ith character in string is equal to last index of ith character then return i
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }

    // otherwise return -1
    return - 1;
};

/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/


/*
Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
*/


/*
Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/