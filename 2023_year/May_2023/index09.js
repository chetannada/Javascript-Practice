// https://leetcode.com/problems/increasing-decreasing-string/

/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let res = '';
    let ss = s.split('');
    let unique = [...new Set(ss)].sort();
    
    while (ss.length > 0) {
        for (let i = 0; i < unique.length; i++) {
            const index = ss.indexOf(unique[i]);
            if (index !== -1) {
                res += unique[i];
                ss.splice(index, 1);
            }
        }
        unique = unique.reverse();
    }
    return res;
};

/*
Example 1:
Input: s = "aaaabbbbcccc"
Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

Example 2:
Input: s = "rat"
Output: "art"
Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.
*/