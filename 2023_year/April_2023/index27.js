// https://leetcode.com/problems/replace-all-digits-with-characters/

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let d = "";
    for (let i of s) {
  if (!isNaN(i)) {
    let z = d.charCodeAt(d.length - 1) + parseInt(i);
    d += String.fromCharCode(z);
  } else {
    d += i;
  }
    }
      return d;
};

/*
Example 1:
Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f'

Example 2:
Input: s = "a1b2c3d4e"
Output: "abbdcfdhe"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('b',2) = 'd'
- s[5] -> shift('c',3) = 'f'
- s[7] -> shift('d',4) = 'h'
*/