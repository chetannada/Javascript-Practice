// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // initialize profit to be zero
    let profit = 0;

    // initialize left and right pointer to be 0 and 1 
    let left = 0;
    let right = 1;

    // run while loop until right is less than length of prices
    while (right < prices.length) {

        // buy the left element of prices
        let buy = prices[left];

        // sell the right element of prices
        let sell = prices[right];

        // find difference between sell and buy
        let diff = sell - buy;

        // if diff is greater then profit then assign diff to profit 
        if (diff > profit) {
            profit = diff;
        }

        // if buy is greater then sell then assign right index to left index
        if (buy > sell) {
            left = right;
        }

        // increment right index
        right++;
    }

    // return answer profit
    return profit;
};


/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/


/*
Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/


/*
Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/