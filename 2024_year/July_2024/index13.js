// https://leetcode.com/problems/divisor-game/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {

    // initialize dp(dynamic programming) array as empty array
    let dp = [];

    // set 0th index value of dp is false
    dp[0] = false;

    // run for loop from 1 to n
    for (let x = 1; x < n; x++) {

        // if n is even then set xth value (odd index value) of dp as true
        if (n % 2 === 0) {
            dp[x] = true;
        } else {

            // else set xth value (even index value) of dp as false
            dp[x] = false;
        }
    }

    // return n-1th index value of dp
    return dp[n - 1];
};


/*
Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of:

Choosing any x with 0 < x < n and n % x == 0.
Replacing the number n on the chalkboard with n - x.
Also, if a player cannot make a move, they lose the game.

Return true if and only if Alice wins the game, assuming both players play optimally.
*/


/*
Example 1:

Input: n = 2
Output: true
Explanation: Alice chooses 1, and Bob has no more moves.

Example 2:

Input: n = 3
Output: false
Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.
*/


/*
Constraints:

1 <= n <= 1000
*/