// https://leetcode.com/problems/longest-happy-string/description/

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {

    // initialize result as empty string
    let result = '';

    // initialize prev to keep track of last two character result that we added
    let prev = [null, null];

    // initialize len as 0, If after iteration both string.length === len then we break loop.
    let len = 0;

    // run while loop until a > 0 or b > 0 or c > 0
    while (a > 0 || b > 0 || c > 0) {

        // if a is not 0 and a is greater than or equal to b and a is greater than or equal to c
        if (a && a >= b && a >= c) {

            // if first element of prev is not equal to "a" or second element of prev is not equal to "a"
            if (prev[0] !== 'a' || prev[1] !== 'a') {

                // add "a" in result
                result += 'a';

                // decrement a
                a--;
            } else {

                // else if b is greater than or equal to c
                if (b >= c) {

                    // if b is not equal to 0
                    if (b) {

                        // add b in result
                        result += 'b';

                        // decrement b
                        b--;
                    }
                } else {

                    // else if c is not equal to 0
                    if (c) {

                        // add c in result
                        result += 'c';

                        // decrement c
                        c--;

                    }
                }
            }
        }


        // do the same as above for above if-else condition 
        if (b && b >= a && b >= c) {
            if (prev[0] !== 'b' || prev[1] !== 'b') {
                result += 'b';
                b--;
            } else {
                if (a >= c) {
                    if (a) {
                        result += 'a';
                        a--;
                    }
                } else {
                    if (c) {
                        result += 'c';
                        c--;
                    }
                }
            }
        }

        // do the same as above for above if-else condition 
        if (c && c >= a && c >= b) {
            if (prev[0] !== 'c' || prev[1] !== 'c') {
                result += 'c';
                c--;
            } else {
                if (a >= b) {
                    if (a) {
                        result += 'a';
                        a--;
                    }
                } else {
                    if (b) {
                        result += 'b';
                        b--;
                    }
                }
            }
        }

        // update prev[0] as prev[1]
        prev[0] = prev[1];

        // update prev[1] as last element of result
        prev[1] = result.at(-1);

        // if length of result is equal to len then break the loop
        if (result.length === len) {
            break;
        }

        // update len as length of result
        len = result.length;
    }

    // return final answer result
    return result;
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