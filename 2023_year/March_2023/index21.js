// https://leetcode.com/problems/shuffle-string/description/

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let result = new Array(indices.length); // initialize an result array with indices.length element
    let arr = s.split(""); // convert s string to an array
    for(let i= 0; i<indices.length; i++){ // loop throhg the element of an array
        result.splice(indices[i],1,arr[i]); // add element using splice
    }
    return result.join(""); // covert array to string and return
};

/*
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.


Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.
*/