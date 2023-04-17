// https://leetcode.com/problems/flipping-an-image/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let result = []; // initialize an empty result array
    for(let item of image){ // loop through item of an image
        let arr = []; // initialize empty array
        let newItem = item.reverse(); // reverse the element of an item
        for(let element of newItem){ // loop through the element of newItem
            if(element === 1) arr.push(0); // if element is 1 then push 0
            else arr.push(1); // else push 1
        }
        result.push(arr); // push arr in result array
    }
    return result; // return the array of array result
};

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