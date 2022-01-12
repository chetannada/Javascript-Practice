// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 28: RegEx, Patterns, and Intro to Databases
function main() {
    const N = parseInt(readLine().trim(), 10);
    let pattern = new RegExp("@gmail.com");
    let names = [];
    
    for (let NItr = 0; NItr < N; NItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const firstName = firstMultipleInput[0];

        const emailID = firstMultipleInput[1];
        
        if(pattern.test(emailID)){
            names.push(firstName);
        }
    }
    names.sort().forEach(name => {
        console.log(name);
    });
}