// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let result = 0;
    for(let i=0; i<operations.length; i++){
        if(operations[i] === "++X" || operations[i] === "X++"){
            result++;
        }else{
            result--;
        }
    }
    return result;
};

console.log(["--X","X++","X++"]); // 1

/*
Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
*/