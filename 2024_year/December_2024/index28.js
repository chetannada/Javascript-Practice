// https://leetcode.com/problems/design-hashset/description/



var MyHashSet = function () {

    // initialize arr as empty array
    this.arr = [];
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {

    // if key is not includes in arr then push key in arr
    if (!this.contains(key)) {
        this.arr.push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {

    // if key is includes in arr
    if (this.contains(key)) {

        // find index of key in arr
        let index = this.arr.indexOf(key);

        // remove the element from arr based on index
        this.arr.splice(index, 1);
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {

    // if key is includes in arr then return true otherwise return false
    if (this.arr.includes(key)) {
        return true;
    } else {
        return false;
    }
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */


/*
Design a HashSet without using any built-in hash table libraries.

Implement MyHashSet class:

void add(key) Inserts the value key into the HashSet.
bool contains(key) Returns whether the value key exists in the HashSet or not.
void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.

*/


/*
Example 1:

Input
["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
[[], [1], [2], [1], [3], [2], [2], [2], [2]]
Output
[null, null, null, true, false, null, true, null, false]

Explanation
MyHashSet myHashSet = new MyHashSet();
myHashSet.add(1);      // set = [1]
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(1); // return True
myHashSet.contains(3); // return False, (not found)
myHashSet.add(2);      // set = [1, 2]
myHashSet.contains(2); // return True
myHashSet.remove(2);   // set = [1]
myHashSet.contains(2); // return False, (already removed)

*/


/*

Constraints:

0 <= key <= 106
At most 104 calls will be made to add, remove, and contains.
*/