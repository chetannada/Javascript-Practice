// https://leetcode.com/problems/palindromic-substrings/description/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let len = s.length;
    let count = len;

    // checkPalindrome function will check str is palindrome or not
    function checkPalindrome(str) {

        let left = 0;
        let right = str.length - 1;

        // run loop through if left is less than right
        while (left < right) {

            // if leftth element of str is not equal to rightth element of str then return false;
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }

        // else return true;
        return true;
    }

    // run for loop throug length of string s
    for (let i = 0; i < len; i++) {

        for (let j = i + 1; j < len; j++) {

            // pass every substring to checkPalindrome() function
            // and if it will return true then increment count
            if (checkPalindrome(s.slice(i, j + 1))) {
                count++;
            }
        }
    }

    // return answer count
    return count;
};

/*
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.
*/


/*
Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/


/*
Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
*/