// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = []; // initialize an empty arr
    for(let i=1; i<=n; i++){ // loop through the n
        if(n === 1) return [0]; // if n equal to 1 then return array of 0
        if(n % 2 === 0){ // if n is even
            if(i % 2 !== 0){ // if i is not even then push -i into array arr
            arr.push(-i);
            }else{ // else push i - 1  into array arr
                arr.push(i - 1);
            }
        }else{ // else if n is odd
            if(i === n){ // if i eqaul to n then push 0 to arr
                arr.push(0);
            }else if(i % 2 !== 0){ // else if i is not even then push -i into array arr
                arr.push(-i);
            }else if(i % 2 === 0){ // else if i is even push i - 1  into array arr
                arr.push(i - 1);
            }
        }
    }
    return arr; // return the array arr
};

/*
Given an integer n, return any array containing n unique integers such that they add up to 0.
*/


/*
Example 1:
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].

Example 2:
Input: n = 3
Output: [-1,0,1]

Example 3:
Input: n = 1
Output: [0]
 
Constraints:
1 <= n <= 1000
*/