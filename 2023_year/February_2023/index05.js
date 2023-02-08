// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longestString="";

    for(let i=0; i<s.length; i++){
        for(let j=0; j<2; j++){
            let left = i;
            let right = left + j;
            while(s[left] && s[left] === s[right]){
                left--;
                right++;
            }
            if(right-left-1 > longestString.length){
                longestString=s.slice(left + 1, right);
            }
        }
    }
    return longestString;
};

console.log(longestPalindrome("babad")) // "bab"
/*
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
*/