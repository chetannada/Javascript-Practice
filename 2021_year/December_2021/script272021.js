// 30 days of Code Tutorial in Hackerrank
// https://www.hackerrank.com/domains/tutorials/30-days-of-code

// Day 13: Abstract Classes
class MyBook extends Book {
    
    /**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    // Write your constructor here
    constructor(title, author, price){
        super();
        this.title = title;
        this.author = author;
        this.price = price;
    }
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    // Write your method here
    display() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    }
// End class
}

// Electronics Shop
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let sum = [];
    let max = 0;
    for(let i=0; i<keyboards.length; i++){
        for(let j=0; j<drives.length; j++){
            sum.push(keyboards[i] + drives[j]);
        }
    }
    
    for(let k=0; k<sum.length; k++){
        if(sum[k] <= b){
            if(sum[k] > max){
                max = sum[k];
            }
        }
    }
    
    if(max !== 0 && max <=b){
        return max;
    }else{
        return -1;
    }
}