// https://leetcode.com/problems/decode-the-message/description/

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {

    // remove space from key
    let keyStr = key.replace(/\s+/g, "");

    // initialize map for assigning alphabetical letters a to z
    let map = new Map();

    // initialize i as 97 for ASCII code value for a
    let i = 97;

    // run for loop for char of keyStr
    for (let char of keyStr) {

        // if char is not present in map
        if (!map.has(char)) {

            // convert ASCII code value of i into alphabetical letter and set the as map value of char and increase i
            map.set(char, String.fromCharCode(i));
            i++;
        }
    }

    // initialize result as empty string
    let result = "";

    // run for of loop for char of message
    for (let char of message) {

        // if char is eqaul to space then add space in to result
        if (char === " ") {
            result += " ";
        } else {

            // else get char value from map and then add into result
            result += map.get(char);
        }

    }

    // return the final answer result
    return result;
};


/*
You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message.
*/


/*
Example 1:

Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
Output: "this is a secret"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".

Example 2:

Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
Output: "the five boxing wizards jump quickly"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".
*/


/*
Constraints:

26 <= key.length <= 2000
key consists of lowercase English letters and ' '.
key contains every letter in the English alphabet ('a' to 'z') at least once.
1 <= message.length <= 2000
message consists of lowercase English letters and ' '.
*/