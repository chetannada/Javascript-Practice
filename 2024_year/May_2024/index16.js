// https://leetcode.com/problems/design-circular-deque/

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {

    // initialize empty array deque and max as k
    this.deque = [];
    this.max = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {

    // if length of deque is less than max than insert value from starting and return true
    if (this.deque.length < this.max) {
        this.deque.unshift(value);
        return true;
    }

    // otherwise return false
    return false;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {

    // if length of deque is less than max than insert value from ending and return true
    if (this.deque.length < this.max) {
        this.deque.push(value);
        return true;
    }

    // otherwise return false
    return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {

    // if length of deque is greater than 0 then remove element from starting and return true
    if (this.deque.length) {
        this.deque.shift();
        return true;
    }

    // otherwise return false
    return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {

    // if length of deque is greater than 0 then remove element from ending and return true
    if (this.deque.length) {
        this.deque.pop();
        return true;
    }

    // otherwise return false
    return false;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {

    // if length of deque is greater than 0 then return first element of deque
    if (this.deque.length) {
        return this.deque.at(0);
    }

    // otherwise return -1
    return -1;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {

    // if length of deque is greater than 0 then return last element of deque
    if (this.deque.length) {
        return this.deque.at(-1);
    }

    // otherwise return -1
    return -1;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {

    // if length of deque is greater than 0 then return false
    if (this.deque.length) {
        return false;
    }

    // otherwise return true
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {

    // if length of deque is equal to max then return true
    if (this.deque.length === this.max) {
        return true;
    }

    // otherwise return true
    return false;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */



/*
Design your implementation of the circular double-ended queue (deque).

Implement the MyCircularDeque class:

MyCircularDeque(int k) Initializes the deque with a maximum size of k.
boolean insertFront() Adds an item at the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean insertLast() Adds an item at the rear of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteFront() Deletes an item from the front of Deque. Returns true if the operation is successful, or false otherwise.
boolean deleteLast() Deletes an item from the rear of Deque. Returns true if the operation is successful, or false otherwise.
int getFront() Returns the front item from the Deque. Returns -1 if the deque is empty.
int getRear() Returns the last item from Deque. Returns -1 if the deque is empty.
boolean isEmpty() Returns true if the deque is empty, or false otherwise.
boolean isFull() Returns true if the deque is full, or false otherwise.
*/

/*
Example 1:

Input
["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
[[3], [1], [2], [3], [4], [], [], [], [4], []]
Output
[null, true, true, true, false, 2, true, true, true, 4]

Explanation
MyCircularDeque myCircularDeque = new MyCircularDeque(3);
myCircularDeque.insertLast(1);  // return True
myCircularDeque.insertLast(2);  // return True
myCircularDeque.insertFront(3); // return True
myCircularDeque.insertFront(4); // return False, the queue is full.
myCircularDeque.getRear();      // return 2
myCircularDeque.isFull();       // return True
myCircularDeque.deleteLast();   // return True
myCircularDeque.insertFront(4); // return True
myCircularDeque.getFront();     // return 4
*/


/*
Constraints:

1 <= k <= 1000
0 <= value <= 1000
At most 2000 calls will be made to insertFront, insertLast, deleteFront, deleteLast, getFront, getRear, isEmpty, isFull.
*/