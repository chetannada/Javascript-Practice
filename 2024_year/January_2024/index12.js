// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    let arr = [];

    // add all horizonatal xi points on array arr
    for (let point of points) {
        arr.push(point[0]);
    }

    // sort the array arr
    arr.sort((a, b) => a - b);

    let maxWidth = 0;

    for (let i = 0; i < arr.length - 1; i++) {

        // check difference between adjacent element and if difference is greater then maxWidth then assign value of diff to maxWidth
        let diff = Math.abs(arr[i] - arr[i + 1]);
        if (diff > maxWidth) maxWidth = diff;
    }

    // return the value maxWidth
    return maxWidth;
};

/*
Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

Note that points on the edge of a vertical area are not considered included in the area.
*/


/*
Example 1:


Input: points = [[8,7],[9,9],[7,4],[9,7]]
Output: 1
Explanation: Both the red and the blue area are optimal.

Example 2:

Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
Output: 3
*/


/*
Constraints:

n == points.length
2 <= n <= 105
points[i].length == 2
0 <= xi, yi <= 109
*/