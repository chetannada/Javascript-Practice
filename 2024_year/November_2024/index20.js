// https://leetcode.com/problems/fraction-to-recurring-decimal/description/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {

    // if numerator is equal to 0 then return 0
    if (numerator === 0) return "0";

    // initialize map to track of remainder and result length
    let map = new Map();

    // initialize result as empty string
    let result = "";

    // if numerator or denominator has different sign then add "-" in result
    if (Math.sign(numerator) !== Math.sign(denominator)) {
        result += "-";
    }

    // initialize posNumr as positive number of numerator
    const posNumr = Math.abs(numerator);

    // initialize posDenom as positive number of denominator
    const posDenom = Math.abs(denominator);

    // initialize remainder to find remainder of posNumr and posDenom
    let remainder = posNumr % posDenom;

    // divide posNumr and posDenom and add in result
    result += Math.floor(posNumr / posDenom)

    // if remainder is equal to 0 then return result
    if (remainder === 0) {
        return result;
    }

    // add "." in result
    result += ".";

    // run while loop until remainder is not equal to 0
    while (remainder !== 0) {

        // if map has remainder means repeating patten detected
        if (map.has(remainder)) {


            // find index from map
            const index = map.get(remainder);

            // add "(" and ")" between index of result and update the result and then break the loop
            result = result.slice(0, index) + "(" + result.slice(index) + ")";
            break;
        }

        // set remainder key in map and value as result.length
        map.set(remainder, result.length);

        // multiply remainder with 10
        remainder *= 10;

        // divide remainder by posDenom and add in result
        result += Math.floor(remainder / posDenom);

        // do modulo and update the remainder
        remainder %= posDenom;
    }

    // return final answer result
    return result;
};


/*
Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

If multiple answers are possible, return any of them.

It is guaranteed that the length of the answer string is less than 104 for all the given inputs.
*/


/*
Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"

Example 2:

Input: numerator = 2, denominator = 1
Output: "2"

Example 3:

Input: numerator = 4, denominator = 333
Output: "0.(012)"
*/


/*
Constraints:

-231 <= numerator, denominator <= 231 - 1
denominator != 0
*/