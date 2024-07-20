// https://leetcode.com/problems/find-the-winning-player-in-coin-game/description/

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function (x, y) {

    // initialize result as "Bob"
    let result = "Bob";

    // run while loop until we return the result
    while (true) {

        // if x is greater than or equal to 1 and y is greater than or equal to 4
        if (x >= 1 && y >= 4) {

            // decrement x by 1 and y by 4
            x--;
            y -= 4;

            // if result is equal to "Bob" then make it "Alice" else make it "Bob"
            if (result === "Bob") {
                result = "Alice";
            } else {
                result = "Bob";
            }
        } else {

            // else return final result
            return result;
        }
    }
};


/*
You are given two positive integers x and y, denoting the number of coins with values 75 and 10 respectively.

Alice and Bob are playing a game. Each turn, starting with Alice, the player must pick up coins with a total value 115. If the player is unable to do so, they lose the game.

Return the name of the player who wins the game if both players play optimally.
*/


/*
Example 1:

Input: x = 2, y = 7

Output: "Alice"

Explanation:

The game ends in a single turn:

Alice picks 1 coin with a value of 75 and 4 coins with a value of 10.

Example 2:

Input: x = 4, y = 11

Output: "Bob"

Explanation:

The game ends in 2 turns:

Alice picks 1 coin with a value of 75 and 4 coins with a value of 10.
Bob picks 1 coin with a value of 75 and 4 coins with a value of 10.
*/


/*
Constraints:

1 <= x, y <= 100
*/