// 10 days of Javascript Tutorial in Hackerrank

// Day 3: Throw Error

function isPositive(a) {
    if(a === 0){
        throw Error('Zero Error');
    }else if(a<0){
        throw Error('Negative Error');
    }else{
        return 'YES';
    }
}
console.log(isPositive(5));


//Hollow square pattern
let number = 5;
let string =''; 
for(let i=1; i<=number; i++){
  for(let j=1; j<=number; j++){
    if(i===1 || i===number){
      string += '*';
    }else{
      if(j===1 || j===number){
        string += '*';
      }else{
        string +=' ';
      }
    }
  }
  string += '\n';
}
console.log(string);



// Downward Triangle Star Pattern
let numberDown = 5;
let stringDown = ''; 
for (let i=1; i<=numberDown; i++){
  for(let j=i; j<=numberDown; j++){
    stringDown += '*';
  }
  stringDown += '\n';
}
console.log(stringDown);



// Hollow Triangle Star Pattern
let numberHollow = 6;
let stringHollow = "";
for(let i=1; i<=numberHollow; i++){
  for(let j=1; j<=i; j++){
    if(j===1 || j===i || i===numberHollow){
      stringHollow += "*";
    }else{
      stringHollow += " ";
    }
  }
  stringHollow += '\n';
}
console.log(stringHollow);



// Reversed pyramid(Triangle) star pattern in Javascript
let numberPyramid = 5;
let stringPyramid = '';
for(let i=1; i<=numberPyramid; i++){
  for(let j=1; j<=i -1; j++){
    stringPyramid += ' ';
  }
  for(let k=i; k<=2 * numberPyramid -i; k++){
    stringPyramid += '*';
  }
  stringPyramid += '\n';
}
console.log(stringPyramid);