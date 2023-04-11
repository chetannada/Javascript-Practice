// https://leetcode.com/problems/split-a-string-in-balanced-strings/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0, bal = 0; // initialize count and bal to 0
    for(let i=0; i<s.length; i++){ // loop through every character of string
        let check = s[i] === "L"; // check every character of string is "L"
        check ? bal-- : bal++; // if check is true then decrement bal neighter increment bal
        if(bal === 0) count++; // if bal is equal to 0 then increment count
    }
    return count; // return count;
};

/*
Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

Example 3:
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
*/