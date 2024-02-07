// https://leetcode.com/problems/group-anagrams/description/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {

    // initialize map
    let map = new Map();

    // loop through the every element of array strs
    for (let str of strs) {

        // sort the str
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
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/


/*
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
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