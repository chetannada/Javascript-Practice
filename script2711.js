// 10 days of Javascript Tutorial in Hackerrank

// JavaScript Array reduce()
// Subtract the numbers in the array, starting from the left:
let numberSubtract = [325, 25, 100];
let resultSubtract = numberSubtract.reduce((a, b) => a - b);
console.log(resultSubtract);

// Subtract the numbers in the array, starting from the right:
let numberSubtractRight = [100, 25, 100];
let resultSubtractRight = numberSubtractRight.reduceRight((a, b) => a - b);
console.log(resultSubtractRight);

// // Add all the numbers in the array
let numberAdd = [10, 20, 40];
let resultAdd = numberAdd.reduce((a, b) => a + b);
console.log(resultAdd);

// JavaScript Fetch API to Get Data using async await and try catch
let apiUrl = "https://jsonplaceholder.typicode.com/todos";
async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    getData(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData(apiUrl);
function getData(data) {
        for(let index = 0; index<2; index++){
            console.log(`Id: ${data[index].id}, Title: ${data[index].title}`);   
        }
}


// JavaScript Fetch API to Get Data using async await and then catch
async function getFetchData(url){
    await fetch(url)
    .then(response => response.json())
    .then(data => console.log(`Id: ${data[99].id}, Title: ${data[99].title}`))
    .catch(error => console.log(error))
}
getFetchData(apiUrl);