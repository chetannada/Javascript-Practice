// 10 days of Javascript Tutorial in Hackerrank

// Day 5: Arrow Functions
const modifyArray = (nums) => {
    const result = [];
    for(let i = 0; i<nums.length; i++){
        if(nums[i] % 2 === 0){
            result.push(nums[i] * 2);
        }else {
            result.push(nums[i] * 3)
        }
    }
    return result;
}
console.log(modifyArray([1,2,3,4,5]));

// Day 6: Bitwise Operators
// problem https://www.hackerrank.com/challenges/js10-bitwise/problem?isFullScreen=true
function getMaxLessThanK(n,k){
    let max = 0;
    for(let i =1; i<=n; i++){
        for(let j =i +1; j<=n; j++){
            if((i & j) > max && (i & j) < k){
                max = (i & j);
            }
    }
}
    return max;
}
console.log(getMaxLessThanK(8,5));

// Day 6: JavaScript Dates
// find thhe day using format MM/DD/YYYY
function getDayName(dateString) {
    let dayName;
    // Write your code here
    const days= [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    let dayNumber = new Date(dateString).getUTCDay();
    return dayName = days[dayNumber];
}
console.log(getDayName("12/07/2021"));