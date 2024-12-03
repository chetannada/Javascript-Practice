// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    let len = needle.length;

    for (let i = 0; i < haystack.length; i++) {

        // copy the string from haystack of index i to i+len (not inclusive)
        let str = haystack.slice(i, i + len);

        // if str is equal to needle then return index i
        if (str === needle) {
            return i;
        }
    }

    // otherwise return -1
    return -1;
};



/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/


/*
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.

*/


/*
Constraints:

    1 <= haystack.length, needle.length <= 104
    haystack and needle consist of only lowercase English characters.

*/