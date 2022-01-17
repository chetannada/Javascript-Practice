// class in javascript
class Person {
    constructor(name){
        this.name = name;
    }
    myName(){
        return `My name is ${this.name}`;
    }
}
const newPerson = new Person("Chetan");
console.log(newPerson.myName());

// Class inheritance
class Programmer extends Person{
    myName(){
        return super.myName() + " I am Programmer";
    }
}
const newProgrammer = new Programmer("Chetan");
console.log(newProgrammer.myName());