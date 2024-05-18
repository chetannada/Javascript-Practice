// https://leetcode.com/problems/unique-morse-code-words/description/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {

    // initialize set for storing unique morse code and map for storing morse code value for every alphabetic letters
    let set = new Set(), map = new Map();

    // constant value of morse code from description of question
    const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    // run for loop from 0 index to length of morse code
    for (let i = 0; i < morseCode.length; i++) {

        // set value of every alphabetic character from a to z with morse code in map
        map.set(String.fromCharCode(i + 97), morseCode[i]);
    }

    // run for of loop for words
    for (let word of words) {

        // initialize str for stroing morse code value of word
        let str = "";

        // run for of loop for word
        for (let char of word) {

            // get the value of char from map and add in str
            str += map.get(char);
        }

        // add str in set
        set.add(str);
    }

    // return length of set
    return set.size;
};

/*
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.
*/


/*
Example 1:

Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".

Example 2:

Input: words = ["a"]
Output: 1
*/


/*
Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 12
words[i] consists of lowercase English letters.
*/