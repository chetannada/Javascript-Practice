// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0; i<alpha.length; i++){
        if(sentence.indexOf(alpha[i]) === -1){
            return false;
        }
    }
    return true;
};

/*
Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:
Input: sentence = "leetcode"
Output: false
*/