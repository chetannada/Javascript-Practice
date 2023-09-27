// https://leetcode.com/problems/count-largest-group/

/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {

    // initialize result to be zero and array arr with value 0
    let result = 0;
    let arr = [0];

    // loop through 1 to n
    for (let i = 1; i <= n; i++) {

        // find the sum of every digit of i using toString() for converting number to string, split() for converting string to array and reduce() for sum of digit
        let count = i.toString().split('').reduce((a, b) => +a + +b, 0);

        // if arr[count] is greater then zero then increment arr[count] otherwise make it 1
        arr[count] > 0 ? arr[count]++ : arr[count] = 1;
    }

    // find maximum value of array arr
    max = Math.max(...arr);

    // if b is eqaul to max then increment the result in array reduce
    arr.reduce(function (a, b) { b === max && result++ }, 0);

    // return the result
    return result;
};

/*
You are given an integer n.

Each number from 1 to n is grouped according to the sum of its digits.

Return the number of groups that have the largest size.
*/

/*
Example 1:

Input: n = 13
Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].
There are 4 groups with largest size.

Example 2:

Input: n = 2
Output: 2
Explanation: There are 2 groups [1], [2] of size 1.
*/


/*
Constraints:

1 <= n <= 104
*/