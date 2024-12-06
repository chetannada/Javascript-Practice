// https://leetcode.com/problems/magical-string/description/


/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {

    // if n is less than or equal to 3 then return 1
    if (n <= 3) return 1;

    let magicStr = ["1", "2", "2"];

    let result = 1;

    let i = 0;

    while (magicStr.length < n) {

        // if i is evern then make val as "1" otherwise "2"
        let val = i % 2 === 0 ? "1" : "2";

        // if val is eqaul to "1" then make isOne true otherwise fasle
        let isOne = val === "1";

        if (magicStr[i + 2] === "1") {

            magicStr.push(val);

            if (isOne) result++;
        } else {

            magicStr.push(val);

            if (isOne) result++;

            // if length of magicStr is greater than or equal to n then break the loop
            if (magicStr.length >= n) break;

            magicStr.push(val);

            if (isOne) result++;
        }

        // increase i
        i++;
    }

    // return result
    return result;
};


/*
A magical string s consists of only '1' and '2' and obeys the following rules:

    The string s is magical because concatenating the number of contiguous occurrences of characters '1' and '2' generates the string s itself.

The first few elements of s is s = "1221121221221121122……". If we group the consecutive 1's and 2's in s, it will be "1 22 11 2 1 22 1 22 11 2 11 22 ......" and the occurrences of 1's or 2's in each group are "1 2 2 1 1 2 1 2 2 1 2 2 ......". You can see that the occurrence sequence is s itself.

Given an integer n, return the number of 1's in the first n number in the magical string s.
*/


/*
Example 1:

Input: n = 6
Output: 3
Explanation: The first 6 elements of magical string s is "122112" and it contains three 1's, so return 3.

Example 2:

Input: n = 1
Output: 1

*/


/*
Constraints:

    1 <= n <= 105

*/