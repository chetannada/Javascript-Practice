// https://leetcode.com/problems/count-symmetric-integers/

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {

    // initialize count to zero
    let count = 0;

    // loop through low to high
    for (let i = low; i <= high; i++) {
        // convert i to string using toString() and then convert into array using split()
        let arr = i.toString().split('');

        // if length of array is divisable by 2
        if (arr.length % 2 === 0) {

            // find middle index of array by dividing length of array by 2 and using Math.ceil()
            let middleIndex = Math.ceil(arr.length / 2);

            // find firstHalfSum using splice() and reduce()
            let firstHalfSum = arr.splice(0, middleIndex).reduce((a, b) => +a + +b, 0);
            // find secondHalfSum using splice() and reduce()
            let secondHalfSum = arr.splice(-middleIndex).reduce((a, b) => +a + +b, 0);

            // if firstHalfSum and secondHalfSum are equal then increment count
            if (firstHalfSum === secondHalfSum) {
                count++;
            }
        }
    }

    // reuturn count
    return count;
};


/*
You are given two positive integers low and high.

An integer x consisting of 2 * n digits is symmetric if the sum of the first n digits of x is equal to the sum of the last n digits of x. Numbers with an odd number of digits are never symmetric.

Return the number of symmetric integers in the range [low, high].
*/


/*
Example 1:

Input: low = 1, high = 100
Output: 9
Explanation: There are 9 symmetric integers between 1 and 100: 11, 22, 33, 44, 55, 66, 77, 88, and 99.

Example 2:

Input: low = 1200, high = 1230
Output: 4
Explanation: There are 4 symmetric integers between 1200 and 1230: 1203, 1212, 1221, and 1230.
*/


/*
Constraints:

1 <= low <= high <= 104
*/
