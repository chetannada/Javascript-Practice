// https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/description/

/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
    return getMaxUniqueSplit(0, s, new Set());
};

function getMaxUniqueSplit(start, s, set) {

    if (start === s.length) {
        return set.size;
    }

    let count = 0;
    
    for (let i = start + 1; i <= s.length; i++) {
        let substring = s.substring(start, i)

        if (!set.has(substring)) {
            set.add(substring)
            count = Math.max(count, getMaxUniqueSplit(i, s, set))
            set.delete(substring)
        }
    }

    return count
}

/*
Given a string s, return the maximum number of unique substrings that the given string can be split into.

You can split string s into any list of non-empty substrings, where the concatenation of the substrings forms the original string. However, you must split the substrings such that all of them are unique.

A substring is a contiguous sequence of characters within a string.
*/


/*
Example 1:

Input: s = "ababccc"
Output: 5
Explanation: One way to split maximally is ['a', 'b', 'ab', 'c', 'cc']. Splitting like ['a', 'b', 'a', 'b', 'c', 'cc'] is not valid as you have 'a' and 'b' multiple times.

Example 2:

Input: s = "aba"
Output: 2
Explanation: One way to split maximally is ['a', 'ba'].

Example 3:

Input: s = "aa"
Output: 1
Explanation: It is impossible to split the string any further.
*/


/*
Constraints:

1 <= s.length <= 16

s contains only lower case English letters.
*/