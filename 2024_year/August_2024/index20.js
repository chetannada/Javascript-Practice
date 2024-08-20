// https://leetcode.com/problems/design-parking-system/description/

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {

    // if carType is equal to 1
    if (carType === 1) {

        // decrement this.big by 1 and return true if this.big + 1 is greater than or equal to 1 otherwise false 
        this.big--;
        return this.big + 1 >= 1 ? true : false;
    } else if (carType === 2) {

        // decrement this.medium by 1 and return true if this.medium + 1 is greater than or equal to 1 otherwise false 
        this.medium--;
        return this.medium + 1 >= 1 ? true : false;
    } else {

        // decrement this.small by 1 and return true if this.small + 1 is greater than or equal to 1 otherwise false 
        this.small--;
        return this.small + 1 >= 1 ? true : false;
    }
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */



/*
Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

Implement the ParkingSystem class:

ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.
*/


/*
Example 1:

Input
["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
[[1, 1, 0], [1], [2], [3], [1]]
Output
[null, true, true, false, false]

Explanation
ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
parkingSystem.addCar(3); // return false because there is no available slot for a small car
parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.
*/



/*
Constraints:

0 <= big, medium, small <= 1000
carType is 1, 2, or 3
At most 1000 calls will be made to addCar
*/