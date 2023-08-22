// https://leetcode.com/problems/maximum-number-of-balls-in-a-box/

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {

    // initialize map using Map()
    let map = new Map();

    // initialize function findDigitSum with paramter digit
    function findDigitSum(digit) {

        // convert digit to string using toString()
        let str = digit.toString();

        // if str length is equal to 1 then return digit
        if (str.length == 1) {

            return digit;

        } else {

            // else convert str to array using split() and add the digit using reduce() and unary operator (+) and return it 
            return str.split('').reduce((a, b) => +a + +b);
        }
    }

    // loop through lowLimit to highLimit
    for (let i = lowLimit; i <= highLimit; i++) {

        // invoke the findDigitSum with argument i
        let digitSum = findDigitSum(i);

        // if map has digitSum
        if (map.has(digitSum)) {

            // get the value of digitSum from map
            let val = map.get(digitSum);

            // set the value of digitSum to val + 1
            map.set(digitSum, val + 1);
        } else {

            // else set the value of digitSum to 1
            map.set(digitSum, 1);
        }
    }

    // return maximum value of values of map using spread operator and map.values()
    return Math.max(...[...map.values()]);
};

/*
You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1), and an infinite number of boxes numbered from 1 to infinity.

Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number. For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.

Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.
*/


/*
Example 1:

Input: lowLimit = 1, highLimit = 10
Output: 2
Explanation:
Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
Ball Count:  2 1 1 1 1 1 1 1 1 0  0  ...
Box 1 has the most number of balls with 2 balls.

Example 2:

Input: lowLimit = 5, highLimit = 15
Output: 2
Explanation:
Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
Ball Count:  1 1 1 1 2 2 1 1 1 0  0  ...
Boxes 5 and 6 have the most number of balls with 2 balls in each.

Example 3:

Input: lowLimit = 19, highLimit = 28
Output: 2
Explanation:
Box Number:  1 2 3 4 5 6 7 8 9 10 11 12 ...
Ball Count:  0 1 1 1 1 1 1 1 1 2  0  0  ...
Box 10 has the most number of balls with 2 balls.
*/


/*
Constraints:

1 <= lowLimit <= highLimit <= 105
*/