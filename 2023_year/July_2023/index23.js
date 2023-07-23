// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => a - b); // sort the every element of the arr
    let checkArithmeticArr = []; // initialize the empty array checkArithmeticArr

    for (let i = 0; i < arr.length - 1; i++) { // loop through the every element of array arr
        let diff = arr[i + 1] - arr[i]; // find difference between next and current element
        checkArithmeticArr.push(diff); // push diff in array checkArithmeticArr
    }

    const allEqual = (array) => array.every(val => val === array[0]); // define allEqaul function and check every element of array parameter is equal or not

    return allEqual(checkArithmeticArr); // return the allEqual function value with argument checkArithmeticArr
};

/*
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.
*/

/*
Example 1:
Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

Example 2:
Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
 
Constraints:
2 <= arr.length <= 1000
-106 <= arr[i] <= 106
*/