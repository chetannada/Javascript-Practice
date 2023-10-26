// https://leetcode.com/problems/optimal-partition-of-string/

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {

    // initialize count to be 1
    let count = 1;

    // initialize prevChars to first character of string s
    let prevChars = s[0];

    // loop through every character of string s from 1 to string.length
    for (let i = 1; i < s.length; i++) {

        // if s[i] is not includes in prevChars then add prevChars and s[i] and assign to prevChars
        if (!prevChars.includes(s[i])) {

            prevChars += s[i];
        } else {

            // else increment count and assign s[i] in prevChars
            count++;
            prevChars = s[i];
        }
    }

    // return count
    return count;
};

/*
Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

Return the minimum number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.
*/


/*
Example 1:

Input: s = "abacaba"
Output: 4
Explanation:
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed.

Example 2:

Input: s = "ssssss"
Output: 6
Explanation:
The only valid partition is ("s","s","s","s","s","s").
*/


/*
Constraints:

1 <= s.length <= 105
s consists of only English lowercase letters.
*/