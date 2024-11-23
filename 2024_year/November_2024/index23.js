// https://leetcode.com/problems/count-primes/description/


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {

    // initialize isPrime as array with n element and value as 1 
    let isPrime = new Array(n).fill(1);

    // make 0th and 1th element of isPrime as 0
    isPrime[0] = 0;
    isPrime[1] = 0;

    // run for loop from 2 to n
    for (let i = 2; i * i < n; i++) {

        // if isPrime[i] is 1
        if (isPrime[i]) {

            // run for loop from i*i to n
            for (let j = i * i; j < n; j += i) {

                // update isPrime[j] as 0
                isPrime[j] = 0;
            }
        }
    }

    // count 1 from array isPrime and return it
    return isPrime.reduce((acc, num) => acc + num, 0);
};


/*
Given an integer n, return the number of prime numbers that are strictly less than n.
*/


/*
Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Example 2:

Input: n = 0
Output: 0

Example 3:

Input: n = 1
Output: 0
*/


/*
Constraints:

0 <= n <= 5 * 106
*/