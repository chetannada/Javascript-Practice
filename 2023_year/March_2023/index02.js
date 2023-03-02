// https://leetcode.com/problems/string-compression/description/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0;
  let j = 0;
  while (j < chars.length) {
    let count = 0;
    let curr = chars[j];
    while (j < chars.length && chars[j] === curr) {
      j++;
      count++;
    }
    chars[i++] = curr;
    if (count > 1) {
      for (let digit of count.toString()) {
        chars[i++] = digit;
      }
    }
  }
  return i;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6

/*
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
*/
