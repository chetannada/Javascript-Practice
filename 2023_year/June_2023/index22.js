// https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let ansArr= []; // initialize an empty array ansArr
    arr.sort((a,b) => a- b); // convert the array arr in ascending array using sort()

    for(let i=0; i<arr.length; i++){ // loop through the every element of array 
        let lastIndex = arr.lastIndexOf(arr[i]); // find last Index of arr[i]
        ansArr.push(lastIndex + 1 - i); // push lastindex + 1 and decrement i into ansArr
        i = lastIndex; // take i as lastIndex
    }

    let len = ansArr.length; // initialize len to ansArr.length
    let removeSame = [...new Set(ansArr)]; // remove same element using Set()

    if(len === removeSame.length) return true; // if len and removeSame is equal then return true
    else return false; // else return false;
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
 
Constraints:
1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
*/