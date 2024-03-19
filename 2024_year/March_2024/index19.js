// https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/description/

/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {

    // initialize new Set()
    let set = new Set();

    // run for loop from index 1
    for (let i = 1; i < s.length; i++) {

        // if ith character and i-1th characters are equal 
        // or set has i-1th and ith character then return true
        if (s[i] === s[i - 1] || set.has(`${s[i - 1]}${s[i]}`)) return true;

        // add ith and i-1th character property in set
        set.add(`${s[i]}${s[i - 1]}`)
    }

    //otherwise return answer false
    return false;
};

/*
Given a string s, find any 
substring
 of length 2 which is also present in the reverse of s.

Return true if such a substring exists, and false otherwise.
*/


/*
Example 1:

Input: s = "leetcode"

Output: true

Explanation: Substring "ee" is of length 2 which is also present in reverse(s) == "edocteel".

Example 2:

Input: s = "abcba"

Output: true

Explanation: All of the substrings of length 2 "ab", "bc", "cb", "ba" are also present in reverse(s) == "abcba".

Example 3:

Input: s = "abcd"

Output: false

Explanation: There is no substring of length 2 in s, which is also present in the reverse of s.
*/


/*
Constraints:

1 <= s.length <= 100
s consists only of lowercase English letters.
*/