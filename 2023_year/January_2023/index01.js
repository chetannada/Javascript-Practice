// Update the HTMl DOM using Javascript using createElement and appendChild in root element
const heading1 = document.createElement("h1");
heading1.innerHTML  = "This is h1 Element";
heading1.style = "color:red";
heading1.className = "h1";


const heading2 = document.createElement("h2");
const heading2Content = `This is heading 2`;
heading2.style = "background-color: green";
heading2.innerHTML = heading2Content;

// Practicing Variables scope for let, const, var
function getData(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    if(true){
        let a = 10, b=20;
        console.log(b);
    }
    // console.log(a); // get reference error
}
getData();


// Practicing for Error
// console.log(a1); // Uncaught ReferenceError: a1 is not defined
var a2;
console.log(a2); // undefined
let a3;
console.log(a3); // undefined
// const a4;
// console.log(a4); //Uncaught SyntaxError: Missing initializer in const declaration



const root = document.getElementById("root");
root.appendChild(heading2);