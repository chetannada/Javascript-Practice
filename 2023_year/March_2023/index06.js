// https://leetcode.com/problems/koko-eating-bananas/description/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // left, right are min and max possible values
   let left=1, right=Math.max(...piles);

   while(left<right){
       // Getting mid value (Binary search)
       let mid = Math.floor((left+right)/2), hours = 0;

       // Count hours for current mid value
       for(let i=0; i<piles.length; i++) {
           hours += Math.ceil(piles[i]/mid);
       }

       // Update values of left,right
       hours>h ? left=mid+1 : right=mid;
   }
   return left;
};

console.log([3,6,7,11], 8); // 4

/*
Input: piles = [3,6,7,11], h = 8
Output: 4
*/