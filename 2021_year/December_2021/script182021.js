// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Grading Students
// Algorithms challenge
// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true
function gradingStudents(grades) {
    // Write your code here
    let gradesFinal = [];
    for(let i=0; i<grades.length; i++){
        if(grades[i]< 38){
            gradesFinal.push(grades[i]);
        }else if(((Math.ceil(grades[i]/5)*5) - grades[i]) < 3){
            gradesFinal.push(Math.ceil(grades[i]/5)*5);
        }else if(((Math.ceil(grades[i]/5)*5) - grades[i]) >= 3){
            gradesFinal.push(grades[i]);
        }
    }
    return gradesFinal;
}
console.log(gradingStudents([73, 67, 38, 33]));

// Apple and Orange
// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesCount = [];
    let orangesCount = [];
    let appleAtSamsHouse = 0;
    let orangeAtSamsHouse = 0;
    apples.map((x) => {
        applesCount.push(x + a);
    })
    oranges.map((x) => {
        orangesCount.push(x + b);
    })
    applesCount.map((x) => {
        if(x >=s && x <= t){
            appleAtSamsHouse++;
        }
    })
    orangesCount.map((x) => {
        if(x >=s && x <= t){
            orangeAtSamsHouse++;
        }
    })
    console.log(appleAtSamsHouse);
    console.log(orangeAtSamsHouse);
}
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [3, -6, -4]);

// Day 4: Class vs. Instance
function Person(initialAge){
    // Add some more code to run some checks on initialAge
            if(initialAge > 0){
                this.age = initialAge;
            }else if(initialAge < 0){
                this.age = 0;
                console.log('Age is not valid, setting age to 0.');
            }
            
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    if(this.age < 13){
        console.log("You are young.");
    }else if(this.age >= 13 && this.age < 18){
        console.log("You are a teenager.")
    }else{
        console.log("You are old.")
    }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
          this.age++;
   };
}