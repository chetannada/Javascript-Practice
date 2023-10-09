// https://leetcode.com/problems/goat-latin/description/

/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {

    // convert string sentence to array using split(' ') and separate with space
    let arr = sentence.split(' ');

    // initialize vowel to string 'aeiou'
    let vowel = 'aeiou';

    // initialize empty array result
    let result = [];

    // loop through every element of array arr
    for (let i = 0; i < arr.length; i++) {

        // initialize str to every element of arr
        let str = arr[i];

        // create a new array using new Array() and add i + 1 element in array and fill with 'a' and convert back to string using join('')
        let temp = new Array(i + 1).fill('a').join('');

        // if vowel includes first character of element of array
        if (vowel.includes(arr[i][0].toLowerCase())) {

            // add str, 'ma, and temp and assign to str
            str += ('ma' + temp);
        } else {
            // else add str without first character, add first character of str, 'ma' and temp and assign to str
            str = str.slice(1) + str.charAt(0) + 'ma' + temp;
        }

        // push str and ' ' space in array result
        result.push(str, ' ');
    }

    // convert string from array result using join('') and remove last character from string and return it
    return result.join('').slice(0, -1)
};

/*
You are given a string sentence that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:

If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
For example, the word "apple" becomes "applema".
If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
Return the final sentence representing the conversion from sentence to Goat Latin.
*/


/*
Example 1:

Input: sentence = "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

Example 2:

Input: sentence = "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
*/


/*
Constraints:

1 <= sentence.length <= 150
sentence consists of English letters and spaces.
sentence has no leading or trailing spaces.
All the words in sentence are separated by a single space.
*/