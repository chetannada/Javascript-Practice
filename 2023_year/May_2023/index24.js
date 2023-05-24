// https://leetcode.com/problems/number-of-senior-citizens/

/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0; // initialize count to zero
    for(let i = 0; i < details.length; i++){ // loop through the every element of array 
        let age = details[i].at(-4) + details[i].at(-3); // find age from last 3rd and 4th character
        if(age > 60) count++; // if age is greater than 60 then increment count
    }
    return count; // return count
};

/*
Example 1:
Input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
Output: 2
Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.

Example 2:
Input: details = ["1313579440F2036","2921522980M5644"]
Output: 0
Explanation: None of the passengers are older than 60.
*/