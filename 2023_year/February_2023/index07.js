// https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Sort the array in descending order.
  nums.sort((a, b) => a - b);
  const output = [];
  for (let i = 0; i < nums.length - 2; i++) {
    // we don't want repeats, so skip numbers we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1,
      right = nums.length - 1;

    // Current number at i will be added to the current sum. We will move a left and a right pointer in the subarray of elements to the right of i to try and get a sum that will equal 0
    while (left < right) {
      // Get the current sum with with number at i and numbers at the left and right pointers
      const sum = nums[i] + nums[right] + nums[left];
      // If we get 0 then we add all the numbers to output and move our left and right pointers to look for more numbers that will add to 0 with the current number at i
      if (sum === 0) {
        output.push([nums[i], nums[left], nums[right]]);
        // We will move the pointers until we find a number that is not equal to each pointers current number
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        // If the sum is greater than 0 that means we need smaller numbers to get 0 so we move the right pointer to the left
        right--;
      } else {
        // If the sum is less than 0 that means we need higher numbers to get 0 so we move the left pointer to the right
        left++;
      }
    }
  }

  return output;
};

console.log(threeSum([-1,0,1,2,-1,-4])); // [[-1,-1,2],[-1,0,1]]

/*
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
*/