// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let map = {}; // initialize an empty object map
    for(let i=0; i<s.length; i++){ // loop through every character s
        const count = map[s[i]] ?? 0; // if map conatain character of s then count be it's value or zero
        map[s[i]] = count + 1; // add count to map of s[i]
    }
    if(Object.values(map).every((val, index, arr) => val == arr[0])) return true; // if all keys are same then return true
    else return false; // else return false
};

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