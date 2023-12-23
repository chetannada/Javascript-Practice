// https://leetcode.com/problems/vowels-of-all-substrings/description/

/**
 * @param {string} word
 * @return {number}
 */
var countVowels = function (word) {
    let lastVowels = 0;
    let result = 0;

    for (let i = 0; i < word.length; i++) {
        let newVowels = 0;
        if (isVowel(word[i])) {
            newVowels = i + 1;
        }
        result += lastVowels + newVowels;
        lastVowels += newVowels;
    }
    return result;
};

let isVowel = char => 'aeiou'.indexOf(char) !== -1 ? true : false;


/*
Given a string word, return the sum of the number of vowels ('a', 'e', 'i', 'o', and 'u') in every substring of word.

A substring is a contiguous (non-empty) sequence of characters within a string.

Note: Due to the large constraints, the answer may not fit in a signed 32-bit integer. Please be careful during the calculations.
*/


/*
Example 1:

Input: word = "aba"
Output: 6
Explanation: 
All possible substrings are: "a", "ab", "aba", "b", "ba", and "a".
- "b" has 0 vowels in it
- "a", "ab", "ba", and "a" have 1 vowel each
- "aba" has 2 vowels in it
Hence, the total sum of vowels = 0 + 1 + 1 + 1 + 1 + 2 = 6. 

Example 2:

Input: word = "abc"
Output: 3
Explanation: 
All possible substrings are: "a", "ab", "abc", "b", "bc", and "c".
- "a", "ab", and "abc" have 1 vowel each
- "b", "bc", and "c" have 0 vowels each
Hence, the total sum of vowels = 1 + 1 + 1 + 0 + 0 + 0 = 3.

Example 3:

Input: word = "ltcd"
Output: 0
Explanation: There are no vowels in any substring of "ltcd".
*/


/*
Constraints:

1 <= word.length <= 105
word consists of lowercase English letters.
*/