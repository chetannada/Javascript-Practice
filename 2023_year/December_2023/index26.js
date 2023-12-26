// https://leetcode.com/problems/letter-tile-possibilities/description/

/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    let map = new Map();

    for (let i = 0; i < tiles.length; i++) {
        map.set(tiles[i], (map.get(tiles[i]) || 0) + 1);
    }

    return helper(map);
};

function helper(map) {
    let sum = 0;

    for (let [key, value] of map.entries()) {

        if (value === 0) continue;

        sum++;

        map.set(key, map.get(key) - 1);

        sum += helper(map, sum);
        map.set(key, map.get(key) + 1);
    }

    return sum
};

/*
You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.
*/


/*
Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

Example 2:

Input: tiles = "AAABBC"
Output: 188

Example 3:

Input: tiles = "V"
Output: 1
*/


/*
Constraints:

1 <= tiles.length <= 7
tiles consists of uppercase English letters.
*/