/*
Promises are used to handle asynchronous operations in JavaScript. 
They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 


Benefits of Promises 
Improves Code Readability
Better handling of asynchronous operations
Better flow of control definition in asynchronous logic
Better Error Handling


A Promise has four states: 
fulfilled: Action related to the promise succeeded
rejected: Action related to the promise failed
pending: Promise is still pending i.e. not fulfilled or rejected yet
settled: Promise has fulfilled or rejected


Promises are used for asynchronous handling of events.
Promises are used to handle asynchronous http requests.
*/

const promise = new Promise(function (resolve, reject) {
  const x = "Hello";
  const y = "World";
  if (x !== y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success");
  })
  .catch(function () {
    console.log("Some error has occurred");
  });
