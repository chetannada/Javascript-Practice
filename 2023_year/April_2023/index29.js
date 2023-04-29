// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

/**
 * @param {string} s
 * @return {string}
 */

var decrypt = (str) => String.fromCharCode(parseInt(str) + 96);

var freqAlphabets = function (s) {
    let decrypted = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i + 2] === '#') {
            decrypted += decrypt(s[i++] + s[i++]);
        } else {
            decrypted += decrypt(s[i]);
        }
    }
    return decrypted;
};


/*
Example 1:
Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

Example 2:
Input: s = "1326#"
Output: "acz"
*/