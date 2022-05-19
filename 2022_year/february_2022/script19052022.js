// cut the sticks hackerrank solution javascript
function cutTheSticks(arr) {
    let output = [];
    while (arr.length != 0) {

        let minVal = Math.min(...arr);
        output.push(arr.length);
        
        for (let i = 0; i < arr.length; i++) {
            let sub = arr[i] - minVal;
            if (sub === 0) {
                arr.splice(i, 1);
                i -= 1;
            } else {
                arr[i] = sub;
            }
         }
    }
    return output;
}