// https://www.hackerrank.com/domains/algorithms

// Sparse Arrays
function matchingStrings(strings, queries) {
    // Write your code here
    let arr = [];
    for(let i =0; i<queries.length; i++){
        let count = 0;
        for(let j=0; j<strings.length; j++){
            if(queries[i] === strings[j]){
                count++;
            }
        }
        arr.push(count);
    }
    return arr;
}