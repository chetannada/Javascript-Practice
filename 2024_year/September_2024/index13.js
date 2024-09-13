// https://leetcode.com/problems/multiply-strings/description/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {

    // if num1 is equal to "0" or num2 is equal to "0" then return "0"
    if (num1 === "0" || num2 === "0") return "0";

    // initialize n as length of num1 and m as length of num2
    let n = num1.length, m = num2.length;

    // create a new array with length of n+m and fill with 0
    let result = Array(n + m).fill(0);

    // run for loop from n-1 to 0 (inclusive)
    for (let i = n - 1; i >= 0; i--) {

        // run for loop from m-1 to 0 (inclusive)
        for (let j = m - 1; j >= 0; j--) {

            // multiply num1[i] with num2[j]
            let multiply = num1[i] * num2[j];

            // take p1 and p2 index to keep store value of multiplication
            let p1 = i + j, p2 = i + j + 1;

            // initialize sum as addition of multiply with result[p2]
            let sum = multiply + result[p2];

            // update p2 index of result with modulo of sum by 10 
            result[p2] = sum % 10;

            // divide sum by 10 and round down this value and add it in result[p1]
            result[p1] += Math.floor(sum / 10);
        }
    }

    // convert result to string and remove all leading "0" and return it
    return result.join('').replace(/^0+/g, "");
};


/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/


/*
Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
*/


/*
Constraints:

1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
*/