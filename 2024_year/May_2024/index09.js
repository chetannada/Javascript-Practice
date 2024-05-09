// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/description/

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {

    // initialize new map and result as empty string
    let map = new Map(), result = "";

    // run for loop from index 1 to 9 and store a to i character in map from number 1 to 9
    for (let i = 1; i <= 9; i++) {
        map.set(`${i}`, String.fromCharCode(i + 96));
    }

    // run for loop from index 10 to 26 and store j to z character in map from number 10# to 26#
    for (let i = 10; i <= 26; i++) {
        map.set(`${i}#`, String.fromCharCode(i + 96));
    }

    // run for loop from index 0 to length of s
    for (let j = 0; j < s.length; j++) {

        // if third character is #
        if (s[j + 2] === "#") {

            // then copy 3 character from s and get the value from map and add it in result and increment j by 2
            let num = s.slice(j, j + 3);
            result += map.get(num);
            j += 2;
        } else {

            // else get the value from map and add it in result
            result += map.get(s[j]);
        }
    }

    // return answer result
    return result;
};

/*
You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.
*/

/*
Example 1:

Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

Example 2:

Input: s = "1326#"
Output: "acz"
*/

/*
Constraints:

1 <= s.length <= 1000
s consists of digits and the '#' letter.
s will be a valid string such that mapping is always possible.
*/