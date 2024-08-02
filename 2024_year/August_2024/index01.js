// https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/description/

/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */

// initialize sievePrime() function which accept maxNum as parameter for counting prime number
function sievePrime(maxNum) {

    // initialize checkPrime as array of maxNum+1 element with value as true
    const checkPrime = Array(maxNum + 1).fill(true);

    // make 0th and 1th element as false because 0 and 1 are not prime number

    checkPrime[0] = checkPrime[1] = false;

    // run for loop from 2 to maxNum
    for (let i = 2; i * i <= maxNum; i++) {

        // if checkPrime[i] is true
        if (checkPrime[i]) {

            // run for loop from i*i to maxNum and increment j by i
            for (let j = i * i; j <= maxNum; j += i) {

                // make jth element of checkPrime as false
                checkPrime[j] = false;
            }
        }
    }

    // return checkPrime
    return checkPrime;
}

// initialize isPrime as function of sievePrime(1000000) with argument value 1000000
const isPrime = sievePrime(1000000);

var nonSpecialCount = function (l, r) {


    // initialize left as square root of l and right square root of right
    let left = Math.ceil(Math.sqrt(l));
    let right = Math.floor(Math.sqrt(r));

    // initialize count as 0 for counting prime number
    let count = 0;

    // run for loop from left to right
    for (let i = left; i <= right; i++) {

        // if ith value of isPrime is true then decrement
        if (isPrime[i]) {
            count--;
        }
    }

    // add count + r - l + 1 and assign to count and return it
    return count += r - l + 1;
};

/*
You are given 2 positive integers l and r. For any number x, all positive divisors of x except x are called the proper divisors of x.

A number is called special if it has exactly 2 proper divisors. For example:

The number 4 is special because it has proper divisors 1 and 2.
The number 6 is not special because it has proper divisors 1, 2, and 3.
Return the count of numbers in the range [l, r] that are not special.
*/


/*
Example 1:

Input: l = 5, r = 7

Output: 3

Explanation:

There are no special numbers in the range [5, 7].

Example 2:

Input: l = 4, r = 16

Output: 11

Explanation:

The special numbers in the range [4, 16] are 4 and 9.
*/


/*
Constraints:

1 <= l <= r <= 109
*/
