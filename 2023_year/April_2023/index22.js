// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = []; // initialize an empty array stack
    let max = 0; // initialize max to zero
    
    for (let i = 0; i < s.length; i++) { // loop through the string length
        // If we have an opening parenthesis, then add to the stack
        if (s[i] == "(") {
            stack.push(s[i]);
            
            // Check if our current stack size exceeds the greatest it has been in the past
            if (stack.length > max)
                max = stack.length;
        
        // If we have a closing parenthesis, remove from stack
        } else if (s[i] == ")")
            stack.pop();
    }
    // return the greatest size the stack has been
    return max;
};

/*
Example 1:
Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.

Example 2:
Input: s = "(1)+((2))+(((3)))"
Output: 3
*/