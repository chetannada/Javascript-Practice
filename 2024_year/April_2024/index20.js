// https://leetcode.com/problems/goal-parser-interpretation/description/

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {

    // initialize str for final answer
    let str = "";

    // run for loop from index 0 to length of command
    for (let i = 0; i < command.length; i++) {

        // if ith character of command is equal to "G" then add "G" to str
        if (command[i] === "G") {
            str += "G";
        } else if (command[i] === "(") {

            // else if ith character of command is equal to "("
            // if i+1 th character of command is equal to ")" then add "o" to str and increment i
            if (command[i + 1] === ")") {
                str += "o";
                i++
            } else if (command[i + 1] === "a") { // else if i+1 th character of command is equal to "a" then add "al" to str and increment i as 3
                str += "al";
                i += 3;
            }
        }
    }

    // return answer str
    return str;
};

/*
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.
*/


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


/*
Constraints:

    1 <= command.length <= 100
    command consists of "G", "()", and/or "(al)" in some order.

*/