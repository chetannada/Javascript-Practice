// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 14: Scope in python
// def computeDifference(self):
//         maxDiff = 0
//         arr = self.__elements
//         for i in range(len(arr)):
//             for j in range(i+1, len(arr)):
//                 if abs(arr[j] - arr[i]) > maxDiff:
//                     maxDiff = abs(arr[j] - arr[i])
//         self.maximumDifference = maxDiff



// Day 15: Linked List
this.insert = function (head, data) {
  //complete this method
  let newNode = new Node(data);
  if (head === null || typeof head === "undefined") {
    head = newNode;
  } else if (head.next === null) {
    head.next = newNode;
  } else {
    let nextValue = head.next;
    while (nextValue.next) {
      nextValue = nextValue.next;
    }
    nextValue.next = newNode;
  }
  return head;
};
