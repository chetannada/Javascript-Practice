// https://leetcode.com/problems/longest-happy-string/description/

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    let countA = 0;
    let countB = 0;
    let countC = 0;
    const result = [];

    while (a > 0 || b > 0 || c > 0) {

        if ((a >= b && a >= c && countA < 2) || (countB === 2 && a > 0) || (countC === 2 && a > 0)) {

            result.push('a');
            countA += 1;
            a -= 1;
            countB = 0;
            countC = 0;

        } else if ((b >= a && b >= c && countB < 2) || (countA === 2 && b > 0) || (countC === 2 && b > 0)) {

            result.push('b');
            countB += 1;
            b -= 1;
            countA = 0;
            countC = 0;

        } else if ((c >= a && c >= b && countC < 2) || (countB === 2 && c > 0) || (countA === 2 && c > 0)) {

            result.push('c');
            countC += 1;
            c -= 1;
            countA = 0;
            countB = 0;

        } else {

            break;
        }
    }

    return result.join('');
};

/*
A string s is called happy if it satisfies the following conditions:

s only contains the letters 'a', 'b', and 'c'.
s does not contain any of "aaa", "bbb", or "ccc" as a substring.
s contains at most a occurrences of the letter 'a'.
s contains at most b occurrences of the letter 'b'.
s contains at most c occurrences of the letter 'c'.
Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

A substring is a contiguous sequence of characters within a string.
*/


/*
Example 1:

Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.

Example 2:

Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It is the only correct answer in this case.
*/


/*
Constraints:

0 <= a, b, c <= 100
a + b + c > 0
*/