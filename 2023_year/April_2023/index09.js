// https://leetcode.com/problems/jewels-and-stones/description/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0; // initialize the count to zero
    for(let i=0; i<stones.length; i++){ // loop through the every character of string of stones
        if(jewels.includes(stones[i])) count++; // jewels include character of stones then increase count
    }
    return count; // return the count
};

/*
Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
*/