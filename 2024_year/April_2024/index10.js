// https://leetcode.com/problems/reverse-only-letters/

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {

    // initialize string for the answer
    // and two pointer i and j
    let str = "", i = 0, j = s.length - 1;

    // run for loop till length of s
    for (; i < s.length; i++) {

        // if ith character of s is English letter
        if (Boolean(s[i].match(/[a-zA-Z]/))) {

            // run while until the jth character of s is not English letter
            while (!Boolean(s[j].match(/[a-zA-Z]/))) {

                // move j towords left
                j--;
            }

            // add jth character to str
            str += s[j];

            // move j towords left
            j--;
        } else {

            // else add ith character of s to str
            str += s[i];
        }
    }

    // return string str
    return str;
};

/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.
*/


/*
Example 1:

Input: s = "ab-cd"
Output: "dc-ba"

Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/


/*
Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.
*/