// https://leetcode.com/submissions/detail/1013077754/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let keyboardChar = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]; // initialize keyboardChar array which contains every characters row wise

    let result = []; // initialize empty array result 

    for (let i = 0; i < words.length; i++) { // loop through the every element of array words
        let lowerCaseWord = words[i].toLowerCase(); // initialize lowerCaseWord and convert every element of array words in lowercase

        for (let j = 0; j < keyboardChar.length; j++) { // loop through the every element of array keyboardChar

            if (keyboardChar[j].includes(lowerCaseWord[0])) { // if first character of lowerCaseWord includes in every element of keyboardChar

                for (let k = 0; k < lowerCaseWord.length; k++) {// loop through the every element of string lowerCaseWord

                    if (keyboardChar[j].includes(lowerCaseWord[k])) { // if every character of string lowerCaseWord includes in keyboardChar
                        if (k == lowerCaseWord.length - 1) { // if k is equal to length -1 of lowerCaseWord
                            result.push(words[i]); // push current element of words in result
                        }
                    } else { // else break the loop
                        break;
                    }
                }
            }
        }
    }

    return result; // return the result
};

/*
Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".
*/

/*
Example 1:
Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]

Example 2:
Input: words = ["omk"]
Output: []

Example 3:
Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 
Constraints:
1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase). 
*/