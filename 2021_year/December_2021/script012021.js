// 10 days of Javascript Tutorial in Hackerrank

// Asynchonous Programming and Callbacks
console.log('before');
// The callback function is executed asynchronously.
setTimeout(() => {
    console.log('callback functions runs after 2 second.')
}, 2000);
console.log('after');

