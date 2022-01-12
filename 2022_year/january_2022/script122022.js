// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 29: Bitwise AND
function bitwiseAnd(N, K) {
    // Write your code here
    var max = 0;
    for (let b = 1; b <= N; b++) {
        for (let a = 1; a < b; a++) {
            let ab = a&b;
            if (ab < K && ab > max) {
                max = ab;
            }
        }
    }
 
    return max;
}