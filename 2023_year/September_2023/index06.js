// https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {

    // loop through every element of cost from index 2
    for (let i = 2; i < cost.length; i++) {

        // find minimum value of addition of first and third element value and addition of second and third element value and store in third element using Math.min()
        cost[i] = Math.min(cost[i - 2] + cost[i], cost[i - 1] + cost[i]);
    }

    // return minimum value from last element and second element value using Math.min() 
    return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};

/*
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
*/

/*
Example 1:

Input: cost = [10,15,20]
Output: 15
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.

Example 2:

Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
*/

/*
Constraints:

2 <= cost.length <= 1000
0 <= cost[i] <= 999
*/