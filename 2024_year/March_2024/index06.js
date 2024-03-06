// https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/description/

import { MinPriorityQueue } from "datastructures-js";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  // Create a min-heap (priority queue) using MinPriorityQueue()
  // to find the smallest elements
  const minHeap = new MinPriorityQueue();

  // enqueue (push) or Add all elements of array nums to the minheap
  for (let num of nums) {
    minHeap.enqueue(num);
  }

  let count = 0;

  // run while loop until heap size is equal or more then 2
  // and first or top element is less then k
  while (minHeap.size() >= 2 && minHeap.front() < k) {
    // dequeue (pop) remove smallest smallest element from the minheap
    const smallest = minHeap.dequeue();
    //remove second smallest smallest element from the minheap
    const secondSmallest = minHeap.dequeue();

    // Add min(x, y) * 2 + max(x, y) as per condition given
    const operation = 2 * smallest + secondSmallest;

    // enqueue (push) or Add the operation result back into the heap
    minHeap.enqueue(operation);

    // increase the operation count
    count++;
  }

  // return answer count
  return count;
};

console.log(minOperations([1, 1, 2, 4, 9], 20));

/*
You are given a 0-indexed integer array nums, and an integer k.

In one operation, you will:

Take the two smallest integers x and y in nums.
Remove x and y from nums.
Add min(x, y) * 2 + max(x, y) anywhere in the array.
Note that you can only apply the described operation if nums contains at least two elements.

Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.
*/

/*
Example 1:

Input: nums = [2,11,10,1,3], k = 10
Output: 2
Explanation: In the first operation, we remove elements 1 and 2, then add 1 * 2 + 2 to nums. nums becomes equal to [4, 11, 10, 3].
In the second operation, we remove elements 3 and 4, then add 3 * 2 + 4 to nums. nums becomes equal to [10, 11, 10].
At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
It can be shown that 2 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.

Example 2:

Input: nums = [1,1,2,4,9], k = 20
Output: 4
Explanation: After one operation, nums becomes equal to [2, 4, 9, 3].
After two operations, nums becomes equal to [7, 4, 9].
After three operations, nums becomes equal to [15, 9].
After four operations, nums becomes equal to [33].
At this stage, all the elements of nums are greater than 20 so we can stop.
It can be shown that 4 is the minimum number of operations needed so that all elements of the array are greater than or equal to 20.
*/

/*
Constraints:

2 <= nums.length <= 2 * 105
1 <= nums[i] <= 109
1 <= k <= 109
The input is generated such that an answer always exists. That is, there exists some sequence of operations after which all elements of the array are greater than or equal to k.
*/
