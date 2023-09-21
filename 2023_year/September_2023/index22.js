// https://leetcode.com/problems/points-that-intersect-with-cars/description/

/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {

    // initialize empty array intersect
    let intersect = [];

    // loop through the every element of array nums
    for (let i = 0; i < nums.length; i++) {

        // loop through the 0th and 1st element of the array nums[i]
        for (let j = nums[i][0]; j <= nums[i][1]; j++) {

            // if j is not includes in array intersect then push j in array intersect
            if (!intersect.includes(j)) {
                intersect.push(j);
            }
        }
    }

    // return the length of array intersect
    return intersect.length;
};

/*
You are given a 0-indexed 2D integer array nums representing the coordinates of the cars parking on a number line. For any index i, nums[i] = [starti, endi] where starti is the starting point of the ith car and endi is the ending point of the ith car.

Return the number of integer points on the line that are covered with any part of a car.
*/


/*
Example 1:

Input: nums = [[3,6],[1,5],[4,7]]
Output: 7
Explanation: All the points from 1 to 7 intersect at least one car, therefore the answer would be 7.

Example 2:

Input: nums = [[1,3],[5,8]]
Output: 7
Explanation: Points intersecting at least one car are 1, 2, 3, 5, 6, 7, 8. There are a total of 7 points, therefore the answer would be 7.
*/


/*
Constraints:

1 <= nums.length <= 100
nums[i].length == 2
1 <= starti <= endi <= 100
*/