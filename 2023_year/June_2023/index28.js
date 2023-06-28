// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let result = []; // initialize empty array result

    for (let i=0; i< arr.length; i++){ // loop through the every element of arr
        if(i === arr.length - 1){ // if i is equal to arr.length -1
            result.push(-1); // then push -1 in result
        }else{ // else
            let copy = arr.slice(i+1); // initialize copy of arr from index i+1 using slice()
            let max = Math.max(...copy); // find max from copy array
            result.push(max); // push the max in result array
        }
    }
    return result; // return the result
};

/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.
*/

/*
Example 1:
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
Explanation: 
- index 0 --> the greatest element to the right of index 0 is index 1 (18).
- index 1 --> the greatest element to the right of index 1 is index 4 (6).
- index 2 --> the greatest element to the right of index 2 is index 4 (6).
- index 3 --> the greatest element to the right of index 3 is index 4 (6).
- index 4 --> the greatest element to the right of index 4 is index 5 (1).
- index 5 --> there are no elements to the right of index 5, so we put -1.

Example 2:
Input: arr = [400]
Output: [-1]
Explanation: There are no elements to the right of index 0.
 
Constraints:
1 <= arr.length <= 104
1 <= arr[i] <= 105
*/