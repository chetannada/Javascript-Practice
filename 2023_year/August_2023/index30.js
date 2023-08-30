// https://leetcode.com/problems/alternating-digit-sum/

/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {

    // initialize sum to zero
    let sum = 0;

    // convert n to string using toString()
    let str = n.toString();

    // loop through every character of string str
    for (let i = 0; i < str.length; i++) {

        // if i is divisable by 2 then add every character of str with prefix sign +
        if (i % 2 === 0) sum += (+str[i]);

        // else add every character of str with prefix sign -    
        else sum += (-str[i]);
    }

    // return sum
    return sum;
};

/*
You are given a positive integer n. Each digit of n has a sign according to the following rules:

The most significant digit is assigned a positive sign.
Each other digit has an opposite sign to its adjacent digits.
Return the sum of all digits with their corresponding sign.
*/


/*
Example 1:

Input: n = 521
Output: 4
Explanation: (+5) + (-2) + (+1) = 4.

Example 2:

Input: n = 111
Output: 1
Explanation: (+1) + (-1) + (+1) = 1.

Example 3:

Input: n = 886996
Output: 0
Explanation: (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0.
*/


/*
Constraints:

1 <= n <= 109
*/