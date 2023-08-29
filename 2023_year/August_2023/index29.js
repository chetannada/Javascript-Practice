// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {

    // initialize count to be zero
    let count = 0;

    // initialize length to be length of string s
    let length = s.length;

    // if length is less than 3 then return count
    if (length < 3) return count;

    // loop through the length 
    for (let i = 0; i < length; i++) {

        // find subString of s of size three character using slice()
        let subString = s.slice(i, i + 3);

        // find length of unique character in subString using new Set()
        let subStrLength = [...new Set([...subString])].length;

        // if subStrLength is equal to 3 then count to zero
        if (subStrLength === 3) count++;

        // if i is equal to length - 3 then break the loop
        if (i === length - 3) break;
    }

    // return count;
    return count;
};

/*
A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.
*/

/*
Example 1:

Input: s = "xyzzaz"
Output: 1
Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
The only good substring of length 3 is "xyz".

Example 2:

Input: s = "aababcabc"
Output: 4
Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
The good substrings are "abc", "bca", "cab", and "abc".
*/


/*
Constraints:

1 <= s.length <= 100
s​​​​​​ consists of lowercase English letters.
*/