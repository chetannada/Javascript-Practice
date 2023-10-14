// https://leetcode.com/problems/uncommon-words-from-two-sentences/description/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {

    // initialize s1Map and s2Map using Map()
    let s1Map = new Map()
    let s2Map = new Map()

    // initialize empty array result
    let result = []

    // loop through the every element of array s1 using string.split()
    for (let word of s1.split(' ')) {

        // if s1Map does not contain word then set word and count 1 otherwise increment count
        !s1Map.has(word) ? s1Map.set(word, 1) : s1Map.set(word, s1Map.get(word) + 1)
    }

    // loop through the every element of array s2 using string.split()
    for (let word of s2.split(' ')) {

        // if s2Map does not contain word then set word and count 1 otherwise increment count
        !s2Map.has(word) ? s2Map.set(word, 1) : s2Map.set(word, s2Map.get(word) + 1)
    }

    // loop through every element of s1Map
    for (let [word, count] of s1Map) {

        // if count is equal to 1 and word is not conain in s2Map then push word in array result
        if (count === 1 && !s2Map.has(word)) result.push(word)
    }

    // loop through every element of s2Map
    for (let [word, count] of s2Map) {

        // if count is equal to 1 and word is not conain in s1Map then push word in array result
        if (count === 1 && !s1Map.has(word)) result.push(word)
    }

    // return the array result
    return result
};

/*
A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
*/


/*
Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]

Example 2:

Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]
*/


/*
Constraints:

1 <= s1.length, s2.length <= 200
s1 and s2 consist of lowercase English letters and spaces.
s1 and s2 do not have leading or trailing spaces.
All the words in s1 and s2 are separated by a single space.
*/