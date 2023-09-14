// https://leetcode.com/problems/candy/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {

    // initialize length to length of array ratings
    const length = ratings.length;

    // initialize candies to new array of length element with each value of 1 using Array() and fill() 
    const candies = new Array(length).fill(1);

    // loop through every element from 1 to length
    for (let i = 1; i < length; i++) {

        // if current element of array ratings is greater than previous element of array then add previous element value of candies with 1 and assign to current element of array candies
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // loop through every element from length - 2 to 0
    for (let i = length - 2; i >= 0; i--) {

        // if current element of array ratings is greater than next element of array then find maximum value of current element of candies and addition of next element of candies with 1 and assign to current element of array candies
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // return the addition of values of array candies using reduce()
    return candies.reduce((a, b) => a + b, 0);
};


/*
There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.
*/


/*
Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
*/


/*
Constraints:

n == ratings.length
1 <= n <= 2 * 104
0 <= ratings[i] <= 2 * 104
*/