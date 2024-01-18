// https://leetcode.com/problems/unique-number-of-occurrences/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let obj = {};

    // count all same element in array and make object obj
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }

    // make array from object values
    let tempArr = Object.values(obj);

    // find unique element of array
    let setArr = [...new Set(tempArr)];

    // return true if length of tempArr and setArr are same otherwise false
    return tempArr.length === setArr.length

};


/*
Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.
*/


/*
Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
*/


/*
Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
*/