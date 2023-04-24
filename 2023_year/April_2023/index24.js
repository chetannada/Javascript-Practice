// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" "); // split string into array
    let rev = arr.map(item => [...item].reverse().join("")); // mapping through the every element of an array and reverse it
    return rev.join(" "); // convert back to string
};

/*
Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD"
*/