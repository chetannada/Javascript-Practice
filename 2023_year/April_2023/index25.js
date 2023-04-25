// https://leetcode.com/problems/rings-and-rods/

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let count = 0; // initialize count to zero
    let hash = {}; // initialize empty object
    for(let i=0; i<rings.length; i+=2){ // loop through the character of rings
        let pair = rings[i] + rings[i+1]; // find pair from rings
        let rod = rings[i+1]; // find rod from rings
        if(!hash[pair]){ // if pair is not in hash
            hash[pair] = 1; // then set pair of hash to 1
            if(hash["R" + rod] && hash["G" + rod] && hash["B" + rod]){ // if R, G and B is there in rod then count
                count++;
            }
        }
    }
    return count; // return count
};

/*
Example 1:
Input: rings = "B0B6G0R6R0R6G9"
Output: 1
Explanation: 
- The rod labeled 0 holds 3 rings with all colors: red, green, and blue.
- The rod labeled 6 holds 3 rings, but it only has red and blue.
- The rod labeled 9 holds only a green ring.
Thus, the number of rods with all three colors is 1.

Example 2:
Input: rings = "B0R0G0R9R0B0G0"
Output: 1
Explanation: 
- The rod labeled 0 holds 6 rings with all colors: red, green, and blue.
- The rod labeled 9 holds only a red ring.
Thus, the number of rods with all three colors is 1.

Example 3:
Input: rings = "G4"
Output: 0
Explanation: 
Only one ring is given. Thus, no rods have all three colors.
*/