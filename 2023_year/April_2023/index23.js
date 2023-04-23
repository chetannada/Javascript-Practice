// https://leetcode.com/problems/count-asterisks/

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let count = 0;  // initialize count to zero
    let varBar = 0; // initialize varBar to zero
    for(let i=0; i<s.length; i++){ // loop through string length
        if(s[i] === "*"){ // if every character of string is "*"
            if(varBar === 0){ // if varBar equal to zero then count
                count++;
            }
        }else if(s[i] === "|"){ // else if every character of string is "|"
            if(varBar >= 1){ // if varBar is greater than or eqaul to 1 then decrement varBar
                varBar--;
            }else{ // else increment varBar
                varBar++;
            }
            
        }
    }
    return count; // return the final count
};

/*
Example 1:
Input: s = "l|*e*et|c**o|*de|"
Output: 2
Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
The characters between the first and second '|' are excluded from the answer.
Also, the characters between the third and fourth '|' are excluded from the answer.
There are 2 asterisks considered. Therefore, we return 2.

Example 2:
Input: s = "iamprogrammer"
Output: 0
Explanation: In this example, there are no asterisks in s. Therefore, we return 0.

Example 3:
Input: s = "yo|uar|e**|b|e***au|tifu|l"
Output: 5
Explanation: The considered characters are underlined: "yo|uar|e**|b|e***au|tifu|l". There are 5 asterisks considered. Therefore, we return 5.
*/