// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {

    // find the index of 'b' in string s
    let index = s.indexOf('b');

    // if index is not equal to -1
    if (index !== -1) {

        // copy the string from index using slice() then check 'a' is present using includes()
        let checkA = s.slice(index).includes('a');

        // if checkA is there then return false
        if (checkA) return false;
    }

    // otherwise return true;
    return true;

};

/*
Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.
*/


/*
Example 1:

Input: s = "aaabbb"
Output: true
Explanation:
The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
Hence, every 'a' appears before every 'b' and we return true.

Example 2:

Input: s = "abab"
Output: false
Explanation:
There is an 'a' at index 2 and a 'b' at index 1.
Hence, not every 'a' appears before every 'b' and we return false.

Example 3:

Input: s = "bbb"
Output: true
Explanation:
There are no 'a's, hence, every 'a' appears before every 'b' and we return true.
*/


/*
Constraints:

1 <= s.length <= 100
s[i] is either 'a' or 'b'.
*/