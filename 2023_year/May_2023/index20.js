// https://leetcode.com/problems/minimum-time-visiting-all-points/

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let arr1 = [], arr2 = [], result = 0; // initialize empty arr1 and arr2 and zero to result
    for(let i=0; i<points.length - 1; i++){ // loop through the every element of points
        let first = Math.abs(points[i][0] - points[i+1][0]); // find first absolute value from first element of points
        arr1.push(first); // add first to arr1
        let second = Math.abs(points[i][1] - points[i+1][1]); // find second absolute value from second element of points
        arr2.push(second); // add second to arr2
    }
    for(let j=0; j<arr1.length; j++){ // loop through the every element of arr1
        let max = Math.max(arr1[j],arr2[j]); // find max number from every element of arr1 and arr2
        result +=max; // add max to result
    }
    return result; // return the result
};

/*
Example 1:
Input: points = [[1,1],[3,4],[-1,0]]
Output: 7
Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
Time from [1,1] to [3,4] = 3 seconds 
Time from [3,4] to [-1,0] = 4 seconds
Total time = 7 seconds

Example 2:
Input: points = [[3,2],[-2,2]]
Output: 5
*/