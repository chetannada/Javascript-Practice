// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let i = 0; i < words.length; i++) { // loop through the every element of an array
        const word = words[i]; // initialize the word to first word of an array
        let isPalindromic = true; // initialize isPalindromic true
        for (let j = 0; j < word.length/2; j++) { // loop through the word element
            if (word[j] !== word[word.length - j - 1]) { // if character of word is not equal to last character of word
                isPalindromic = false; // then isPalindromic to false
                break;
            }
        }
        if (isPalindromic) return word; // if isPalindromic true then return word
    }
    return ''; // else return empty string
};

/*
Example 1:
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

Example 2:
Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".

Example 3:
Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
*/