// https://leetcode.com/problems/closest-divisors/description/

/**
 * @param {number} num
 * @return {number[]}
 */

const closestDivisors = function (num) {
    const d1 = largestDivisor(num + 1);
    const d2 = largestDivisor(num + 2);
    const r1 = (num + 1) / d1;
    const r2 = (num + 2) / d2;

    return Math.abs(d1 - r1) < Math.abs(d2 - r2) ? [d1, r1] : [d2, r2];
};

const largestDivisor = (num) => {
    let sqrt = Math.floor(Math.sqrt(num));
    while (num % sqrt !== 0) sqrt--;

    return sqrt;
}

/*
Given an integer num, find the closest two integers in absolute difference whose product equals num + 1 or num + 2.

Return the two integers in any order.
*/


/*
Example 1:

Input: num = 8
Output: [3,3]
Explanation: For num + 1 = 9, the closest divisors are 3 & 3, for num + 2 = 10, the closest divisors are 2 & 5, hence 3 & 3 is chosen.

Example 2:

Input: num = 123
Output: [5,25]

Example 3:

Input: num = 999
Output: [40,25]
*/


/*
Constraints:

1 <= num <= 10^9
*/