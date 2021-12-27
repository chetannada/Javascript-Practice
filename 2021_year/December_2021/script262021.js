// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 12: Inheritance
class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }
  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here

  calculate() {
    let sum = this.scores.reduce((a, b) => a + b);
    let average = sum / this.scores.length;

    if (average >= 90) {
      return "O";
    } else if (average >= 80) {
      return "E";
    } else if (average >= 70) {
      return "A";
    } else if (average >= 55) {
      return "P";
    } else if (average >= 40) {
      return "D";
    } else {
      return "T";
    }
  }
}
