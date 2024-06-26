// https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {

    // initialize rows as length of grid
    const rows = grid.length;

    // initialize cols as length of grid[0]
    const cols = grid[0].length;

    // initialize top as rows, bottom as 0, left as cols and right as 0
    let top = rows;
    let bottom = 0;
    let left = cols;
    let right = 0;

    // run for loop from index 0 to rows
    for (let i = 0; i < rows; i++) {

        // run for loop from index 0 to cols
        for (let j = 0; j < cols; j++) {

            // if grid[i][j] is eqaul to 1
            if (grid[i][j] === 1) {

                // calculate minimum value between top and i and assign to top
                top = Math.min(top, i);

                // calculate maximum value between bottom and i and assign to bottom
                bottom = Math.max(bottom, i);

                // calculate minimum value between left and j and assign to left
                left = Math.min(left, j);

                // calculate maximum value between right and j and assign to right
                right = Math.max(right, j);
            }
        }
    }

    // calculate height by subtract bottom with top and add 1
    let height = bottom - top + 1;

    // calculate width by subtract right with left and add 1
    let width = right - left + 1;

    // return area of rectangle
    return height * width;
};


/*
You are given a 2D binary array grid. Find a rectangle with horizontal and vertical sides with the smallest area, such that all the 1's in grid lie inside this rectangle.

Return the minimum possible area of the rectangle.
*/


/*
Example 1:

Input: grid = [[0,1,0],[1,0,1]]

Output: 6

Explanation:



The smallest rectangle has a height of 2 and a width of 3, so it has an area of 2 * 3 = 6.

Example 2:

Input: grid = [[1,0],[0,0]]

Output: 1

Explanation:



The smallest rectangle has both height and width 1, so its area is 1 * 1 = 1.
*/


/*
Constraints:

1 <= grid.length, grid[i].length <= 1000
grid[i][j] is either 0 or 1.
The input is generated such that there is at least one 1 in grid.
*/