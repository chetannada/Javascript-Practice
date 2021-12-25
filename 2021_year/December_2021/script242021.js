// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 10: Binary Numbers
function main(n) {
    
    const arr = n.toString(2).split("0");
    const arrlengths = arr.map(x => x.length);
    const maxLength = Math.max(...arrlengths);
    console.log(maxLength);
}
main(125);