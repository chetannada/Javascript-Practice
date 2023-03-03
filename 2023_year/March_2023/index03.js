// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = needle.length, diffLen = haystack.length - n + 1, i = 0;
    while(i < diffLen){
        if(haystack.slice(i, n+i) === needle) return i;
        i++;
    }
    return -1;
};

console.log(strStr("sadbutsad", "sad")); // 0

/*
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
*/