// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 24: More Linked Lists
this.removeDuplicates=function(head){
    //Write your code here
      var prev = null;
      var current = head;
      var arr = [];
      while(current != null) {
          if(arr[arr.length - 1] != current.data) {
              arr.push(current.data);
          } else {
              prev.next = current.next;
          }
          prev = current;
          current = current.next;
      }
      console.log(arr.join(' '));
  }