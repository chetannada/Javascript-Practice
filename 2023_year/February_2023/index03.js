// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let map = {};
    for(let c of p){
      map[c] =  (map[c] || 0) + 1;
    }
    console.log(map);
    let l = 0, r = 0, count = 0, res = [];
    while(r < s.length){
      if(map[s[r]] > 0) count++;
      map[s[r]]--;
      r++;
      if(count === p.length) res.push(l);
      if(r - l == p.length){
        if(map[s[l]] >= 0) count--;
        map[s[l]]++;
        l++;
      }
    }
    return res;
};

console.log(findAnagrams("cbaebabacd", "abc")); // [ 0, 6 ]

/*
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
*/