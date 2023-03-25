// https://leetcode.com/problems/design-an-ordered-stream/description/

/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    // initialize array
     this.arr = [];
     // start pointer at index of 0
     this.p = 0;
     //set array to have length of n
     this.arr.length = n;
               
   };
   
   /** 
    * @param {number} idKey 
    * @param {string} value
    * @return {string[]}
    */
   OrderedStream.prototype.insert = function(idKey, value) {
   // push the value into array at index of idKey
     this.arr[idKey - 1] = value;
     // initialize result array
     let result = [];
     
     // while the pointer has a value, push that value into the result array and advance the pointer
     while (this.arr[this.p]) {
       result.push(this.arr[this.p]);
       this.p++;
     }
     // return the result array which will either be empty if the pointer was null, or will have the chunks pushed into it
     return result;
   };
   
   /** 
    * Your OrderedStream object will be instantiated and called as such:
    * var obj = new OrderedStream(n)
    * var param_1 = obj.insert(idKey,value)
    */

   /*
Input
["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
[[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
Output
[null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]

Explanation
Note that the values ordered by ID is ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"].
OrderedStream os = new OrderedStream(5);
os.insert(3, "ccccc"); // Inserts (3, "ccccc"), returns [].
os.insert(1, "aaaaa"); // Inserts (1, "aaaaa"), returns ["aaaaa"].
os.insert(2, "bbbbb"); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
os.insert(5, "eeeee"); // Inserts (5, "eeeee"), returns [].
os.insert(4, "ddddd"); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
Concatentating all the chunks returned:
[] + ["aaaaa"] + ["bbbbb", "ccccc"] + [] + ["ddddd", "eeeee"] = ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]
The resulting order is the same as the order above.
   */