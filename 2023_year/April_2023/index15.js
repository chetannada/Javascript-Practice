// https://leetcode.com/problems/sorting-the-sentence/

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const numArr = s.match(/\d+/g); // find number from string using String.match()
    const strArr = s.match(/\D+/g); // find string from string using String.match()
    let result = new Array(numArr.length).fill(0).map((item, index)=> item = index + 1); // initialize an array with numArr length using Array prototype and fill and map()

    for(let i=0; i<numArr.length; i++){ // loop through the every element of an array
        result.splice(+numArr[i]-1, 1, strArr[i].replaceAll(" ", "")) // change the element according to condition using array.splice()
    }
    return result.join(" "); // return string from array using join()
};

/*
Example 1:
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.

Example 2:
Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
*/