// https://leetcode.com/problems/kth-largest-element-in-an-array/description/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {

    // initialize maxPQ as instance of of MaxPriorityQueue (It's PriorityQueue package from @datastructures-js and it supported by Leetcode)
    let maxPQ = new MaxPriorityQueue();

    // loop through the every element of array nums and call enqueue method to add num in maxPQ
    nums.forEach(num => maxPQ.enqueue(num));

    // run while loop until k is greater than 1
    while (k > 1) {

        // call dequeue method to remove highest element from maxPQ
        maxPQ.dequeue();

        // decreasse k by 1
        k--;
    }

    // call the front method to return largest element from maxPQ
    return maxPQ.front().element
};


/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?
*/


/*
Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/


/*
Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/