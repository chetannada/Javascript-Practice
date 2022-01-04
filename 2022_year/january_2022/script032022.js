// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// union of two arrays javascript
const union = (a, b) => Array.from(new Set([...a, ...b]));
union([1, 2, 3], [4, 3, 2]); // [1, 2, 3, 4]

// head of an array.
const head = arr => (arr && arr.length ? arr[0] : undefined);
head([1, 2, 3]); // 1
head([]); // undefined
head(null); // undefined
head(undefined); // undefined

// array includes a value from another array in JavaScript
const includesAny = (arr, values) => arr.some(v => values.includes(v));
includesAny([1, 2, 3, 4], [2, 9]); // true
includesAny([1, 2, 3, 4], [8, 9]); // false

// Day 20: Sorting
function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    let swap =[];
    let numberOfSwap = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<n-1; j++){
            if(a[j]> a[j+1]){
                [a[j + 1], a[j]] = [a[j], a[j + 1]];
                numberOfSwap++;
            }
        }
        if(numberOfSwap === 0){
            break;
        }
    }
    console.log(`Array is sorted in ${numberOfSwap} swaps.\nFirst Element: ${a[0]}\nLast Element: ${a[a.length - 1]}`)
}