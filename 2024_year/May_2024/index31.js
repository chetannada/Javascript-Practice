// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {

    // convert num to array
    let arr = num.toString().split('');

    // sort the array in ascending order
    arr.sort((a, b) => +(a) - +(b));

    // do sum even index array and odd index array of arr
    let num1 = arr[0] + arr[2];
    let num2 = arr[1] + arr[3];

    // return sum of num1 and num2
    return +(num1) + +(num2);
};

/*
You are given a positive integer num consisting of exactly four digits. Split num into two new integers new1 and new2 by using the digits found in num. Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
Return the minimum possible sum of new1 and new2.
*/


/*
Example 1:

Input: num = 2932
Output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

Example 2:

Input: num = 4009
Output: 13
Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
*/


/*
Constraints:

1000 <= num <= 9999
*/