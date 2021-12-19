// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Number Line Jumps
function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    for(let i = 1; i<=10000; i++){
        if(x1 + i * v1 === x2  + i *v2){
            return "YES";
        }
    }
    return "NO";
}
console.log(kangaroo(0, 3, 4, 2));

// Between Two Sets
function getTotalX(a, b) {
    // Write your code here
    let result = 0;
    let RemoveArrayA = a.splice(1, a.length); // remove elements from array a but not a[0]

    for(let i = 1; a[0] * i <= b[0]; i++){
        if(RemoveArrayA.every(item => (a[0] * i) % item === 0) && b.every(item => item % (a[0] * i) === 0)){
            result++
        }
    }
    return result;
}
console.log(getTotalX([2, 4],[16, 32, 96]));

// Day 5: Loops
function main(n) {
    for(let i=1; i<=10; i++){
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
main(4);

