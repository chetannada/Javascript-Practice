// https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/submissions/1113779593/


/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
    while (n > 0) {
        const modulo = n % 3;

        if (modulo === 2) {
            return false;
        }

        n = (n - modulo) / 3;
    }

    return true;
};

/*
Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

An integer y is a power of three if there exists an integer x such that y == 3x.
*/

/*
Example 1:

Input: n = 12
Output: true
Explanation: 12 = 31 + 32

Example 2:

Input: n = 91
Output: true
Explanation: 91 = 30 + 32 + 34

Example 3:

Input: n = 21
Output: false
*/


/*
Constraints:

1 <= n <= 107
*/