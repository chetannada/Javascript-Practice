// 10 days of Javascript Tutorial in Hackerrank

// forEach Method for Arrays in JavaScript
// The forEach method executes the callback function against all element of the array.
let numberArray = [1,2,3,4,5];
function printArrayValue(value, index){
    console.log(`value: ${value} = index: ${index}`);
}
numberArray.forEach(printArrayValue);

// Day 5: Template Literals
function sides(...expressions) {
    const [area, perimter] = expressions;
    const s1 = (perimter + Math.sqrt(Math.pow(perimter,2) - 16 * area))/4;
    const s2 = (perimter - Math.sqrt(Math.pow(perimter,2) - 16 * area))/4;
    return [s1,s2].sort();
}
console.log(sides(10,14));

