// https://leetcode.com/problems/flipping-an-image/description/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {

    // initialize function flip(arr) with arr as argument
    function flip(arr) {

        // reverse the arr
        let rev = arr.reverse();

        // run the for loop from index 0 to length of rev
        for (let i = 0; i < rev.length; i++) {

            // if current element of rev is equal to 0 then make current element to 1 else 0
            if (rev[i] === 0) {
                rev[i] = 1;
            } else {
                rev[i] = 0;
            }
        }

        // return rev
        return rev;
    }

    // run for loop from index 0 to length of image
    for (let j = 0; j < image.length; j++) {

        // flip the current elemnent of image and assign back to it
        image[j] = flip(image[j])
    }

    // return image
    return image;
};

/*
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].
*/


/*
Example 1:

Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

Example 2:

Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
*/


/*
Constraints:

n == image.length
n == image[i].length
1 <= n <= 20
images[i][j] is either 0 or 1.
*/