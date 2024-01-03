// https://leetcode.com/problems/special-binary-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function (s) {

    if (s.length < 2) {
        return s;
    }

    let start = 0;
    let count = 0;
    let result = [];

    for (let i = 0; i < s.length; i++) {
        count += s[i] === '1' ? 1 : -1;


        if (!count) {
            const special = makeLargestSpecial(s.substring(start + 1, i));
            result.push('1' + special + '0');
            start = i + 1;
        }
    }


    result.sort((a, b) => {
        if (a === b) {
            return 0;
        }


        let i = 0;

        while (a[i] && b[i] && a[i] === b[i]) {
            i++;
        }

        if (a[i + 1] && !b[i + 1]) {
            return -1;
        }
        if (!a[i + 1] && b[i + 1]) {
            return 1;
        }

        return b[i] - a[i];
    })

    return result.join('');
};

/*
Special binary strings are binary strings with the following two properties:

The number of 0's is equal to the number of 1's.
Every prefix of the binary string has at least as many 1's as 0's.
You are given a special binary string s.

A move consists of choosing two consecutive, non-empty, special substrings of s, and swapping them. Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.

Return the lexicographically largest resulting string possible after applying the mentioned operations on the string.
*/


/*
Example 1:

Input: s = "11011000"
Output: "11100100"
Explanation: The strings "10" [occuring at s[1]] and "1100" [at s[3]] are swapped.
This is the lexicographically largest string possible after some number of swaps.

Example 2:

Input: s = "10"
Output: "10"
*/


/*
Constraints:

1 <= s.length <= 50
s[i] is either '0' or '1'.
s is a special binary string.
*/