// https://leetcode.com/problems/find-and-replace-pattern/

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {

    // initialize function patternStr() with str as parameter
    const patternStr = (str) => {

        // initialize empty string result
        let result = '';

        // loop through every chracter of string str
        for (let i = 0; i < str.length; i++) {

            // add result and index of every character from string str and assign to result
            result += str.indexOf(str[i])
        }

        // return result
        return result

    }

    // invoke the function patternStr() with pattern as argument
    const patt = patternStr(pattern);

    // if value of function patternStr() and patt are equal then return that filtered value in array word.filter() and return that filtered array as answer
    return words.filter(ele => patternStr(ele) == patt);
};

/*
Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.
*/


/*
Example 1:

Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.

Example 2:

Input: words = ["a","b","c"], pattern = "a"
Output: ["a","b","c"]
*/


/*
Constraints:

1 <= pattern.length <= 20
1 <= words.length <= 50
words[i].length == pattern.length
pattern and words[i] are lowercase English letters.
*/