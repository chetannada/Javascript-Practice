// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 11: 2D Arrays
function main() {

    let arr = Array(6);
    
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    /* row i, column j
     * 1 1 1
     * 1 1 1
     * 1 1 1 
     */
    
    let sumArray = [];
    let max = 0;
    let index = 0;
    for(let i=0; i<4; i++){
        for(let j =0; j<4; j++){
            sumArray[index] = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            index++
        }
    }
    max = Math.max(...sumArray);
    return console.log(max);
}