// https://leetcode.com/problems/valid-square/description/


/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {

    // initialize sides as Set
    const sides = new Set();

    // initialize points as array with four elements p1, p2, p3, p4
    const points = [p1, p2, p3, p4];

    // run for loop from index 0 to 4
    for (let i = 0; i < 4; i++) {

        // run for loop from index 0 to 4
        for (let j = 0; j < 4; j++) {

            // if i not equal to j
            if (i !== j) {

                // add return value of invoking function distance() to set sides
                sides.add(distance(points[i], points[j]));
            }
        }
    }

    // initialize function distance() contains x and y as parameter
    function distance(x, y) {

        // return value (x2 − x1)2 + (y2 − y1)2
        return ((x[0] - y[0]) ** 2 + (x[1] - y[1]) ** 2);
    }

    // if sides does not contain 0 and sides has length equal to 2 then return true otherwise false
    return !sides.has(0) && sides.size === 2;
};


/*
Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.

The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.

A valid square has four equal sides with positive length and four equal angles (90-degree angles).
*/


/*
Example 1:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: true

Example 2:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
Output: false

Example 3:

Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
Output: true
*/


/*
Constraints:

p1.length == p2.length == p3.length == p4.length == 2
-104 <= xi, yi <= 104
*/