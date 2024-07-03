// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/description/

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {

    // initialize current to 97 which is equal to ASCII code value of "a" and result as 0
    let current = 97, result = 0;

    // run for of loop for string word
    for (let char of word) {

        // find ASCII code value of char
        let charCode = char.charCodeAt(0);

        // find absolute difference between current and charCode
        let diff = Math.abs(current - charCode);

        // if diff is less than 13 then add diff (move the character value in seconds) and 1 (type char value in seconds) and result and initialize back to result
        if (diff < 13) {
            result += diff + 1;
        } else {

            // else subtract 26 with diff and add 1 and result and initialize back to result
            result += 26 - diff + 1;
        }

        // assign charCode value to current
        current = charCode;
    }

    // return answer result
    return result;
};

/*
There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer. A character can only be typed if the pointer is pointing to that character. The pointer is initially pointing to the character 'a'.


Each second, you may perform one of the following operations:

Move the pointer one character counterclockwise or clockwise.
Type the character the pointer is currently on.
Given a string word, return the minimum number of seconds to type out the characters in word.
*/


/*
Example 1:

Input: word = "abc"
Output: 5
Explanation: 
The characters are printed as follows:
- Type the character 'a' in 1 second since the pointer is initially on 'a'.
- Move the pointer clockwise to 'b' in 1 second.
- Type the character 'b' in 1 second.
- Move the pointer clockwise to 'c' in 1 second.
- Type the character 'c' in 1 second.

Example 2:

Input: word = "bza"
Output: 7
Explanation:
The characters are printed as follows:
- Move the pointer clockwise to 'b' in 1 second.
- Type the character 'b' in 1 second.
- Move the pointer counterclockwise to 'z' in 2 seconds.
- Type the character 'z' in 1 second.
- Move the pointer clockwise to 'a' in 1 second.
- Type the character 'a' in 1 second.

Example 3:

Input: word = "zjpc"
Output: 34
Explanation:
The characters are printed as follows:
- Move the pointer counterclockwise to 'z' in 1 second.
- Type the character 'z' in 1 second.
- Move the pointer clockwise to 'j' in 10 seconds.
- Type the character 'j' in 1 second.
- Move the pointer clockwise to 'p' in 6 seconds.
- Type the character 'p' in 1 second.
- Move the pointer counterclockwise to 'c' in 13 seconds.
- Type the character 'c' in 1 second.
*/


/*
Constraints:

1 <= word.length <= 100
word consists of lowercase English letters.
*/