// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {

    // initialize empty array result
    let result = [];

    // loop through every character of string s 
    for (let i = 0; i < s.length; i++) {

        // find charCode of every character of string s using charCodeAt()
        let charCode = s[i].charCodeAt(0);

        // if charCode is less than or equal to 90
        if (charCode <= 90) {

            // find sameChar using slice(), includes() and converting charCode to String using String.fromCharCode()
            let sameChar = s.slice(i).includes(String.fromCharCode(charCode + 32));

            // if sameChar is true then push that character in result
            if (sameChar) {
                result.push(s[i]);
            }
        } else { // else

            // find sameChar using slice(), includes() and converting charCode to String using String.fromCharCode()
            let sameChar = s.slice(i).includes(String.fromCharCode(charCode - 32));

            // if sameChar is true then push that Capital character using String.fromCharCode() in result
            if (sameChar) {
                result.push(String.fromCharCode(charCode - 32));
            }
        }
    }

    // if length of result is equal to zero then return empty string otherwise sort the result and remove last element from array result using pop()
    return result.length === 0 ? '' : result.sort().pop();
};

/*
Given a string of English letters s, return the greatest English letter which occurs as both a lowercase and uppercase letter in s. The returned letter should be in uppercase. If no such letter exists, return an empty string.

An English letter b is greater than another letter a if b appears after a in the English alphabet.
*/

/*
Example 1:

Input: s = "lEeTcOdE"
Output: "E"
Explanation:
The letter 'E' is the only letter to appear in both lower and upper case.

Example 2:

Input: s = "arRAzFif"
Output: "R"
Explanation:
The letter 'R' is the greatest letter to appear in both lower and upper case.
Note that 'A' and 'F' also appear in both lower and upper case, but 'R' is greater than 'F' or 'A'.

Example 3:

Input: s = "AbCdEfGhIjK"
Output: ""
Explanation:
There is no letter that appears in both lower and upper case.
*/


/*
Constraints:

1 <= s.length <= 1000
s consists of lowercase and uppercase English letters.
*/