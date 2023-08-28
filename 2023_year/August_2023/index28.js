// https://leetcode.com/problems/find-common-characters/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {

    // initialize empty array result
    let result = [];

    // loop through every character of first element of array words
    for (let char of words[0]) {

        // initialize j is equal to 1 and k is equal to 0
        let j = 1, k = 0;

        // continue the loop until j less than length of array words
        while (j < words.length) {

            // if char is not includes in words[j] then increment k and break the loop
            if (!words[j].includes(char)) {

                k++;
                break;
            } else {
                // else find index of char in words[j]
                let index = words[j].indexOf(char);

                // copy the words[j] and convert into array
                let word = [...words[j]]

                // remove indexed element from the word
                word.splice(index, 1).join('');

                // replace the words[j] with word
                words[j] = word;
            }

            // increment j
            j++;
        }

        // if k is equal to zero then push char in array result
        if (k == 0) {
            result.push(char);
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