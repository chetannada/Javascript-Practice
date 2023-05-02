// https://leetcode.com/problems/determine-color-of-a-chessboard-square/

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    let str = "abcdefgh"; // initialize str from a to h
    let number = "12345678"; // initialize number from 1 to 8
    let char = coordinates[0]; // initialize char to first char of coordinates
    let num = coordinates[1]; // initialize num to second char of coordinates
    let indexChar = str.indexOf(char); // find index of char
    let indexNum = number.indexOf(num); // find index of num
    if(indexChar === indexNum) return false; // if indexChar and indexNum same then return false
    if((indexChar + 1) % 2 == 0 && (indexNum + 1) % 2 == 0) return false; // if indexChar and indexNum both are even then return false
   if((indexChar + 1) % 2 != 0 && (indexNum + 1) % 2 != 0) return false; // if indexChar and indexNum both are not even then return false
   return true; // otherwise return true
};

/*
Example 1:
Input: coordinates = "a1"
Output: false
Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.

Example 2:
Input: coordinates = "h3"
Output: true
Explanation: From the chessboard above, the square with coordinates "h3" is white, so return true.

Example 3:
Input: coordinates = "c7"
Output: false
*/