// https://leetcode.com/problems/sequential-digits/description/

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {

    // initialize string str with value '123456789'
    let str = '123456789';
    let output = [];

    // take two nested loops iterate over all possible substrings of str
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {

            // copy str using slice and convert back to number using '+'
            let current = +(str.slice(i, j));

            // if current is greater then or equal to low and less than or equal to high then push current in to array output
            if (current >= low && current <= high) {
                output.push(current);
            }
        }
    }

    // return sort value of array output
    return output.sort((a, b) => a - b);
};

/*
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.
*/


/*
Example 1:

Input: low = 100, high = 300
Output: [123,234]

Example 2:

Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
*/


/*
Constraints:

10 <= low <= high <= 10^9
*/