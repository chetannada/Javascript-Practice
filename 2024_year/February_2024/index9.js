// https://leetcode.com/problems/largest-3-same-digit-number-in-string/

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    let largest = '';

    // loop through every character of string num start from 2nd index
    for (let i = 2; i < num.length; i++) {

        // if ith character of num is equal to i-1th character of num
        // and i-1th character of num is equal to i-2th character of num
        if (num[i] === num[i - 1] && num[i - 1] === num[i - 2]) {

            // do sum of i-2th, i-1th, ith character of num
            let temp = (num[i - 2] + num[i - 1] + num[i]);

            // if largest is greater then temp then add initialize temp to largest
            if (largest < temp) {
                largest = temp;
            }

        }
    }

    // return answer largest
    return largest;

};


/*
You are given a string num representing a large integer. An integer is good if it meets the following conditions:

It is a substring of num with length 3.
It consists of only one unique digit.
Return the maximum good integer as a string or an empty string "" if no such integer exists.

Note:

A substring is a contiguous sequence of characters within a string.
There may be leading zeroes in num or a good integer.
*/


/*
Example 1:

Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333".
"777" is the largest, so we return "777".

Example 2:

Input: num = "2300019"
Output: "000"
Explanation: "000" is the only good integer.

Example 3:

Input: num = "42352338"
Output: ""
Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.
*/


/*
Constraints:

3 <= num.length <= 1000
num only consists of digits.
*/