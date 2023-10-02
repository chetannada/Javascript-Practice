// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/description/

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let result = 0;
    const charsMap = new Map();
    for (const char of chars) {
        charsMap.has(char) ? charsMap.set(char, charsMap.get(char) + 1) : charsMap.set(char, 1);
    }
    for (const word of words) {
        const wordMap = new Map();
        for (const char of word) {
            wordMap.has(char) ? wordMap.set(char, wordMap.get(char) + 1) : wordMap.set(char, 1);
        }
        for (let i = 0; i < word.length; i++) {
            if (charsMap.has(word[i])) {
                if (wordMap.get(word[i]) > charsMap.get(word[i])) {
                    break;
                }
            } else {
                break;
            }
            if (i === word.length - 1) result += word.length;
        }
    }
    return result;
};

/*
You are given an array of strings words and a string chars.

A string is good if it can be formed by characters from chars (each character can only be used once).

Return the sum of lengths of all good strings in words.
*/


/*
Example 1:

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Example 2:

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
*/


/*
Constraints:

1 <= words.length <= 1000
1 <= words[i].length, chars.length <= 100
words[i] and chars consist of lowercase English letters.
*/