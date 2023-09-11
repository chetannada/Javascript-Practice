// https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/

/**
 * @param {number} n
 * @return {number}
 */

var countOrders = function (n) {

    // initialize modulo to 10^9 + 7
    const modulo = 10 ** 9 + 7;

    // initialize count to 1
    let count = 1;

    // loop through 2 to n
    for (let i = 2; i <= n; i++) {

        // do multiplication of count and (2 * i - 1) and i and then do modulo operation with modulo and add in count;
        count = (count * (2 * i - 1) * i) % modulo;
    }

    // return count
    return count;
};

/*
Given n orders, each order consist in pickup and delivery services. 

Count all valid pickup/delivery possible sequences such that delivery(i) is always after of pickup(i). 

Since the answer may be too large, return it modulo 10^9 + 7.
*/


/*
Example 1:

Input: n = 1
Output: 1
Explanation: Unique order (P1, D1), Delivery 1 always is after of Pickup 1.

Example 2:

Input: n = 2
Output: 6
Explanation: All possible orders: 
(P1,P2,D1,D2), (P1,P2,D2,D1), (P1,D1,P2,D2), (P2,P1,D1,D2), (P2,P1,D2,D1) and (P2,D2,P1,D1).
This is an invalid order (P1,D2,P2,D1) because Pickup 2 is after of Delivery 2.
Example 3:

Input: n = 3
Output: 90
*/


/*
Constraints:

1 <= n <= 500
*/
