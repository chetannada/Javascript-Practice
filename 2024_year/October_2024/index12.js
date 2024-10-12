// https://leetcode.com/problems/powx-n/description/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {

    // if n is equal to 0 then return 1
    if (n === 0) return 1;

    // if n is less than 0 then return (1 / myPow(x, -n))
    // recursively call myPow(x, -n) with negative value of n so it becomes poisitive
    if (n < 0) return (1 / myPow(x, -n));

    // if n is even
    if (n % 2 === 0) {

        // initialize halfPower as myPow(x, n / 2) (recursively call myPow() function)
        let halfPower = myPow(x, n / 2);

        // return multiplication of halfPower into halfPower
        return halfPower * halfPower;
    } else {

        // // initialize halfPower as myPow(x, (n - 1) / 2) (recursively call myPow() function)
        let halfPower = myPow(x, (n - 1) / 2);

        // return multiplication of x and halfPower into halfPower
        return x * halfPower * halfPower;
    }
};



/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
*/


/*
Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
*/


/*
Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
Either x is not zero or n > 0.
-104 <= xn <= 104
*/