// https://leetcode.com/problems/kth-missing-positive-number/submissions/910255293/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let num = 1;
  let index = 0;
  while (k > 0) {
    arr[index] === num ? index++ : k--;
    num++;
  }
  return num - 1;
};

console.log(findKthPositive([2,3,4,7,11], 5)); // 9

/*
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
*/