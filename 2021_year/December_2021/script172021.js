// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 3: Intro to Conditional Statements
function main(N) {
    if(N % 2 !== 0){
        console.log("Weird");
    }else if((N % 2 === 0) && (N>=2 && N<=5)){
        console.log("Not Weird");
    }else if((N % 2 === 0) && (N>=6 && N<=20)){
        console.log("Weird");
    }else if((N % 2 === 0) && (N>20)){
        console.log("Not Weird");
    }
}
main(4);