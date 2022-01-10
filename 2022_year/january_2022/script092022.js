// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 26: Nested Logic hackerrank solution javascript
function processData(input) {
    //Enter your code here
    var dates = input.split("\n");
    var a = dates[0].split(" ").map(Number);
    var b = dates[1].split(" ").map(Number);
    var actDate = new Date( a[2] , a[1] , a[0] );
    var expDate = new Date( b[2] , b[1] , b[0] );
    var fine = 0
    
    if ( actDate <= expDate )
        fine = 0;
    else if ( a[1] == b[1]  &&  a[2] == b[2] )
        fine = 15*(a[0] - b[0]);
    else if (a[2] == b[2])
        fine = 500*(a[1] - b[1]);
    else
        fine = 10000;
    
    console.log(fine);
} 