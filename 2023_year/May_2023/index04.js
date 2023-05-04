// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if(n % 2 === 0){ // if n is even then return odd "l" and one "c"
        return new Array(n-1).fill("l").join("") + "c";
    }else{ // else return "l" only
        return new Array(n).fill("l").join("");
    }
};

/*
Example 1:
Input: n = 4
Output: "pppz"
Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".

Example 2:
Input: n = 2
Output: "xy"
Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".

Example 3:
Input: n = 7
Output: "holasss"
*/