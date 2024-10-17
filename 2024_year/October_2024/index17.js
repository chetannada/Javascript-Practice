// https://leetcode.com/problems/maximum-swap/description/

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {

    // convert num to array
    let digits = num.toString().split('');

    // initialize maxIndex, maxDigit, leftIndex and rightIndex as - 1 to keep track of maximum digit and index
    let maxIndex = -1;
    let maxDigit = -1;
    let leftIndex = -1;
    let rightIndex = -1;

    // run for loop from last index to 0
    for (let i = digits.length - 1; i >= 0; i--) {

        // if ith digits is greater than maxDigit
        if (digits[i] > maxDigit) {

            // update maxDigit as digits[i]
            maxDigit = digits[i];

            // update maxIndex as i
            maxIndex = i;
        } else if (digits[i] < maxDigit) {

            // else if digits[i] is less than maxDigit

            // update leftIndex as i
            leftIndex = i;

            // update rightIndex as maxIndex
            rightIndex = maxIndex;
        }
    }

    // if leftIndex is equal to -1 then return num
    if (leftIndex === -1) {
        return num;
    }

    // swap the leftIndex and rightIndex elements of digits
    [digits[leftIndex], digits[rightIndex]] = [digits[rightIndex], digits[leftIndex]];

    // convert digits to array and convert into number and return it
    return Number(digits.join(''));
};


/*
You are given an integer num. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.
*/


/*
Example 1:

Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.

Example 2:

Input: num = 9973
Output: 9973
Explanation: No swap.
*/


/*
Constraints:

0 <= num <= 108
*/