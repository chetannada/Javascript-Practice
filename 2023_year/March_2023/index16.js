// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies); // Find max number from array
    let result = []; // initialize empty array to return result
    for(let i=0; i<candies.length; i++){
        if(candies[i] + extraCandies >= max){ // values greater than or equal to max then push true to array neighter false
            result.push(true);
        }else{
            result.push(false);
        }
    }
    return result; // return boolean array.
};

console.log(kidsWithCandies([2,3,5,1,3],3)); // [true,true,true,false,true] 

/*
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
*/