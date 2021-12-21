// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 7: Arrays
function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    let reverseArray =[];
    for(let i=arr.length - 1; i>=0; i--){
        reverseArray.push(arr[i]);
    }
    console.log(reverseArray.join(' '));
}

// Divisible Sum Pairs
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    for(let i=0; i<n; i++){
        for(let j=1; j<n; j++){
            if(i<j && (ar[i] + ar[j]) % k === 0){
                count++;
            }
        }
    }
    return count;
}

// Migratory Birds
function migratoryBirds(arr) {
    let map = {}, maxCount = 0, output = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]] += 1;
        }
        if (map[arr[i]] > maxCount) {
            maxCount = map[arr[i]];
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (map[arr[j]] === maxCount) {
            output.push(arr[j]);
        }
    }
    return Math.min(...output);
}
console.log(migratoryBirds([1, 3, 4, 5, 4, 3, 2, 1, 3,4]))