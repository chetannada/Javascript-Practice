// https://leetcode.com/problems/compare-version-numbers/description/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {

    // convert version1 and version2 into array
    let v1 = version1.split('.');
    let v2 = version2.split('.');

    // find the maximum value from length of both array v1 and v2
    let max = Math.max(v1.length, v2.length);

    // run for loop from 0 index to max
    for (let i = 0; i < max; i++) {

        // if v1[i] && v2[i] contains value
        if (v1[i] && v2[i]) {

            // if v1[i] is equal to v2[i] then continue it
            if (Number(v1[i]) === Number(v2[i])) {
                continue;
            } else if (Number(v1[i]) > Number(v2[i])) { // else if v1[i] is greater than v2[i] then return 1
                return 1;
            } else { // else return -1
                return -1;
            }
        } else if (v1[i]) { // else if v1[i] contain some value 
            if (v1[i] > 0) { // if v1[i] is greater than 0 then return 1 else continue
                return 1;
            } else {
                continue;
            }
        } else if (v2[i]) { // else if v2[i] contain some value
            if (v2[i] > 0) { // if v2[i] is greater than 0 then return -1 else continue
                return -1;
            } else {
                continue;
            }
        }
    }

    // otherwise return 0
    return 0;
};

/*
Given two version numbers, version1 and version2, compare them.

Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

Return the following:

If version1 < version2, return -1.
If version1 > version2, return 1.
Otherwise, return 0.
*/


/*
Example 1:

Input: version1 = "1.01", version2 = "1.001"
Output: 0
Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

Example 2:

Input: version1 = "1.0", version2 = "1.0.0"
Output: 0
Explanation: version1 does not specify revision 2, which means it is treated as "0".

Example 3:

Input: version1 = "0.1", version2 = "1.1"
Output: -1
Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.
*/


/*
Constraints:

1 <= version1.length, version2.length <= 500
version1 and version2 only contain digits and '.'.
version1 and version2 are valid version numbers.
All the given revisions in version1 and version2 can be stored in a 32-bit integer.
*/