// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {

    // initialize minTime to zero
    let minTime = 0;

    // since the pointer is initialy at "a". So we move the pointer to the first char of the word and make diff positive using Math.abs()
    let diff = Math.abs("a".charCodeAt(0) - word.charCodeAt(0));

    // if diff is less than or equal to 13 then add 1 to diff otherwise subtract diff from 27 (26 + 1)
    minTime = diff <= 13 ? diff + 1 : 26 - diff + 1; //+1 is the time taken to click the button

    // loop through every character of word
    for (let i = 0; i < word.length - 1; i++) {

        // calculate difference of every character of word to next character of word and make diff positive using Math.abs()
        diff = Math.abs(word.charCodeAt(i) - word.charCodeAt(i + 1));

        // if diff is less than or equal to 13 then add 1 and minTime to diff otherwise subtract diff from 27 (26 + 1) and add minTime
        minTime += diff <= 13 ? diff + 1 : 26 - diff + 1;
    }

    // return minTime
    return minTime;
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
 
Constraints:
1 <= word.length <= 100
word consists of lowercase English letters.
*/