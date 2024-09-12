// https://leetcode.com/problems/count-the-number-of-consistent-strings/description/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {

    // initialize count to count the number of consistent strings
    let count = 0;

    // initialize map to set value for every character in string
    let map = new Map();

    // run for of loop for allowed
    for (let char of allowed) {

        // set value 1 for every character in string allowed
        map.set(char, 1);
    }

    // run for of loop for words
    for (let word of words) {

        // initialize temp as 1 to count if string is consistent
        let temp = 1;

        // run for of loop for word
        for (let char of word) {

            // if char is not present in map then update temp as 0
            if (!map.has(char)) {
                temp = 0;
            }
        }

        // add temp in count
        count += temp;
    }

    // return final answer count 
    return count;
};


/*
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.
*/


/*
Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.

Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
*/


/*
Constraints:

1 <= words.length <= 104
1 <= allowed.length <= 26
1 <= words[i].length <= 10
The characters in allowed are distinct.
words[i] and allowed contain only lowercase English letters.
*/