// 10 days of Javascript Tutorial in Hackerrank

// Day 4: Create a Rectangle Object

function Rectangle(a, b) {
    let rectangleObject = {
        length: a,
        width: b,
        perimeter: 2 *(a +b),
        area: a*b
    }
    return rectangleObject;
}
console.log(Rectangle(4,5));

// Day 4: Count Objects
function getCount(objects) {
    let count = 0;
    for(let i=0; i<objects.length ; i++){
        if(objects[i].x == objects[i].y){
            count += 1;
        }
    }
    return count;
    }
console.log(getCount([{x:1,y:3},{x:2,y:2},{x:3,y:3}]))

// Day 4: Classes
class Polygon{
    constructor(length){
        this.sideLength= length;
    }
    perimeter(){
        let result =0;
        for(let i=0; i<this.sideLength.length; i++){
            result += this.sideLength[i];
        }
        return result;
    }
}
let triangle = new Polygon([3,4,5]);
console.log(triangle.perimeter());

