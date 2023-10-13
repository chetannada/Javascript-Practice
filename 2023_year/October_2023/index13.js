// https://leetcode.com/problems/count-vowel-substrings-of-a-string/description/

/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {

    // initialize Set() which contain vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // initialize empty Set()
    const set = new Set();

    // initialize count to zero
    let count = 0;

    // loop thorough every character of string word
    for (let i = 0; i < word.length; i += 1) {

        // clear the set using clear()
        set.clear();

        // loop through length of word and vowels contain the character of word
        for (let j = 0; j + i < word.length && vowels.has(word[j + i]); j += 1) {
            // add character of word in set using add()
            set.add(word[i + j]);

            // if size of set is equal to size vowels then increment count
            if (set.size === vowels.size) {
                count += 1;
            }
        }
    }

    // return count
    return count;
};


/*
A substring is a contiguous (non-empty) sequence of characters within a string.

A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.

Given a string word, return the number of vowel substrings in word.
*/


/*
Example 1:

Input: word = "aeiouu"
Output: 2
Explanation: The vowel substrings of word are as follows (underlined):
- "aeiouu"
- "aeiouu"

Example 2:

Input: word = "unicornarihan"
Output: 0
Explanation: Not all 5 vowels are present, so there are no vowel substrings.
Example 3:

Input: word = "cuaieuouac"
Output: 7
Explanation: The vowel substrings of word are as follows (underlined):
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
*/


/*
Constraints:

1 <= word.length <= 100
word consists of lowercase English letters only.
*/