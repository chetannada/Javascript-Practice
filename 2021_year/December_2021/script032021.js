// 10 days of Javascript Tutorial in Hackerrank

// Day 7: Regular Expressions I
// string Begins and ends with any vowel
function regexVar(string) {
    let re = /^([aeiou]).*\1$/;
    let testRegex = re.test(string);
    return testRegex;
}
console.log(regexVar('abcda'));

//Variables scope
function getData(){
    if(true){
        var i = 2;
        console.log(i);
    }
    console.log('access the variable outside if condtion ' + i);
}
getData();

function getdata2(){
    if(true){
        let j = 2;
        console.log(j);
    }
    // console.log('cant access the variable outside if condtion ' + j);
}
getdata2();

function getdata3(){
    if(true){
        const k = 3;
        console.log(k);
    }
    // console.log('cant access the variable outside if condtion ' + k);
}
getdata3();