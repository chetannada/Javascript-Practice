// https://leetcode.com/problems/number-of-lines-to-write-string/description/

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {

    // initialize empty object obj
    let obj = {};

    // loop through every element of array widths
    for (let i = 0; i < widths.length; i++) {

        // find alphabetic character from character code using String.fromCharCode() and make this character as key of object obj and assign value of width[i] to this
        obj[String.fromCharCode(i + 97)] = widths[i];
    }

    // initialize lines to 1 and count to 0
    let lines = 1, count = 0;

    // loop through every character of string s
    for (let i = 0; i < s.length; i++) {

        // add count and obj[s[i]] into count
        count += obj[s[i]];

        // if count is equal to 100 and i is not equal to s.length - 1 than make count to be zero and increment lines
        if (count === 100 && i !== s.length - 1) {
            count = 0;
            lines++;
        }
        // else if count is greater than 100 then assign obj[s[i]] to count and increment lines
        else if (count > 100) {
            count = obj[s[i]];
            lines++;
        }
    }

    // return array which contain first value as lines and second value as count
    return [lines, count];
};

/*
You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.

You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s.

Return an array result of length 2 where:

result[0] is the total number of lines.
result[1] is the width of the last line in pixels.
*/


/*
Example 1:

Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "abcdefghijklmnopqrstuvwxyz"
Output: [3,60]
Explanation: You can write s as follows:
abcdefghij  // 100 pixels wide
klmnopqrst  // 100 pixels wide
uvwxyz      // 60 pixels wide
There are a total of 3 lines, and the last line is 60 pixels wide.

Example 2:

Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = "bbbcccdddaaa"
Output: [2,4]
Explanation: You can write s as follows:
bbbcccdddaa  // 98 pixels wide
a            // 4 pixels wide
There are a total of 2 lines, and the last line is 4 pixels wide.
*/


/*
Constraints:

widths.length == 26
2 <= widths[i] <= 10
1 <= s.length <= 1000
s contains only lowercase English letters.
*/