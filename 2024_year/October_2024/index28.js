// https://leetcode.com/problems/group-anagrams/description/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    // initialize map
    let map = new Map();

    // run for of loop for strs
    for (let str of strs) {

        // sort the str and convert back to string
        let sortedStr = [...str].sort().join('');

        // if sortedStr is in map then push str in map
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {

            // else set sortedStr and array of str in map
            map.set(sortedStr, [str]);
        }
    }

    // return array from values of map
    return Array.from(map.values());
};


/*
Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.
*/


/*
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]
*/


/*
Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/