// https://leetcode.com/problems/permutation-in-string/description/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    // if length of s1 is greater than length of s2 then return false
    if (s1.length > s2.length) return false;

    // initialize s1Count and s2Count as array of 26 element and fill with 0
    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);

    // run for loop from index 0 to length of s1
    for (let i = 0; i < s1.length; i++) {

        // count the frequency of character at index i in s1Count and s2count
        s1Count[s1.charCodeAt(i) - 97]++;
        s2Count[s2.charCodeAt(i) - 97]++;
    }

    // run for loop from index 0 to s2.length - s1.length
    for (let i = 0; i < s2.length - s1.length; i++) {

        // invoke the function matches() and if match found then return true
        if (matches(s1Count, s2Count)) return true;

        // slide the window over s2
        s2Count[s2.charCodeAt(i) - 97]--;
        s2Count[s2.charCodeAt(i + s1.length) - 97]++;
    }

    // check the last window and return value of the function matches()
    return matches(s1Count, s2Count);
};

// initialize function matches()
function matches(s1Count, s2Count) {

    // run for loop from index 0 to 26
    for (let i = 0; i < 26; i++) {

        // if s1Count[i] not equal to s2Count[i] then return false
        if (s1Count[i] !== s2Count[i]) return false;
    }

    // oherwise return true
    return true;
}


/*
Given two strings s1 and s2, return true if s2 contains a 
permutation
 of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/


/*
Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
*/


/*
Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.
*/