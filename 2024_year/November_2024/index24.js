// https://leetcode.com/problems/rectangle-area/description/


/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {

    // initialize area1Length as absolute value between ax1 and ax2
    let area1Length = Math.abs(ax1 - ax2);

    // initialize area1Width as absolute value between ay1 and ay2
    let area1Width = Math.abs(ay1 - ay2);

    // initialize area2Length as absolute value between bx1 and bx2
    let area2Length = Math.abs(bx1 - bx2);

    // initialize area2Width as absolute value between by1 and by2
    let area2Width = Math.abs(by1 - by2);

    // find area of firstRectArea
    let firstRectArea = area1Length * area1Width;

    // find area of secondRectArea
    let secondRectArea = area2Length * area2Width;

    // find co-ordinates of overalapping area
    let cx1 = Math.max(ax1, bx1);
    let cx2 = Math.min(ax2, bx2);
    let cy1 = Math.max(ay1, by1);
    let cy2 = Math.min(ay2, by2);

    // initialize olAreaLength as maximum value between 0 and cx2 - cx1
    let olAreaLength = Math.max(0, cx2 - cx1);

    // initialize olAreaWidth as maximum value between 0 and cy2 - cy1
    let olAreaWidth = Math.max(0, cy2 - cy1);

    // find area of overlappingArea
    let overlappingArea = olAreaLength * olAreaWidth;

    // initialize finalArea as sum of firstRectArea and secondRectArea and subtract overlappingArea
    let finalArea = firstRectArea + secondRectArea - overlappingArea;

    // return answer finalArea
    return finalArea;
};




/*
Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).

The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).

*/


/*

Example 1:

Rectangle Area
Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
Output: 45

Example 2:

Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2
Output: 16
*/


/*
Constraints:

-104 <= ax1 <= ax2 <= 104
-104 <= ay1 <= ay2 <= 104
-104 <= bx1 <= bx2 <= 104
-104 <= by1 <= by2 <= 104

*/