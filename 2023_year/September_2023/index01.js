// https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {

    // initialize function isPrime with parameter num
    function isPrime(num) {

        // if num is equal to 2 then return true
        if (num === 2) return true;

        // if number is divisable by 2 then return true
        if (num % 2 === 0) return false;

        // loop through the 3 to square root of num
        for (let i = 3; i <= Math.sqrt(num); i += 2) {

            // if num is divisable by i then return false
            if (num % i === 0) return false;
        }

        // return true if num is greater then 1 otherwise false
        return num > 1;
    }

    // initialize count to zero
    let count = 0;

    // loop through the left to right
    for (let i = left; i <= right; i++) {

        // find the setBits by converting i to binary using toString(2) with base 2 and then remove all zero from string using replace() with regex property then find the length using .length property
        let setBits = i.toString(2).replace(/[^1]/g, "").length;

        // call isPrime function with setBits as argument if it's prime then increment count
        if (isPrime(setBits)) count++;
    }

    // return count
    return count;
};

/*
Given two integers left and right, return the count of numbers in the inclusive range [left, right] having a prime number of set bits in their binary representation.

Recall that the number of set bits an integer has is the number of 1's present when written in binary.

For example, 21 written in binary is 10101, which has 3 set bits.
*/


/*
Example 1:

Input: left = 6, right = 10
Output: 4
Explanation:
6  -> 110 (2 set bits, 2 is prime)
7  -> 111 (3 set bits, 3 is prime)
8  -> 1000 (1 set bit, 1 is not prime)
9  -> 1001 (2 set bits, 2 is prime)
10 -> 1010 (2 set bits, 2 is prime)
4 numbers have a prime number of set bits.

Example 2:

Input: left = 10, right = 15
Output: 5
Explanation:
10 -> 1010 (2 set bits, 2 is prime)
11 -> 1011 (3 set bits, 3 is prime)
12 -> 1100 (2 set bits, 2 is prime)
13 -> 1101 (3 set bits, 3 is prime)
14 -> 1110 (3 set bits, 3 is prime)
15 -> 1111 (4 set bits, 4 is not prime)
5 numbers have a prime number of set bits.
*/


/*
Constraints:

1 <= left <= right <= 106
0 <= right - left <= 104
*/