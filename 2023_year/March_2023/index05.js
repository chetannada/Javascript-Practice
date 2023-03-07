// https://leetcode.com/problems/minimum-time-to-complete-trips/

/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
    let low = 1, high = Number.MAX_SAFE_INTEGER, ans = 0;
    
    while(low <= high) {
        let mid = Math.floor(low + (high - low) / 2); // to prevent overflow
        
        if(isPossible(time, mid, totalTrips)) {
            ans = mid
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
};

function isPossible(arr, mid, totalTrips) {
    let trips = 0;
    for (let i = 0; i < arr.length; i++) {
      trips += Math.floor(mid / arr[i]);
    }
    return trips >= totalTrips;
};

console.log([1,2,3],5); // 3

/*
Input: time = [1,2,3], totalTrips = 5
Output: 3
Explanation:
- At time t = 1, the number of trips completed by each bus are [1,0,0]. 
  The total number of trips completed is 1 + 0 + 0 = 1.
- At time t = 2, the number of trips completed by each bus are [2,1,0]. 
  The total number of trips completed is 2 + 1 + 0 = 3.
- At time t = 3, the number of trips completed by each bus are [3,1,1]. 
  The total number of trips completed is 3 + 1 + 1 = 5.
So the minimum time needed for all buses to complete at least 5 trips is 3.
*/