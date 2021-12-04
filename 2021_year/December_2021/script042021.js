// 10 days of Javascript Tutorial in Hackerrank

// Day 7: Regular Expressions II
// match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.' followed by one or more letters.
function regexVar(string) {
  let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)[a-zA-Z]+$/;
  let result = !!string.match(re);
  return result;
}
console.log(regexVar("Mr.Chetan"));

// Day 7: Regular Expressions III
// matches every integer in some string
function regexInt(int) {
  let reg = /\d+/g;
  let output = int.match(reg);
  for (let element of output) {
    console.log(element);
  }
}
regexInt("123.5");

//  Day 8: Create a Button Hackerrank
// Increment a number when clicking a button
// function incrementButton(){
//     document.getElementById('btn').innerHTML++;
// }

// Day 8: Buttons Container Hackerrank
// Each time btn5 is clicked, the innerHTML text on the grid's outer buttons (i.e., bt1, btn2, btn3, btn4, btn6, btn7, btn8, btn9) must rotate in the clockwise direction.
// const ids = [1, 2, 3, 6, 9, 8, 7, 4];
// let number = [1, 2, 3, 6, 9, 8, 7, 4];
// let btn5 = document.getElementById("btn5");
// btn5.onclick = function () {
//   number.unshift(number.pop());
//   for (let i = 0; i <= 7; i++) {
//     document.getElementById("btn" + ids[i]).innerHTML = number[i];
//   }
// }

