// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {

    // sort the element of array nums
    nums.sort((a, b) => a - b);
    let answer = [];

    // loop through elements of array nums
    for (let i = 0; i < nums.length; i++) {

        // make 3 element of array from nums 
        let arr = nums.slice(i, i + 3);
        let first = arr[0];
        let second = arr[1];
        let third = arr[2];

        // if difference between any two elements in one array is less than or equal to k then push arr into answer
        if (Math.abs(first - second) <= k && Math.abs(second - third) <= k && Math.abs(third - first) <= k) {
            answer.push(arr);
        } else {
            // else return empty array
            return [];
        }

        // increment i by 2
        i += 2;
    }

    // return answer array
    return answer;
};

/*
You are given an integer array nums of size n and a positive integer k.

Divide the array into one or more arrays of size 3 satisfying the following conditions:

Each element of nums should be in exactly one array.
The difference between any two elements in one array is less than or equal to k.
Return a 2D array containing all the arrays. If it is impossible to satisfy the conditions, return an empty array. And if there are multiple answers, return any of them.
*/


/*
Example 1:

Input: nums = [1,3,4,8,7,9,3,5,1], k = 2
Output: [[1,1,3],[3,4,5],[7,8,9]]
Explanation: We can divide the array into the following arrays: [1,1,3], [3,4,5] and [7,8,9].
The difference between any two elements in each array is less than or equal to 2.
Note that the order of elements is not important.

Example 2:

Input: nums = [1,3,3,2,7,3], k = 3
Output: []
Explanation: It is not possible to divide the array satisfying all the conditions.
*/


/*
Constraints:

n == nums.length
1 <= n <= 105
n is a multiple of 3.
1 <= nums[i] <= 105
1 <= k <= 105
*/