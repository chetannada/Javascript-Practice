// https://leetcode.com/problems/linked-list-random-node/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.result = []; 
        let curr = head;  
        
        while(curr !== null) {
            this.result.push(curr)
            curr = curr.next;
        }
        this.length = this.result.length; 
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    //Math.random() will generate a random number b/w 0 & 1.
    //then multiply it with the array size, as i have all the value in the list, i know the size of the list
    //take only the integer part which is a random index.
    //return the element at that random index.
    return this.result[Math.floor(Math.random() * this.length)].val
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

console.log(["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]
[[[1, 2, 3]], [], [], [], [], []]); // [null, 1, 3, 2, 2, 3]

/*
Solution solution = new Solution([1, 2, 3]);
solution.getRandom(); // return 1
solution.getRandom(); // return 3
solution.getRandom(); // return 2
solution.getRandom(); // return 2
solution.getRandom(); // return 3
getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
*/