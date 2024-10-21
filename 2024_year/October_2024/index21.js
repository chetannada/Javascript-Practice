// https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/description/

/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {

    // invoke the function getUniqueSubstring() and pass 0, s and new Set() as argument
    return getUniqueSubstring(0, s, new Set());
};

// initialize function getUniqueSubstring() which accept parameter start, s and set
function getUniqueSubstring(start, s, set) {

    // if start is equal to length of s
    if (start === s.length) {

        // return size of set
        return set.size;
    }

    // initialize maxCount as 0
    let maxCount = 0;

    // run for loop from start + 1 to s.length (inclusive)
    for (let i = start + 1; i <= s.length; i++) {

        // initialize substring as slice of s
        let subString = s.slice(start, i);

        // if set does not contains subString 
        if (!set.has(subString)) {

            // add subString in set
            set.add(subString);

            // update maxCount as maximum value between maxCount and invoke function getUniqueSubstring() and pass i, s and set as arguments
            maxCount = Math.max(maxCount, getUniqueSubstring(i, s, set));

            // delete subString from set
            set.delete(subString);
        }
    }

    // return answer maxCount
    return maxCount;
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