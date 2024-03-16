// https://leetcode.com/problems/arithmetic-subarrays/description/

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {

    // initialize result array for answer
    let result = [];

    // initialize function checkArithmetic(arr) with arr as argument
    function checkArithmetic(arr) {

        // sort the array in ascending order
        arr.sort((a, b) => a - b);

        // find the diffrence between 1st index and oth index element in arr
        let diff = arr[1] - arr[0];

        // run loop from 1th index to length -1
        for (let j = 1; j < arr.length - 1; j++) {

            // if difference between j+1th index and jth index 
            // is not equal to diff then return false
            if (arr[j + 1] - arr[j] !== diff) return false;
        }

        // otherwise return true
        return true;
    }

    // m range queries: run for loop from 0th index to lengh of array l
    for (let i = 0; i < l.length; i++) {

        // find subarray from array nums using slice() 
        // and range are ith index of array l and array r + 1
        let arr = nums.slice(l[i], r[i] + 1);

        // invoke checkArithmetic(arr) with argument as arr 
        // and push return value in array result
        result.push(checkArithmetic(arr));
    }

    // return answer result
    return result;
};

/*
A sequence of numbers is called arithmetic if it consists of at least two elements, and the difference between every two consecutive elements is the same. More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.

For example, these are arithmetic sequences:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic:

1, 1, 2, 5, 7
You are given an array of n integers, nums, and two arrays of m integers each, l and r, representing the m range queries, where the ith query is the range [l[i], r[i]]. All the arrays are 0-indexed.

Return a list of boolean elements answer, where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], ... , nums[r[i]] can be rearranged to form an arithmetic sequence, and false otherwise.
*/


/*
Example 1:

Input: nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]
Output: [true,false,true]
Explanation:
In the 0th query, the subarray is [4,6,5]. This can be rearranged as [6,5,4], which is an arithmetic sequence.
In the 1st query, the subarray is [4,6,5,9]. This cannot be rearranged as an arithmetic sequence.
In the 2nd query, the subarray is [5,9,3,7]. This can be rearranged as [3,5,7,9], which is an arithmetic sequence.

Example 2:

Input: nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10], l = [0,1,6,4,8,7], r = [4,4,9,7,9,10]
Output: [false,true,false,false,true,true]
*/


/*
Constraints:

n == nums.length
m == l.length
m == r.length
2 <= n <= 500
1 <= m <= 500
0 <= l[i] < r[i] < n
-105 <= nums[i] <= 105
*/