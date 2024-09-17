// https://leetcode.com/problems/maximum-multiplication-score/description/

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var maxScore = function (a, b) {

    // initialize dp array with length 5 and each element contain array of length of b + 1 and fill with -Infinity
    let dp = new Array(5).fill(0).map(item => Array(b.length + 1).fill(-Infinity));

    // update dp[0][0] with 0
    dp[0][0] = 0;

    // run for loop from index 1 to 4 (inclusive)
    for (let i = 1; i <= 4; i++) {

        // initializ max as -Infinity
        let max = -Infinity;

        // run for loop from index i to b.length (inclusive)
        for (let j = i; j <= b.length; j++) {

            // update max with maximum value between dp[i-1][j-1]
            max = Math.max(max, dp[i - 1][j - 1]);

            // update dp[i][j] with addition of max and multiplication of a[i-1] and b[j-1] 
            dp[i][j] = max + a[i - 1] * b[j - 1];
        }
    }

    // return maximum value from array dp[4]
    return Math.max(...dp[4]);
};


/*
You are given an integer array a of size 4 and another integer array b of size at least 4.

You need to choose 4 indices i0, i1, i2, and i3 from the array b such that i0 < i1 < i2 < i3. Your score will be equal to the value a[0] * b[i0] + a[1] * b[i1] + a[2] * b[i2] + a[3] * b[i3].

Return the maximum score you can achieve.
*/


/*
Example 1:

Input: a = [3,2,5,6], b = [2,-6,4,-5,-3,2,-7]

Output: 26

Explanation:
We can choose the indices 0, 1, 2, and 5. The score will be 3 * 2 + 2 * (-6) + 5 * 4 + 6 * 2 = 26.

Example 2:

Input: a = [-1,4,5,-2], b = [-5,-1,-3,-2,-4]

Output: -1

Explanation:
We can choose the indices 0, 1, 3, and 4. The score will be (-1) * (-5) + 4 * (-1) + 5 * (-2) + (-2) * (-4) = -1.

 
*/


/*
Constraints:

a.length == 4
4 <= b.length <= 105
-105 <= a[i], b[i] <= 105
*/