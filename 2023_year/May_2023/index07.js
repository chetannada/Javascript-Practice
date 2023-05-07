// https://leetcode.com/problems/counting-words-with-a-given-prefix/

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let count = 0; // initialize count to zero 
    for(let i=0; i<words.length; i++){ // loop through the every element of array
        if(words[i].includes(pref)){ // if pref includes in words[i]
            for(let j=0; j<pref.length; j++){ // loop through the every character of pref
                if(words[i][j].includes(pref[j])){ // if character of word includes character of pref
                    if(j === pref.length -1){ // if j equal to length of pref.length then increment count
                        count++;
                    }
                }
            }
        }
    }
    return count; // return count
};

/*
Example 1:
Input: words = ["pay","attention","practice","attend"], pref = "at"
Output: 2
Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

Example 2:
Input: words = ["leetcode","win","loops","success"], pref = "code"
Output: 0
Explanation: There are no strings that contain "code" as a prefix.
*/