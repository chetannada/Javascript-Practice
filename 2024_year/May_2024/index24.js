// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {

    // initialize hashmap for store the frequency of character of s and set for storing unique value
    let map = new Map(), set = new Set();

    // run for of loop for s
    for (let char of s) {

        // count the frequency of every character of s
        map.set(char, (map.get(char) || 0) + 1);
    }

    // run for of loop for map values
    for (let value of map.values()) {

        // add value in set
        set.add(value);
    }

    // if size of set is equal to 1 then return true otherwise false
    return set.size === 1;
};

/*
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).
*/


/*
Example 1:

Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

Example 2:

Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.
*/


/*
Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
*/