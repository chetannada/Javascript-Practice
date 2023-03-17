// https://leetcode.com/problems/richest-customer-wealth/submissions/917021718/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result = [];
    for(let i=0; i<accounts.length; i++){
            result.push(Number(accounts[i].reduce((a,b) => a + b)));
    }
    let ans = Math.max(...result);
    return ans;
};

console.log(maximumWealth([[1,2,3],[3,2,1]])); // 6

/*
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
*/