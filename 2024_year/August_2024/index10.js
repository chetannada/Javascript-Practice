// https://leetcode.com/problems/maximum-matching-of-players-with-trainers/description/

/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {

    // sort the array players and trainers in ascending order
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);

    // initialize max as 0 for find maximum matching players with trainers
    let max = 0;

    // initialize count as 0 to count matching players
    // initialize two pointer i and j as 0
    let count = 0, i = 0, j = 0;

    // run while loop until j less than trainers.length
    while (j < trainers.length) {

        // if players[i] is less than or equal to trainers[j]
        if (players[i] <= trainers[j]) {

            // increment count 
            count++;

            // update max value with maximum between max and count
            max = Math.max(max, count);

            // move both pointer towords right
            i++;
            j++;
        } else {

            // else move j pointer towords right
            j++;
        }
    }

    // if max is equal to 0 
    if (max === 0) {

        // if first value of players is greater than last value of trainers then return 0 otherwise 1
        return players.at(0) > trainers.at(-1) ? 0 : 1;
    } else {

        // else return max
        return max;
    }
};


/*
You are given a 0-indexed integer array players, where players[i] represents the ability of the ith player. You are also given a 0-indexed integer array trainers, where trainers[j] represents the training capacity of the jth trainer.

The ith player can match with the jth trainer if the player's ability is less than or equal to the trainer's training capacity. Additionally, the ith player can be matched with at most one trainer, and the jth trainer can be matched with at most one player.

Return the maximum number of matchings between players and trainers that satisfy these conditions.
*/


/*
Example 1:

Input: players = [4,7,9], trainers = [8,2,5,8]
Output: 2
Explanation:
One of the ways we can form two matchings is as follows:
- players[0] can be matched with trainers[0] since 4 <= 8.
- players[1] can be matched with trainers[3] since 7 <= 8.
It can be proven that 2 is the maximum number of matchings that can be formed.

Example 2:

Input: players = [1,1,1], trainers = [10]
Output: 1
Explanation:
The trainer can be matched with any of the 3 players.
Each player can only be matched with one trainer, so the maximum answer is 1.
*/


/*
Constraints:

1 <= players.length, trainers.length <= 105
1 <= players[i], trainers[j] <= 109
*/