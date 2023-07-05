// https://leetcode.com/problems/longest-subsequence-with-limited-sum/

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    const arr = [] // initialize the empty array arr
    let sum = 0 // initialize sum to zero
    let check = 0// initialize check to zero
    nums.sort((a, b) => a - b) // sort the all elements of array nums
    for (let i = 0; i < queries.length; i++) { // loop through the every elements of array queries
        sum = 0; check = 0 // make sum and check to be zero
        for (let j = 0; j < nums.length; j++) {  // loop through the every elements of array nums
            sum += nums[j] // sum to be sum + nums[j]
            if (sum <= queries[i]) check += 1 // if sum less than or equal to queries[i] then increment check by 1
            else break // else break the loop
        }
        arr.push(check) // push check in array 
    }
    return arr // return arr
};

/*
You are given an integer array nums of length n, and an integer array queries of length m.

Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
*/


/*
Example 1:
Input: nums = [4,5,2,1], queries = [3,10,21]
Output: [2,3,4]
Explanation: We answer the queries as follows:
- The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
- The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
- The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.

Example 2:
Input: nums = [2,3,4,5], queries = [1]
Output: [0]
Explanation: The empty subsequence is the only subsequence that has a sum less than or equal to 1, so answer[0] = 0.
 
Constraints:
n == nums.length
m == queries.length
1 <= n, m <= 1000
1 <= nums[i], queries[i] <= 106
*/