// https://leetcode.com/problems/is-subsequence/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    // initialize two pointer i and j as 0
    let i = 0, j = 0;

    // run for loop from index 0 to length of t
    for (; i < t.length; i++) {

        // if ith character of t is equal to jth character of s then increase jth pointer
        if (t[i] === s[j]) {
            j++;
        }
    }

    // if length of s is equal to j then return true otherwise false
    return s.length === j;
};


/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/


/*
Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
*/


/*
Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
*/