// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 16: Exceptions - String to Integer
function main() {
    const S = readLine();
    try{
        let num = parseInt(S) || error;
        console.log(num);
    }
    catch(error){
        console.log("Bad String");
    }
}

// Cats and a Mouse
function catAndMouse(x, y, z) {
    let catADist = Math.abs(x -z);
    let catBDist = Math.abs(y - z);
    if(catADist > catBDist){
        return "Cat B";
    }else if(catADist < catBDist){
        return "Cat A";
    }else{
        return "Mouse C";
    }
}