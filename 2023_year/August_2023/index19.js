// https://leetcode.com/problems/split-with-minimum-sum/

/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {

    // convert num to string using toString() and then convert into array using split() and then sort the array using sort(), here unary (+) i used for converting string to number
    let sortNum = num.toString().split('').sort((a, b) => +a - +b);

    // initialize string str1 and str2 and i to zero
    let str1 = "", str2 = "", i = 0;

    // loop through every digit of sortNum
    for (let digit of sortNum) {

        // if i divisable by 2 then add digit to str1
        if (i % 2 === 0) {
            str1 += digit;
        } else { // else add digit to str2
            str2 += digit;
        }

        // increment i
        i++;
    }

    // Convert strings str1 and str2 to numbers using unary operator (+) and  add & return it
    return +str1 + +str2;
};

/*
Given a positive integer num, split it into two non-negative integers num1 and num2 such that:

The concatenation of num1 and num2 is a permutation of num.
In other words, the sum of the number of occurrences of each digit in num1 and num2 is equal to the number of occurrences of that digit in num.
num1 and num2 can contain leading zeros.
Return the minimum possible sum of num1 and num2.

Notes:

It is guaranteed that num does not contain any leading zeros.
The order of occurrence of the digits in num1 and num2 may differ from the order of occurrence of num.
*/

/*
Example 1:
Input: num = 4325
Output: 59
Explanation: We can split 4325 so that num1 is 24 and num2 is 35, giving a sum of 59. We can prove that 59 is indeed the minimal possible sum.

Example 2:
Input: num = 687
Output: 75
Explanation: We can split 687 so that num1 is 68 and num2 is 7, which would give an optimal sum of 75.
 
Constraints:
10 <= num <= 109
*/