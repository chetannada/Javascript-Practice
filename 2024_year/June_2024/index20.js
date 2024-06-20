// https://leetcode.com/problems/encode-and-decode-tinyurl/description/


// initialize Empty Hashmap for storing tinyurl value
let map = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {

    // encode the tinyurl using Math.floor() and Math.random()
    let encodedUrl = `http://tinyurl.com/${Math.floor(Math.random() * 1000000)}`

    // set the encodedUrl as key and longUrl as value in map
    map.set(encodedUrl, longUrl);

    // return encodeUrl 
    return encodedUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {

    // return the map value for shortUrl
    return map.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

/*
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.

There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

Implement the Solution class:

Solution() Initializes the object of the system.
String encode(String longUrl) Returns a tiny URL for the given longUrl.
String decode(String shortUrl) Returns the original long URL for the given shortUrl. It is guaranteed that the given shortUrl was encoded by the same object.
*/


/*
Example 1:

Input: url = "https://leetcode.com/problems/design-tinyurl"
Output: "https://leetcode.com/problems/design-tinyurl"

Explanation:
Solution obj = new Solution();
string tiny = obj.encode(url); // returns the encoded tiny url.
string ans = obj.decode(tiny); // returns the original url after decoding it.
*/


/*
Constraints:

1 <= url.length <= 104
url is guranteed to be a valid URL.
*/