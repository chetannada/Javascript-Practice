// https://leetcode.com/problems/counting-bits/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {

    // initialize empty array ans
    let ans = [];

    // loop through 0 to n
    for (let i = 0; i <= n; i++) {

        // convert i to binary using toString(), 2 as redix
        let binary = i.toString(2);

        // find the sum of binary number so convert into array using split() and then reduce() to find addition, here unary operator (+) is used here for converting string to number
        let sum = binary.split('').reduce((a, b) => +a + +b);

        // push sum to ans
        ans.push(sum);
    }

    // return array ans
    return ans;
};

/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
*/

/*
Example 1:

Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
*/


/*
Constraints:

0 <= n <= 105
*/