// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day of the Programmer
function dayOfProgrammer(year) {
  // Write your code here
  if (year === 1918) return "26.09.1918";
  else if (
    (year <= 1917 && year % 4 == 0) ||
    year % 400 == 0 ||
    (year % 4 == 0) & (year % 100 != 0)
  )
    return "12.09." + year;
  else return "13.09." + year;
}
console.log(dayOfProgrammer(1917));

// Bill Division
function bonAppetit(bill, k, b) {
  // Write your code here
  let anna = bill[k];
  let total = bill.reduce((x, y) => x + y);
  let totalLessAnna = total - anna;
  let actual = totalLessAnna / 2;
  if (b - actual === 0) {
    console.log("Bon Appetit");
  } else {
    console.log(b - actual);
  }
}

// Sales by Match
function sockMerchant(n, ar) {
    // Write your code here
    let pairsCount = 0;
  let counterObj = {};

  for (let sock of ar) {
    if (!counterObj[sock]) {
      counterObj[sock] = 1;
    } else {
      counterObj[sock] = counterObj[sock] + 1;

      if (counterObj[sock] === 2) {
        pairsCount++;
        counterObj[sock] = 0;
      }
    }
  }
  return pairsCount;
}
console.log(sockMerchant(9,[10, 20, 20, 20, 10, 10, 30, 30, 50, 50, 60, 10, 20]));

// Day 8: Dictionaries and Maps
function processData(input) {
  //Enter your code here
  const splitInput = input.split("\n");
  const phoneBookSize = +splitInput[0];
  const inputValue = splitInput.slice(phoneBookSize + 1);
  const mapData = splitInput.slice(1, phoneBookSize + 1).map(item => {
      let obj = {
          name: item.split(" ")[0],
          phoneNumber: item.split(" ")[1]
      }
      return obj;
  });
  
  let phoneBook = [];
  for (let list of mapData) {
      phoneBook[list.name] = list.phoneNumber;
  }

  for (let name of inputValue) {
      if (phoneBook[name]) {
          console.log(`${name}=${phoneBook[name]}`);
      } else {
          console.log('Not found');
      }
  }
}
processData("3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry");