// https://leetcode.com/problems/different-ways-to-add-parentheses/

/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
    const result = [];
  
    for (let i = 0; i < expression.length; i++) {
        
      let currentString = expression[i];
  
      if (
        currentString === "+" ||
        currentString === "-" ||
        currentString === "*"
      ) {
        let left = diffWaysToCompute(expression.substring(0, i));
        let right = diffWaysToCompute(expression.substring(i + 1));
  
        left.forEach((leftElement) => {
          right.forEach((rightElement) => {
            if (currentString === "+") {
              result.push(leftElement + rightElement);
            }
            if (currentString === "-") {
              result.push(leftElement - rightElement);
            }
            if (currentString === "*") {
              result.push(leftElement * rightElement);
            }
          });
        });
      }
    }
  
  
    if (result.length === 0) {
      result.push(parseInt(expression));
    }
      
    return result;
  };

  
/*
Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104.
*/
 
/*
Example 1:

Input: expression = "2-1-1"
Output: [0,2]
Explanation:
((2-1)-1) = 0 
(2-(1-1)) = 2

Example 2:

Input: expression = "2*3-4*5"
Output: [-34,-14,-10,-10,10]
Explanation:
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10
*/ 

/*
Constraints:

1 <= expression.length <= 20
expression consists of digits and the operator '+', '-', and '*'.
All the integer values in the input expression are in the range [0, 99].
*/