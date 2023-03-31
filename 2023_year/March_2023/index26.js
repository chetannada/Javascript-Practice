// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    // let str1 = word1.join(""); // convert word1 array to string
    // let str2 = word2.join(""); // convert word2 array to string
    // if(str1 === str2) return true; // return true if both the string are equal
    // else return false; // else return false


    // solved using different method
    // first converted into string and replace all comma (,) check strict equality operator
    return String(word1).replaceAll(",", "") === String(word2).replaceAll(",", "");
};

/*
Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true
*/