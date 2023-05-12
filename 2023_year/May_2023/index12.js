// https://leetcode.com/problems/remove-palindromic-subsequences/

/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    for(let i=0, j=s.length -1; i<j; i++, j--){ // loop through the zero to lenght of string
        if(s[i] !== s[j]) return 2; // if character of string is not equal to last character of string then return 2
    }
    return 1; // otherwise return 1
};

/*
Example 1:
Input: s = "ababa"
Output: 1
Explanation: s is already a palindrome, so its entirety can be removed in a single step.

Example 2:
Input: s = "abb"
Output: 2
Explanation: "abb" -> "bb" -> "". 
Remove palindromic subsequence "a" then "bb".

Example 3:
Input: s = "baabb"
Output: 2
Explanation: "baabb" -> "b" -> "". 
Remove palindromic subsequence "baab" then "b".
*/