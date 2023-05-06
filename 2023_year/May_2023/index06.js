// https://leetcode.com/problems/destination-city/

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let setContainer = new Set();
     for(let path of paths){
         setContainer.add(path[0]);
     }
     for(let path of paths){
         if(!setContainer.has(path[1])){
             return path[1];
         }
     }
 };

/*
Example 1:
Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

Example 2:
Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are: 
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
Clearly the destination city is "A".

Example 3:
Input: paths = [["A","Z"]]
Output: "Z"
*/