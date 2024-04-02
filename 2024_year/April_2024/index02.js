// https://leetcode.com/problems/harshad-number/

/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {

    // initialize function sumOfDigits(x) with x as parameter
    // for do sum of all digits of number x
    function sumOfDigits(x) {

        // if x is less than 10 then return x
        if (x < 10) return x;

        // find remainder of x
        let rem = x % 10;

        // return sum of remainder recursive call of function sumOfDigits() where argument will x divide by 10
        return rem + sumOfDigits(Math.floor(x / 10));
    }

    // invoke the sumOfDigits(x) function with x number as argument
    let sum = sumOfDigits(x);

    // if x modulo sum is equal to 0 then return sum
    if (x % sum === 0) return sum;

    // otherwise return -1
    return -1;
};

/*
An integer divisible by the sum of its digits is said to be a Harshad number. You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.
*/


/*
Example 1:

Input: x = 18

Output: 9

Explanation:

The sum of digits of x is 9. 18 is divisible by 9. So 18 is a Harshad number and the answer is 9.

Example 2:

Input: x = 23

Output: -1

Explanation:

The sum of digits of x is 5. 23 is not divisible by 5. So 23 is not a Harshad number and the answer is -1.
*/


/*
Constraints:

1 <= x <= 100
*/