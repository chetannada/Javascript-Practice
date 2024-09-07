// https://leetcode.com/problems/find-the-number-of-winning-players/description/

/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function (n, pick) {

    // initialize count as 0 for counting number winning players
    let count = 0;

    // initialize empty object
    let obj = {};

    // run for of loop for pick
    for (let ele of pick) {

        // count the frequency of ele[0] + "" + ele[1] in object
        obj[ele[0] + "" + ele[1]] = (obj[ele[0] + "" + ele[1]] || 0) + 1;

        // if object property ele[0] + "" + ele[1] value is greater than ele[1] and  obj[ele[0]] is not equal to 0
        if (obj[ele[0] + "" + ele[1]] > ele[0] && obj[ele[0]] !== 0) {

            // increment count
            count++;

            // update obj[ele[0]] as 0
            obj[ele[0]] = 0;
        }
    }

    // return final answer count
    return count;
};


/*
You are given an integer n representing the number of players in a game and a 2D array pick where pick[i] = [xi, yi] represents that the player xi picked a ball of color yi.

Player i wins the game if they pick strictly more than i balls of the same color. In other words,

Player 0 wins if they pick any ball.
Player 1 wins if they pick at least two balls of the same color.
...
Player i wins if they pick at leasti + 1 balls of the same color.
Return the number of players who win the game.

Note that multiple players can win the game.
*/


/*
Example 1:

Input: n = 4, pick = [[0,0],[1,0],[1,0],[2,1],[2,1],[2,0]]

Output: 2

Explanation:

Player 0 and player 1 win the game, while players 2 and 3 do not win.

Example 2:

Input: n = 5, pick = [[1,1],[1,2],[1,3],[1,4]]

Output: 0

Explanation:

No player wins the game.

Example 3:

Input: n = 5, pick = [[1,1],[2,4],[2,4],[2,4]]

Output: 1

Explanation:

Player 2 wins the game by picking 3 balls with color 4.
*/


/*
Constraints:

2 <= n <= 10
1 <= pick.length <= 100
pick[i].length == 2
0 <= xi <= n - 1 
0 <= yi <= 10
*/