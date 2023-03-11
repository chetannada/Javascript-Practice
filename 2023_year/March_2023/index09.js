// Print 1 to 10 numbers after every 2 seconds
let num = 10;
function delay(num) {
  for (let i = 1; i <= num; i++) {
    setTimeout(() => console.log(i), i * 2000);
  }
}
delay(num); // it will print 1... 10 numbers after every 2 seconds. 
