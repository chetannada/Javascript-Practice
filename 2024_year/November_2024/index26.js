// https://leetcode.com/problems/bulb-switcher/description/

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {

    // if n is equal to 0 then return 0
    if (n === 0) return 0;

    // if n is less than or equal to 3 then return 1
    if (n <= 3) return 1;

    // find square root of n and then take floor value of it and then return it
    return Math.floor(Math.sqrt(n));
};


/*
There are n bulbs that are initially off. You first turn on all the bulbs, then you turn off every second bulb.

On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb.

Return the number of bulbs that are on after n rounds.
*/


/*
Example 1:


Input: n = 3
Output: 1
Explanation: At first, the three bulbs are [off, off, off].
After the first round, the three bulbs are [on, on, on].
After the second round, the three bulbs are [on, off, on].
After the third round, the three bulbs are [on, off, off]. 
So you should return 1 because there is only one bulb is on.
Example 2:

Input: n = 0
Output: 0
Example 3:

Input: n = 1
Output: 1
*/


/*
Constraints:

0 <= n <= 109
*/