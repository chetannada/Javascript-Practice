// https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {

    // initialize alphabets array with contain all 26 alphabet letters
    let alphabets = new Array(26).fill(0).map((_, i) => String.fromCharCode(i + 97));

    // initialize map for storing every alphabetic character
    let map = new Map()

    // set every alphabetic character as key and value as 0 in map
    alphabets.forEach(char => {
        map.set(char, 0);
    })

    // run for of loop for sentence 
    for (let char of sentence) {

        // set every char in map and increment the value
        map.set(char, map.get(char) + 1)
    }

    // check every value from map and if not contain 0 then return true otherwise false
    return [...map.values()].every(item => item !== 0);

};

/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/


/*
Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:

Input: sentence = "leetcode"
Output: false
*/


/*
Constraints:

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.
*/