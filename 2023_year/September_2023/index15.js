// https://leetcode.com/problems/partition-labels/description/

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let lastIndex = {};
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }
    let curLast = 0, res = [], accu = 0;
    for (let i = 0; i < s.length; i++) {
        curLast = Math.max(curLast, lastIndex[s[i]]);
        if (i === curLast) {
            res.push(i + 1 - accu);
            accu = i + 1;
        }
    }
    return res;
};

/*
You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

Return a list of integers representing the size of these parts.
*/

/*
Example 1:

Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.

Example 2:

Input: s = "eccbbbbdec"
Output: [10]
*/

/*
Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.
*/