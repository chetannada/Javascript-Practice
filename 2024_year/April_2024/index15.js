// https://leetcode.com/problems/merge-strings-alternately/description/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {

    // initialize empty array arr and len is equal to 0
    let arr = [], len = 0;

    // if word1 length is greater than word2 then make length of word1 to len else length of word2 to len
    word1.length > word2.length ? len = word1.length : len = word2.length;

    // run for loop from index 0 to len
    for (i = 0, j = 0; i < len; i++, j++) {

        // initialize word1[i] to arr[j]
        arr[j] = word1[i];

        // increase j
        j++;

        // initialize word2[i] to arr[j]
        arr[j] = word2[i];
    }

    // convert arr to string and return it
    return arr.join('');
};

/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/


/*
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d

*/


/*
Constraints:

    1 <= word1.length, word2.length <= 100
    word1 and word2 consist of lowercase English letters.

*/