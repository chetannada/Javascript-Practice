// https://leetcode.com/problems/first-letter-to-appear-twice/

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const set = new Set(); // initialize set using Set()
    
    for (let currentLetter of s) { // loop through the every character of string s
        if(set.has(currentLetter)) { // if set contain current letter then return current letter
             return currentLetter;
        }
        set.add(currentLetter); // add current letter to set
    }
};

/*
Given a string s consisting of lowercase English letters, return the first letter to appear twice.

Note:
A letter a appears twice before another letter b if the second occurrence of a is before the second occurrence of b.
s will contain at least one letter that appears twice.
 
*/


/*
Example 1:
Input: s = "abccbaacz"
Output: "c"
Explanation:
The letter 'a' appears on the indexes 0, 5 and 6.
The letter 'b' appears on the indexes 1 and 4.
The letter 'c' appears on the indexes 2, 3 and 7.
The letter 'z' appears on the index 8.
The letter 'c' is the first letter to appear twice, because out of all the letters the index of its second occurrence is the smallest.

Example 2:
Input: s = "abcdd"
Output: "d"
Explanation:
The only letter that appears twice is 'd' so we return 'd'.
 
Constraints:
2 <= s.length <= 100
s consists of lowercase English letters.
s has at least one repeated letter.
*/