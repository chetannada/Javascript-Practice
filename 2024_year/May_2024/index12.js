// https://leetcode.com/problems/counting-words-with-a-given-prefix/description/

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {

    // initialize count to 0
    let count = 0;

    // run for of loop of words
    for (let word of words) {

        // if index of pref in word is equal to 0 then increment count
        if (word.indexOf(pref) === 0) {
            count++;
        }
    }

    // return count
    return count;
};

/*
You are given an array of strings words and a string pref.

Return the number of strings in words that contain pref as a prefix.

A prefix of a string s is any leading contiguous substring of s.
*/


/*
Example 1:

Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

Example 2:

Input: words = ["leetcode","win","loops","success"], pref = "code"
Output: 0
Explanation: There are no strings that contain "code" as a prefix.
*/


/*
Constraints:

1 <= words.length <= 100
1 <= words[i].length, pref.length <= 100
words[i] and pref consist of lowercase English letters.
*/