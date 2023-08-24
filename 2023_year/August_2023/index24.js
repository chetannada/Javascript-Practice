// https://leetcode.com/problems/maximum-number-of-words-you-can-type/

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {

    // convert string text into array using split()
    let textArr = text.split(' ');

    // initialize count to zero
    let count = 0;

    // loop through every element of array text
    for (let i = 0; i < textArr.length; i++) {

        // initialize j and k to zero
        let j = 0, k = 0;

        // continue the loop up to j less than length of brokenLetters
        while (j < brokenLetters.length) {

            // if every element of textArr includes every character of brokenLetters then increment k and break the while loop
            if (textArr[i].includes(brokenLetters[j])) {

                k++;
                break;
            }

            // increment j
            j++;
        }

        // if k is equal to zero then increment count
        if (k == 0) {
            count++;
        }
    }

    // return count
    return count;
};

/*
There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.
*/

/*
Example 1:

Input: text = "hello world", brokenLetters = "ad"
Output: 1
Explanation: We cannot type "world" because the 'd' key is broken.

Example 2:

Input: text = "leet code", brokenLetters = "lt"
Output: 1
Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.

Example 3:

Input: text = "leet code", brokenLetters = "e"
Output: 0
Explanation: We cannot type either word because the 'e' key is broken.
*/


/*
Constraints:

1 <= text.length <= 104
0 <= brokenLetters.length <= 26
text consists of words separated by a single space without any leading or trailing spaces.
Each word only consists of lowercase English letters.
brokenLetters consists of distinct lowercase English letters.
*/