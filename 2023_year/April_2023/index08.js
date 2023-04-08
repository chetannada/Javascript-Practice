// https://leetcode.com/problems/defanging-an-ip-address/

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    // Method 1
    // first convert address to an array using split() then using array.map() to convert "." to "[.]" and then convert back to string from an array using join()
    // let result = address.split("").map(period => period === "." ? "[.]" : period).join("");
    // return result;
    
    // Method 2 using replaceAll to replace "." with "[.]"
    return address.replaceAll(".", "[.]");
};

/*
Example 1:
Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"


Example 2:
Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
*/