// https://leetcode.com/problems/maximum-units-on-a-truck/description/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {

    // sort the boxTypes in descending order based on numberOfUnitsPerBox
    boxTypes.sort((a, b) => b[1] - a[1]);

    // initialize units to 0
    let units = 0;

    // run for of loop for boxTypes
    for (let type of boxTypes) {

        // initialize box as numberOfBoxes
        let box = type[0];

        // if box is less than or equal to truckSize
        if (box <= truckSize) {

            // subtract truck size with box and assign back to truckSize
            truckSize -= box;

            //  multiply box and numberOfUnitsPerBox and add with units and assign back to units
            units += (box * type[1]);
        } else {

            // else multiply truckSize and numberOfUnitsPerBox and add with units and assign back to units and break the for loop
            units += (truckSize * type[1]);
            break;
        }
    }

    // return Maximum Units on a Truck
    return units;
};

/*
You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

numberOfBoxesi is the number of boxes of type i.
numberOfUnitsPerBoxi is the number of units in each box of the type i.
You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.
*/


/*
Example 1:

Input: boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
Output: 8
Explanation: There are:
- 1 box of the first type that contains 3 units.
- 2 boxes of the second type that contain 2 units each.
- 3 boxes of the third type that contain 1 unit each.
You can take all the boxes of the first and second types, and one box of the third type.
The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8.

Example 2:

Input: boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10
Output: 91
*/


/*
Constraints:

1 <= boxTypes.length <= 1000
1 <= numberOfBoxesi, numberOfUnitsPerBoxi <= 1000
1 <= truckSize <= 106
*/