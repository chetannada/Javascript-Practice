// https://leetcode.com/problems/goal-parser-interpretation/

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    // replace "()" with "o"  and "(al)" with "al" using string.replaceAll()
    return command.replaceAll("()", "o").replaceAll("(al)", "al"); 
};

/*
Example 1:
Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

Example 2:
Input: command = "G()()()()(al)"
Output: "Gooooal"

Example 3:
Input: command = "(al)G(al)()()G"
Output: "alGalooG"
*/