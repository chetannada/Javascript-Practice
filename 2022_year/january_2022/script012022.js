// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 18: Queues and Stacks
function Solution(){
    //Write your code here
      this.stack = [];
      this.queue = [];
      
      Solution.prototype.pushCharacter = this.stack.push;
      Solution.prototype.popCharacter = this.stack.pop;
      Solution.prototype.enqueueCharacter = this.queue.push;
      Solution.prototype.dequeueCharacter = this.queue.shift;
  }