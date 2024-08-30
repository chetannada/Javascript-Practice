// https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {

    // create new array of length of pref element with fill with 0
    let result = Array(pref.length).fill(0);

    // assign first element of result as first element of pref
    result[0] = pref[0];

    // run for loop from index 0 to pref.length - 1
    for (let i = 0; i < pref.length - 1; i++) {

        // do bitwise-xpr between current element of pref and next element and assign to i+1 th element of result
        result[i + 1] = (pref[i] ^ pref[i + 1]);
    }

    // return final answer result
    return result;
};


/*
You are given an integer array pref of size n. Find and return the array arr of size n that satisfies:

pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
Note that ^ denotes the bitwise-xor operation.

It can be proven that the answer is unique.
*/


/*
Example 1:

Input: pref = [5,2,0,3,1]
Output: [5,7,2,3,2]
Explanation: From the array [5,7,2,3,2] we have the following:
- pref[0] = 5.
- pref[1] = 5 ^ 7 = 2.
- pref[2] = 5 ^ 7 ^ 2 = 0.
- pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
- pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1.

Example 2:

Input: pref = [13]
Output: [13]
Explanation: We have pref[0] = arr[0] = 13.
*/



/*
Constraints:

1 <= pref.length <= 105
0 <= pref[i] <= 106
*/