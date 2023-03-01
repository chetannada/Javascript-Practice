// https://leetcode.com/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var merge = (arr1,arr2) => {
    let res =[];
    let i=0, j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] <= arr2[j]){
            res.push(arr1[i]);
            i++;
        }else{
            res.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        res.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        res.push(arr2[j]);
        j++;
    }
    return res;
}

var sortArray = function(nums) {
    if(nums.length <= 1) return nums;

    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));

    return merge(left,right);
}

console.log(sortArray([5,2,3,1])); // [1,2,3,5]

/*
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
*/