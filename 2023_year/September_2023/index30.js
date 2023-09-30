// https://leetcode.com/problems/count-integers-with-even-digit-sum/description/

/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {

    // initialize function evenSum with parameter index
    function evenSum(index) {

        // convert index to string using toString() and then convert into array using split() and then sum of all digits using reduce()
        let even = index.toString().split('').reduce((a, b) => +a + +b, 0);

        // if even is divisable by 2 then return true otherwise return false
        if (even % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    // initialize count to zero
    let count = 0;

    // loop through 1 to num
    for (let i = 1; i <= num; i++) {

        // invoke the function evenSum with i as argument if it's true then increment count 
        if (evenSum(i)) {
            count++;
        }
    }

    // return count
    return count;
};

/*
Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.

The digit sum of a positive integer is the sum of all its digits.
*/


/*
Example 1:

Input: num = 4
Output: 2
Explanation:
The only integers less than or equal to 4 whose digit sums are even are 2 and 4.    

Example 2:

Input: num = 30
Output: 14
Explanation:
The 14 integers less than or equal to 30 whose digit sums are even are
2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.
*/


/*
Constraints:

1 <= num <= 1000
*/