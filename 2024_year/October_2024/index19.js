// https://leetcode.com/problems/h-index/description/

/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {

    // initialize papers as length of citations
    let papers = citations.length;

    // initialize buckets as array of length as papers + 1 and all elements are filled with 0
    let buckets = new Array(papers + 1).fill(0);

    // run for of loop for citations
    for (let cit of citations) {

        // find minimum between cit and papers and increment that index of buckets by 1 
        buckets[Math.min(cit, papers)] += 1;
    }

    // initialize cumulativePapers as 0
    let cumulativePapers = 0;

    // run for loop from index as papers to 0 (inclusive)
    for (let index = papers; index >= 0; index--) {

        // add buckets[index] to cumulativePapers
        cumulativePapers += buckets[index];

        // cumulativePapers is greater than or equal to index then return index
        if (cumulativePapers >= index) {
            return index;
        }
    }

};


/*
Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.
*/


/*
Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

Example 2:

Input: citations = [1,3,1]
Output: 1
*/


/*
Constraints:

n == citations.length
1 <= n <= 5000
0 <= citations[i] <= 1000
*/