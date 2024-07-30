// https://leetcode.com/problems/find-if-digit-game-can-be-won/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function (nums) {

    // initialize singleDigit and doubleDigit as 0
    let singleDigit = 0, doubleDigit = 0;

    // run for of loop for nums
    for (let num of nums) {

        // if num less than 10
        if (num < 10) {

            // add num to singleDigit and assign back to singleDigit
            singleDigit += num;
        } else {

            // else add num to doubleDigit and assign back to doubleDigit
            doubleDigit += num;
        }
    }

    // if singleDigit is greater than doubleDigit or doubleDigit is greater than singleDigit then return true otherwise return false
    if (singleDigit > doubleDigit || doubleDigit > singleDigit) {
        return true;
    } else {
        return false;
    }
};

/*
You are given an array of positive integers nums.

Alice and Bob are playing a game. In the game, Alice can choose either all single-digit numbers or all double-digit numbers from nums, and the rest of the numbers are given to Bob. Alice wins if the sum of her numbers is strictly greater than the sum of Bob's numbers.

Return true if Alice can win this game, otherwise, return false.
*/


/*
Example 1:

Input: nums = [1,2,3,4,10]

Output: false

Explanation:

Alice cannot win by choosing either single-digit or double-digit numbers.

Example 2:

Input: nums = [1,2,3,4,5,14]

Output: true

Explanation:

Alice can win by choosing single-digit numbers which have a sum equal to 15.

Example 3:

Input: nums = [5,5,5,25]

Output: true

Explanation:

Alice can win by choosing double-digit numbers which have a sum equal to 25.
*/


/*
Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 99
*/