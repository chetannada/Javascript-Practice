// https://leetcode.com/problems/capitalize-the-title/description/

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {

    // convert string to array separated by " " space
    let arr = title.split(" ");

    let result = "";

    for (let word of arr) {

        // if length of word is less than or equal to 2 then convert word to lowecase
        if (word.length <= 2) {
            result += word.toLowerCase();
        } else {

            // else convert first letter to uppercase and remaining letters to lowercase
            result += word.at(0).toUpperCase() + word.slice(1).toLowerCase();
        }

        result += " ";
    }

    return result.trim();
};


/*
You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

If the length of the word is 1 or 2 letters, change all letters to lowercase.
Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
Return the capitalized title.
*/


/*
Example 1:

Input: title = "capiTalIze tHe titLe"
Output: "Capitalize The Title"
Explanation:
Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.
Example 2:

Input: title = "First leTTeR of EACH Word"
Output: "First Letter of Each Word"
Explanation:
The word "of" has length 2, so it is all lowercase.
The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
Example 3:

Input: title = "i lOve leetcode"
Output: "i Love Leetcode"
Explanation:
The word "i" has length 1, so it is lowercase.
The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
*/


/*
Constraints:

1 <= title.length <= 100
title consists of words separated by a single space without any leading or trailing spaces.
Each word consists of uppercase and lowercase English letters and is non-empty.
*/