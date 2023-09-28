// https://leetcode.com/problems/maximum-odd-binary-number/

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {

    // convert string s to array using split() and then sort the element of array in descending order using sort()
    let arr = s.split('').sort((a, b) => +b - +a);

    // remove the first element from the array arr using shift()
    let first = arr.shift();

    // push the first in array arr
    arr.push(first);

    // return the string value from array arr using join()
    return arr.join('');
};

/*
You are given a binary string s that contains at least one '1'.

You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number that can be created from this combination.

Return a string representing the maximum odd binary number that can be created from the given combination.

Note that the resulting string can have leading zeros.
*/


/*
Example 1:

Input: s = "010"
Output: "001"
Explanation: Because there is just one '1', it must be in the last position. So the answer is "001".

Example 2:

Input: s = "0101"
Output: "1001"
Explanation: One of the '1's must be in the last position. The maximum number that can be made with the remaining digits is "100". So the answer is "1001".
*/


/*
Constraints:

1 <= s.length <= 100
s consists only of '0' and '1'.
s contains at least one '1'.
*/