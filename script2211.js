// 10 days of Javascript Tutorial in Hackerrank

//Day 1: Arithmetic Operators

// Calculate the area of a rectangle.
function getArea(length, width) {
  let area;
  area = length * width;
  return area;
}
console.log(getArea(10, 5));
//   Calculate the perimeter of a rectangle.
function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  perimeter = 2 * (length + width);
  return perimeter;
}
console.log(getPerimeter(10, 5));

// Day 1: Functions

// function factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(4));

// Day 1: Let and Const

// find area and perimeter of circle
function circle(r) {
  const PI = Math.PI;

  console.log(PI * (r * r));

  console.log(2 * PI * r);
}
circle(2.6);
