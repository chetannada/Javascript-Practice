// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 19: Interfaces in python
// class Calculator(AdvancedArithmetic):
//     def divisorSum(self, n):
//         return divisor(n)
    
    
// def divisor(n):
//     c = 1
//     s = 0
//     while c <= n:
//         if n % c == 0:
//             s += c
//         c += 1
//     return s

// Forming a Magic Square
function formingMagicSquare(s) {
    // Write your code here
    const possibleMatrices = [
        [[8,1,6],[3,5,7],[4,9,2]],
        [[6,1,8],[7,5,3],[2,9,4]],
        [[4,9,2],[3,5,7],[8,1,6]],
        [[2,9,4],[7,5,3],[6,1,8]],
        [[8,3,4],[1,5,9],[6,7,2]],
        [[4,3,8],[9,5,1],[2,7,6]],
        [[6,7,2],[1,5,9],[8,3,4]],
        [[2,7,6],[9,5,1],[4,3,8]],
]

let maxValue =Number.MAX_VALUE;
for(let m =0; m<8; m++){
    let cost = 0;
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
          
            cost += Math.abs(s[i][j] - possibleMatrices[m][i][j] )
  
        }
    }
    maxValue = Math.min(maxValue , cost)
}
return maxValue
}

