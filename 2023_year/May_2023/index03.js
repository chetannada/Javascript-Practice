// https://leetcode.com/problems/determine-if-string-halves-are-alike/

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowel = "aeiou"; // initialize vowel to "aeiou"
    let str = s.toLowerCase(); // convert s string to lowerCase
    let a = str.slice(0, str.length/2); // copy half string and store into a
    let b = str.slice(str.length/2); // copy another half string and store into b

    let countA = 0; // initialize countA to zero
    let countB = 0; // initialize countB to zero
    for(let i=0; i<a.length; i++){ // loop through the every element of a 
        if(vowel.includes(a[i])){ // check if every character of a includes in vowel
            countA++; // then increment countA
        }
        if(vowel.includes(b[i])){ // check if every character of b includes in vowel
            countB++; // then increment countB
        }
    }
    if(countA === countB){ // if countA is equal to countB
        return true; // then return true
    }else{
        return false; // otherwise return false
    }
};

/*
Example 1:
Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

Example 2:
Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
*/