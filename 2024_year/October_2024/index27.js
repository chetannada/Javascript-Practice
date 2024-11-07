// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    // if length of digits is 0 then return empty array
    if (digits.length === 0) return [];

    // initialize map object for every digits from 2 to 9 and assign telephone number letters as value in the form of an array
    const map = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z']
    }

    // initialize iterate function which has nums as parameter
    const iterate = (nums) => {

        // initialize an arr as empty array
        let arr = [];

        // if length of digits is 1 then return value of map as per key nums
        if (nums.length == 1) return map[nums];

        // take first digit from nums using slice
        let first = nums.slice(0, 1);

        // take others digits from nums using slice and add as argument in iterate function
        let others = iterate(nums.slice(1));

        // run for of loop for map[first]
        for (let digit of map[first]) {

            // run for of loop for others
            for (let pairDigit of others) {

                // add digit and pairDigit and push in array arr
                arr.push(digit + pairDigit);
            }
        }

        // return final result arr
        return arr;
    }

    // return the iterate function value and pass digits as argument
    return iterate(digits)
};


/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


*/


/*
Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:

Input: digits = ""
Output: []

Example 3:

Input: digits = "2"
Output: ["a","b","c"]
*/


/*
Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/