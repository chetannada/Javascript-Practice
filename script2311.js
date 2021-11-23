// 10 days of Javascript Tutorial in Hackerrank

// Day 2: Conditional Statements: If-Else
function getGrade(score) {
  let grade;
  // Write your code here
  if (score <= 5) {
    grade = "F";
  } else if (score <= 10) {
    grade = "E";
  } else if (score <= 15) {
    grade = "D";
  } else if (score <= 20) {
    grade = "C";
  } else if (score <= 25) {
    grade = "B";
  } else {
    grade = "A";
  }
  return grade;
}
console.log(getGrade(21));

// Day 2: Conditional Statements: Switch
function getLetter(s) {
  let letter;
  // Write your code here
  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;
    case "bcdfg".includes(s[0]):
      letter = "B";
      break;
    case "hijklm".includes(s[0]):
      letter = "C";
      break;
    case "nopqrstuvwxyz".includes(s[0]):
      letter = "D";
      break;
  }
  return letter;
}
console.log(getLetter("chetan"));


// Day 2: Loops
function vowelsAndConsonants(s) {
  for(let i=0; i<s.length; i++){
    if(s.charAt(i) === 'a' || s.charAt(i) === 'e' || s.charAt(i) === 'i' || s.charAt(i) === 'o' || s.charAt(i) === 'u'){
      console.log(s[i]);
    }
  }
  for(let j=0; j<s.length; j++){
    if(s.charAt(j) !== 'a' && s.charAt(j) !== 'e' && s.charAt(j) !== 'i' && s.charAt(j) !== 'o' && s.charAt(j) !== 'u'){
      console.log(s[j]);
    }
  }
}
vowelsAndConsonants('javascriptloops');

// Triangle star pattern
let number = 5;
let string = '';

for(let i=1; i<=number; i++){
  for(let j=1; j<=number - i; j++){
    string += ' ';
  }
  for(let k=1; k<= 2* i - 1 ; k++){
    string += '*';
  }
  string += '\n';
}
console.log(string);


// Half Triangle star pattern
let numberValue = 5;
let stringValue = '';
for(let i=1; i<=numberValue; i++){
  for(let j=1; j<= numberValue - i; j++){
    stringValue += ' ';
  }
  for(let k=1; k<=i; k++){
    stringValue += '*';
  }
  stringValue += '\n';
}
console.log(stringValue);


//Square star pattern 
let numberSquare = 5;
let stringSquare = '';
for(let i=1; i<=numberSquare; i++){
  for(let j=1; j<=numberSquare; j++){
    stringSquare += '*';
  }
  stringSquare += '\n';
}
console.log(stringSquare);