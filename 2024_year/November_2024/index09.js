// https://leetcode.com/problems/climbing-stairs/description/


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

    // if n is less than or equal to 3 then return n
    if (n <= 3) {
        return n;
    }

    // create n element array from value 1 to n
    let arr = new Array(n).fill(0).map((ele, i) => i + 1);

    let ans = 0;
    let prev = 3;

    for (let i = 3; i < arr.length; i++) {

        // if i is equal to 3 then add 2 and prev in ans
        if (i === 3) {
            ans += (2 + prev);
        } else {
            let temp = ans; // initialize temp equal to ans
            ans += prev; // add ans and prev steps
            prev = temp; // make prev eqaul to temp
        }

    }

    // return ans
    return ans;
};


/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/


/*
Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/


/*
Constraints:

1 <= n <= 45
*/