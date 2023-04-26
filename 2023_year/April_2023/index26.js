// https://leetcode.com/problems/remove-outermost-parentheses/

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let count = 0; // initialize count to zero
    let max = 0; // initialize max to zero
    let arr = []; // initialize empty array;
    let result = ""; // initialize empty string
    for(let i=0; i<s.length; i++){ // loop through the every character of string
        if(s[i] === "("){ // if character of string is "(" then count++ and store this in arr
            count++;
            arr.push(s[i]);
            if(count > max){ // if count is greater than max then assign count to max 
                max = count;
            }
        }else if(s[i] === ")"){ // else if character of string is ")" then count-- and strore this in arr
            count--;
            arr.push(s[i]);
        }
        if(count === 0){ // if count be zero than remove first last element from an array and add it in to result
            arr.pop();
            arr.shift();
            result += arr.join("");
            arr = [];
            max = 0;
        }
    }
    return result; // return result
};

/*
Example 1:
Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:
Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:
Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
*/