// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {

    // initialize new Map()
    let map = new Map();

    // loop through the every element of array and count the frequency of every element using map.set()
    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // convert the map object into key-value pairt of array and then sort the value in descending order
    let sortArr = [...map.entries()].sort((a, b) => b[1] - a[1]);
    let len = sortArr.length;

    // loop through every element of array from last element to first
    for (let i = len - 1; i >= 0; i--) {

        let temp = sortArr[i][1]

        // run loop if k is greater then 0
        while (k > 0) {

            // if temp is greater then 0 then decrement temp and k
            if (temp > 0) {
                temp--;
                k--;
            }

            // if temp is equal to 0 then remove last element from array sortArr and break the while loop
            if (temp === 0) {
                sortArr.pop();
                break;
            }
        }

        // if k is equal to 0 then break the for loop
        if (k === 0) {
            break;
        }

    }

    // return the answer length the of sortArr
    return sortArr.length;
};


/*
Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.
*/


/*
Example 1:

Input: arr = [5,5,4], k = 1
Output: 1
Explanation: Remove the single 4, only 5 is left.
Example 2:
Input: arr = [4,3,1,1,3,3,2], k = 3
Output: 2
Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.
*/


/*
Constraints:

1 <= arr.length <= 10^5
1 <= arr[i] <= 10^9
0 <= k <= arr.length
*/