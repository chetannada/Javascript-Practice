// https://leetcode.com/problems/bag-of-tokens/description/

/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {

    // initialize count for to keep track of count score 
    // and result for to keep track of maximum count
    let count = 0, result = 0;

    // sort the array in ascending order
    tokens.sort((a, b) => a - b);

    // initialize left pointer to be 0 and right pointer to be last index
    let left = 0, right = tokens.length - 1

    // run while loop until left is less than or equal to right
    while (left <= right) {

        // play Face-up: if power is greater then or equal to value of 
        // the left index of  the element of array
        if (power >= tokens[left]) {

            // subtract power and array element value and assign to power
            power -= tokens[left];

            // increment left pointer and count
            left++;
            count++;

            // assign maximum value from result and count to result 
            // to keep track of maximum score
            result = Math.max(result, count);

        } else if (count > 0) { // play Face-down: else if count is greater then 0
            // add power and array element value of right index of an array and assign to power
            power += tokens[right];

            // decrement right pointer and count
            right--;
            count--;
        } else { // else: unable to play any game break the while loop
            break;
        }
    }

    // retrun the maximum answer result
    return result;
};

/*
You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where each tokens[i] donates the value of tokeni.

Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):

Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i] power and gaining 1 score.
Face-down: If your current score is at least 1, you may play tokeni, gaining tokens[i] power and losing 1 score.
Return the maximum possible score you can achieve after playing any number of tokens.
*/


/*
Example 1:
Input: tokens = [100], power = 50

Output: 0

Explanation: Since your score is 0 initially, you cannot play the token face-down. You also cannot play it face-up since your power (50) is less than tokens[0] (100).

Example 2:
Input: tokens = [200,100], power = 150

Output: 1
Explanation: Play token1 (100) face-up, reducing your power to 50 and increasing your score to 1.

There is no need to play token0, since you cannot play it face-up to add to your score. The maximum score achievable is 1.

Example 3:
Input: tokens = [100,200,300,400], power = 200

Output: 2

Explanation: Play the tokens in this order to get a score of 2:

Play token0 (100) face-up, reducing power to 100 and increasing score to 1.
Play token3 (400) face-down, increasing power to 500 and reducing score to 0.
Play token1 (200) face-up, reducing power to 300 and increasing score to 1.
Play token2 (300) face-up, reducing power to 0 and increasing score to 2.
The maximum score achievable is 2.
*/


/*
Constraints:

0 <= tokens.length <= 1000
0 <= tokens[i], power < 104
*/