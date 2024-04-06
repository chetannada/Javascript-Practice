// https://leetcode.com/problems/removing-stars-from-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {

    // initialize result for adding characters and count for tracking "*"
    let result = "", count = 0;

    // run for loop from length - 1 to 0th index
    for (let i = s.length - 1; i >= 0; i--) {

        // if ith character is "*" then increment count to track for Remove the closest non-star character to its left
        if (s[i] === "*") {
            count++;
        } else {

            // if count is greater than 0 then decrement count 
            // because we will not add character to result
            if (count > 0) {
                count--;
            } else {

                // if count is less than 0 means we can add character to result
                result = s[i] + result;
            }
        }
    }

    // return string result
    return result;
};

/*
You are given a string s, which contains stars *.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.
*/


/*
Example 1:

Input: s = "leet**cod*e"
Output: "lecoe"
Explanation: Performing the removals from left to right:
- The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
- The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
- The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
There are no more stars, so we return "lecoe".

Example 2:

Input: s = "erase*****"
Output: ""
Explanation: The entire string is removed, so we return an empty string.
*/


/*
Constraints:

1 <= s.length <= 105
s consists of lowercase English letters and stars *.
The operation above can be performed on s.
*/