// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// how to check all elements in array includes in another array javascript
const includesAll = (arr, values) => values.every(v => arr.includes(v));
includesAll([1, 2, 3, 4], [1, 4]); // true
includesAll([1, 2, 3, 4], [1, 5]); // false

// Day 21: Generics in C++
// Write your code here
// template <class T>
// void printArray(vector<T> vec){

//    for(int i=0; i<vec.size(); i++)
//    cout<<vec[i]<<endl;

// }

// Designer PDF Viewer
function designerPdfViewer(h, word) {
    // Write your code here
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let sortedWord = word.split('').sort();
    let tallestLetter = [];
    for(let i=0; i<alphabets.length; i++){
        for(let j=0; j<sortedWord.length; j++){
            if(alphabets[i] == sortedWord[j]){
                tallestLetter.push(h[i]);
            }
        }
    }
    let max = Math.max(...tallestLetter);
    return max * (sortedWord.length);
}

// Utopian Tree
function utopianTree(n) {
    // Write your code here
    let cycle = 1;
    let height = 1;
    for(cycle; cycle<=n; cycle++){
        if(cycle %2 !== 0){
            height *= 2;
        }else{
            height++;
        }
    }
    return height;
}

// Angry Professor
function angryProfessor(k, a) {
    // Write your code here
    let studentArrivalReg = 0;
    for(let i=0; i<a.length; i++){
        if(a[i]<= 0){
            studentArrivalReg++;
        }
    }
    if(studentArrivalReg >= k){
        return 'NO';
    }else{
        return 'YES';
    }
}