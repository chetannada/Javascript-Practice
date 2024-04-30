// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    // convert string to array
    let arr = s.split(" ");

    // run for loop from index 0 to length of arr
    for (let i = 0; i < arr.length; i++) {

        // convert arr[i] to array and then reverse the digits and then convert back to string
        arr[i] = arr[i].split('').reverse().join('');
    }

    // convert arr to string and return it
    return arr.join(' ');
};

/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/


/*
Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"
*/


/*
Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/