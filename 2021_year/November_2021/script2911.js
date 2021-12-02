// 10 days of Javascript Tutorial in Hackerrank

// Day 5: Inheritance
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

// adds an 'area' method to the Rectangle class' prototype
Rectangle.prototype.area = function () {
  return this.w * this.h;
};

// Create a Square class that inherits from Rectangle and implement its class constructor
class Square extends Rectangle {
  constructor(side) {
    super(side);
    this.w = side;
    this.h = side;
  }
}
const findAreaOfRectangle = new Rectangle(8,3);
console.log(findAreaOfRectangle.area());
const findAreaOfSquare = new Square(8);
console.log(findAreaOfSquare.area());


// Differences Between Arrow and Regular Functions
// function declaration
function greetDecl(message){
    return  `This is ${message}`;
}
console.log(greetDecl('function declaration'))

//function expression
const greetExp = function(message){
    return  `This is ${message}`;
}
console.log(greetExp('function expression'));

// The function declaration and function expression are nothing but regular function

// arrow function
const greetArrow = (message) =>{
    return  `This is ${message}`;
}
console.log(greetArrow('arrow function'));
/*
this value inside a regular function is dynamic and depends on the invocation. But this inside the arrow function is bound lexically and equals to this of the outer function.

arguments object inside the regular functions contains the list of arguments. The arrow function, on the opposite, doesn't define arguments (but you can easily access the arrow function arguments using a rest parameter ...args).

If the arrow function has one expression, then the expression is returned implicitly, even without using the return keyword.

Last but not least, you can define methods using the arrow function syntax inside classes. Fat arrow methods bind this value to the class instance.

Anyhow the fat arrow method is invoked, this always equals the class instance, which is useful when the methods are used as callbacks.
*/
// setTimeout() Method
function setTimeoutFunction() {
    setTimeout(function(){ console.log("This message will display after 5 seconds"); }, 5000);
  }
  setTimeoutFunction();

// Factorial of Number in Javascript using Recursive call
function  factorial(number){
  if(number === 0){
    return 1;
  }
  return number * factorial( number -1);
}
console.log(factorial(4));

