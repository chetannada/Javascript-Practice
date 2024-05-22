// https://leetcode.com/problems/destination-city/description/

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {

    // initialize hashmap to count the frequency of city and arr for storing unique city names
    let map = new Map(), arr = [], answer = "";

    // run for of loop of paths
    for (let path of paths) {

        // set 0th and 1th value of path in map and increment the value
        map.set(path[0], (map.get(path[0]) || 0) + 1);
        map.set(path[1], (map.get(path[1]) || 0) + 1);
    }

    // run for of loop for map.entries()
    for (let [key, value] of map.entries()) {

        // if value is equal to 1 then push key to arr
        if (value === 1) {
            arr.push(key);
        }
    }

    // run for of loop for paths
    for (let path of paths) {

        // if arr includes 1th value of path then assign that value to answer
        if (arr.includes(path[1])) {
            answer = path[1];
        }
    }

    // return final Destination City
    return answer;
};

/*
You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.
*/


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


/*
Constraints:

1 <= paths.length <= 100
paths[i].length == 2
1 <= cityAi.length, cityBi.length <= 10
cityAi != cityBi
All strings consist of lowercase and uppercase English letters and the space character.
*/