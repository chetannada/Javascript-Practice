// https://leetcode.com/problems/di-string-match/

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let countI = -1; // initialize to countI to -1
    let countD = s.length + 1; // initialize to countD to string length + 1
    let arr = []; // initialize an empty array
    for(let i=0; i<s.length; i++){ // loop through the every character of string
        if(s[i] === "I"){ // if character of string is I then increment countI and push countI into arr
            countI++;
            arr.push(countI);
        }else if(s[i] === "D"){ // else if character of string is D then decrement countD and push countD into arr
            countD--;
            arr.push(countD);
        }
        if(i === s.length - 1){ // if i is last index
            if(s[i] === "I"){ // last character is I then increment countI and push into arr
                countI++;
                arr.push(countI);
            }else{ // else decrement countD and push into arr
                countD--;
                arr.push(countD);
            }
        }
    }
    return arr; // return arr
};

/*
Example 1:
Input: s = "IDID"
Output: [0,4,1,3,2]

Example 2:
Input: s = "III"
Output: [0,1,2,3]

Example 3:
Input: s = "DDI"
Output: [3,2,0,1]
*/