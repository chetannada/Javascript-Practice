// https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/description/

/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {

    // initialize n as length of seq
    // and level equal to 0
    // and create new array of length n and fill with 0 
    let n = seq.length, level = 0, arr = new Array(n).fill(0);

    // run for loop from index 0 to n
    for (let i = 0; i < n; i++) {

        // if ith character of seq is equal to "(" then do modulo of pre increment of level with 2
        if (seq.charAt(i) === "(") {
            arr[i] = ++level % 2;
        } else {

            // else do modulo of post decrement of level with 2
            arr[i] = level-- % 2;
        }
    }

    // return answer arr
    return arr;
};

/*
A string is a valid parentheses string (denoted VPS) if and only if it consists of "(" and ")" characters only, and:

It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are VPS's, or
It can be written as (A), where A is a VPS.
We can similarly define the nesting depth depth(S) of any VPS S as follows:

depth("") = 0
depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's
depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
For example,  "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

Given a VPS seq, split it into two disjoint subsequences A and B, such that A and B are VPS's (and A.length + B.length = seq.length).

Now choose any such A and B such that max(depth(A), depth(B)) is the minimum possible value.

Return an answer array (of length seq.length) that encodes such a choice of A and B:  answer[i] = 0 if seq[i] is part of A, else answer[i] = 1.  Note that even though multiple answers may exist, you may return any of them.
*/


/*
Example 1:

Input: seq = "(()())"
Output: [0,1,1,1,1,0]

Example 2:

Input: seq = "()(())()"
Output: [0,0,0,1,1,0,1,1]
*/


/*
Constraints:

1 <= seq.size <= 10000
*/