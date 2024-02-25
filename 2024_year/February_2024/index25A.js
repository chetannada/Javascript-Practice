// ** Convert an Array to an Object in JavaScript
// Method 1: Using the Spread Operator
// Input array
let arr = ["chetan", "ujesh", "vishal", "akshay"];

const obj1 = {...arr};
console.log(obj1); // { '0': 'chetan', '1': 'ujesh', '2': 'vishal', '3': 'akshay' }


// Method 2: using Object.assign()
let obj2 = Object.assign({}, arr);
console.log(obj2); // { '0': 'chetan', '1': 'ujesh', '2': 'vishal', '3': 'akshay' }


// Method 3: Using JavaScript for loop
function arrayToObj(arr) {
    
    let obj3 = {};
    // Traverse array using loop
    for (let i = 0; i < arr.length; ++i){
      // Assign each element to object
        obj3[i] = arr[i];
    }
        
    return obj3;
}

console.log(arrayToObj(arr)); // { '0': 'chetan', '1': 'ujesh', '2': 'vishal', '3': 'akshay' }


// Method 4: Using JavaScript Object.fromEntries()
// Input array
let arr4 = [['JS', 'JavaScript'], ['GFG', 'GeeksforGeeks']];
// Create object
let obj4 = Object.fromEntries(arr4);
 
// Display output
console.log(obj4); // { JS: 'JavaScript', GFG: 'GeeksforGeeks' }


// ** break foreach loop in javascript using return
const mainArr = [1, 2, 3, 4, 5];
const tempArr = [];

mainArr.forEach((element) => {
    if (element === 3) {
        return; // Skips the element 3 and continues with the loop:
        // if we use break then it throw Error: Uncaught SyntaxError: Illegal break statement
    }

    tempArr.push(element);
});

console.log(tempArr); // [1, 2, 4, 5]
