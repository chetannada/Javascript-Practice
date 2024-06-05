// https://leetcode.com/problems/find-common-characters/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {

    // initialize empty array result
    let result = [];

    // run for of loop for first string of array words
    for (let char of words[0]) {

        // if every words of word includes char then push char in result
        if (words.every(word => word.includes(char))) {
            result.push(char);

            // remove one char in every element of words 
            words = words.map(word => word.replace(char, ""));
        }
    }

    // return result
    return result;
};

/*
Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order.
*/


/*
Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
*/


/*
Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.
*/