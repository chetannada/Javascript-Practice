// https://leetcode.com/problems/palindrome-partitioning/description/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {

    let isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] != str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let result = []

    let iterate = (str, temp) => {
        if (str.length == 0) {
            result.push(temp);
            return;
        }

        for (let i = 1; i <= str.length; i++) {
            let value = str.slice(0, i);
            
            if (isPalindrome(value)) {
                iterate(str.slice(i), [...temp, value]);
            }
        }
    }

    iterate(s, []);

    return result;
};

/*
Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.
*/


/*
Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 
*/


/*
Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.
*/