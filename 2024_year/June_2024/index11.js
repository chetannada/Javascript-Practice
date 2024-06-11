// https://leetcode.com/problems/relative-sort-array/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {

    // initialize map for count frequency of element in arr1
    let map = new Map();

    // initialize distinctEle for storing distinct element and result for answer
    let distinctEle = [], result = [];

    // run for of loop for arr1
    for (let num of arr1) {

        // if arr2 includes num then count the frequency of element of arr1 and set in map
        if (arr2.includes(num)) {
            map.set(num, (map.get(num) || 0) + 1);
        } else {

            // else add num in distinctEle
            distinctEle.push(num);
        }
    }

    // run for of loop for arr2
    for (let num of arr2) {

        // get the value of num from map
        let count = map.get(num);

        // add num with multiple of count in result
        result.push(...Array(count).fill(num));
    }

    // sort the distinctEle in ascending order
    distinctEle.sort((a, b) => a - b);

    // add distinctEle arr element in result and return the final answer
    return result.concat(distinctEle);
};

/*
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
*/


/*
Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]

Example 2:

Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
Output: [22,28,8,6,17,44]
*/


/*
Constraints:

1 <= arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
All the elements of arr2 are distinct.
Each arr2[i] is in arr1.
*/