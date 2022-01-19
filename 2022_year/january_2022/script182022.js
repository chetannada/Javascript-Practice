// https://www.hackerrank.com/domains/algorithms

// Static methods
class Person1 {
    static getHello(){
        return 'Hello';
    }
}


// Getters and setters
class Person {
  constructor(name) {
    this.name = name;
  }
  set name(value) {
    this.name = value;
  }
  get name() {
    return this.name;
  }
}
console.log(Person);

// Default parameters
const doSomething = (param = "Hello") => {
    return param;
}
console.log(doSomething());

// Default many parameters
const doSomethingMore = (param1 = "Chetan", param2 = "Nada") => {
    return param1 + " " + param2;
}
console.log(doSomethingMore());

// Template Literals
const string_a = `backtick string`;

// Multiline String
const mulString = `first \
second`;
console.log(mulString);


// multiline string trim() method
const stringTrim = `


First
Second`.trim();
console.log(stringTrim);

// Interpolation
const test = "test";
const stringTest = `This is the ${test} string`;
console.log(stringTest);
const exp = `expression ${1 + 3}`;
console.log(exp);



