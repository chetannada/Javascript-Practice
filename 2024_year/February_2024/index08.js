// https://leetcode.com/problems/sort-characters-by-frequency/description/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let obj = {};

    // loop through the every character of s
    for (let char of s) {

        // add key in obj and increment the value
        obj[char] = (obj[char] || 0) + 1;
    }

    // make array from obj using Object.entries and sort it using sort()
    let sortedArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);


    // use reduce to do the sum of character of first index in every element of sorted array 
    // and use string.repeat for maximum frequency and return it
    return sortedArr.reduce((acc, current) => acc + (current[0].repeat(current[1])), '');
};


/*
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.
*/


/*
Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
*/


/*
Constraints:

1 <= s.length <= 5 * 105
s consists of uppercase and lowercase English letters and digits.
*/