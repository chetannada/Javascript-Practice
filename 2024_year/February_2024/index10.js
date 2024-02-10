// https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let largest = -1;

    // loop through the every character of string s
    for (let i = 0; i < s.length; i++) {

        // find the lastIndexOf ith character of s
        let index = s.lastIndexOf(s[i])

        // if i is not equal to index and index not equal to -1
        if (i !== index && index !== -1) {

            // copy the string s from index i+1 to index and find the length
            let strLen = s.slice(i + 1, index).length
            if (largest < strLen) {
                largest = strLen;
            }
        }
    }

    // return the answer largest
    return largest;
};

/*
Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.
*/


/*
Example 1:

Input: s = "aa"
Output: 0
Explanation: The optimal substring here is an empty substring between the two 'a's.

Example 2:

Input: s = "abca"
Output: 2
Explanation: The optimal substring here is "bc".

Example 3:

Input: s = "cbzxy"
Output: -1
Explanation: There are no characters that appear twice in s.
*/


/*
Constraints:

1 <= s.length <= 300
s contains only lowercase English letters.
*/