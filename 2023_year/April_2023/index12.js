// https://leetcode.com/problems/decode-the-message/

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    // find array of all alphabatic characters from a to z
    const letters = new Array(26).fill("").map((item, index) => item = String.fromCharCode(index+97));
    // remove space from key using replaceAll()
    let removeSpace = key.replaceAll(" ", "");
    // convert string to array using split() and remove same character from key using Set() and make string using join()
    let removeSameChar = [...new Set(removeSpace.split(""))].join("");
    // initialize empty string
    let str = "";
    // loop through the every character of message
    for(let i = 0; i<message.length; i++){
        if(message[i] === " "){ // every character of message is space " " then add space " " in str
            str += " ";
        }else{ // else find alphabatic characters using indexOf 
            str += letters[removeSameChar.indexOf(message[i])];
        }
    }
    return str; // return str
};

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