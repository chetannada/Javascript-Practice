// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Beautiful Days at the Movies
function beautifulDays(i, j, k) {
    // Write your code here
    let count = 0;
    let reverse = 0;
    for(i; i <= j; i++){
        reverse = parseInt(i.toString().split('').reverse().join(''));
        if(Number.isInteger((Math.abs(i - reverse))/k)){
            count++;
        }
    }
    return count;
}

// Viral Advertising
function viralAdvertising(n) {
    // Write your code here
    let like = 2;
    let cumulative = 2;
    let day = 0;
    for(let i = 2; i<=n; i++){
        day = like * 3;
        like = Math.floor(day/2);
        cumulative += like;
    }
    return cumulative;
}

// Day 22: Binary Search Trees
// Add your code here
var height = 1;
var height_left = -1;
var height_right = -1;

if (root.left)
    height_left = this.getHeight(root.left);

if (root.right)
    height_right = this.getHeight(root.right);

height += (height_left > height_right ? height_left : height_right);

return height;