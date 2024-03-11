// https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/description/


/**
 * @param {string} nums
 * @param {number} k
 * @return {number}
 */
var getMinSwaps = function (nums, k) {

    // create an array from string nums
    let wonderfulArr = [...nums];

    // run form loop from index 1 to k
    for (let i = 1; i <= k; i++) {

        // invoke the nextPermutation() function with wonderfulArr as argument 
        // so it gives kth wonderfulArr
        nextPermutation(wonderfulArr);
    }

    // initialize count to 0 and create an array from string nums
    let count = 0;
    let num = [...nums];

    // run for loop from index 0 to length of num
    for (let i = 0; i < num.length; i++) {

        // if ith element of num is not equal to ith element of wonderfulArr
        if (num[i] !== wonderfulArr[i]) {

            // initialize j equal to i+1
            let j = i + 1;

            // run while until ith element of wonderfulArr 
            // is not equal to jth  element of num and increment j
            while (wonderfulArr[i] !== num[j]) {
                j++;
            }

            // run while until i not equal to j
            while (i !== j) {

                // swap the num[j] and num[j-1]
                swap(num, j, j - 1);

                // decrement j
                j--;

                // increment count after swaping
                count++;
            }
        }
    }

    // return answer count
    return count;
};

// function nextPermutation with arr as argument
const nextPermutation = (arr) => {
    let n = arr.length;

    // Step 1. run for loop from right to left
    for (let i = n - 2; i >= 0; i--) {

        // find first digit that is less than its right
        if (arr[i + 1] > arr[i]) {

            // Step 2. run for loop from right to left
            for (let j = n - 1; j > i; j--) {

                // find the digit that is less than its right
                if (arr[j] > arr[i]) {

                    // Step 3. swap arr[i] and arr[j]
                    swap(arr, i, j);

                    // Step 4. reverse all elements from i+1
                    reverse(arr, i + 1, n - 1);

                    // return nothing because we modify the original array wonderfulArr
                    return;
                }
            }
        }
    }
}

// initialize function swap which swap the i and j element in array
const swap = (arr, start, end) => ([arr[end], arr[start]] = [arr[start], arr[end]]);

// initialize  function reverse which reverse element from start to end
const reverse = (arr, start, end) => {

    // run while loop from start to end
    while (start < end) {

        // swap start index element and end index element of array nums
        swap(arr, start, end);

        // increment start and decrement end
        start++;
        end--;
    }
}


/*
You are given a string num, representing a large integer, and an integer k.

We call some integer wonderful if it is a permutation of the digits in num and is greater in value than num. There can be many wonderful integers. However, we only care about the smallest-valued ones.

For example, when num = "5489355142":
The 1st smallest wonderful integer is "5489355214".
The 2nd smallest wonderful integer is "5489355241".
The 3rd smallest wonderful integer is "5489355412".
The 4th smallest wonderful integer is "5489355421".
Return the minimum number of adjacent digit swaps that needs to be applied to num to reach the kth smallest wonderful integer.

The tests are generated in such a way that kth smallest wonderful integer exists.
*/


/*
Example 1:

Input: num = "5489355142", k = 4
Output: 2
Explanation: The 4th smallest wonderful number is "5489355421". To get this number:
- Swap index 7 with index 8: "5489355142" -> "5489355412"
- Swap index 8 with index 9: "5489355412" -> "5489355421"

Example 2:

Input: num = "11112", k = 4
Output: 4
Explanation: The 4th smallest wonderful number is "21111". To get this number:
- Swap index 3 with index 4: "11112" -> "11121"
- Swap index 2 with index 3: "11121" -> "11211"
- Swap index 1 with index 2: "11211" -> "12111"
- Swap index 0 with index 1: "12111" -> "21111"

Example 3:

Input: num = "00123", k = 1
Output: 1
Explanation: The 1st smallest wonderful number is "00132". To get this number:
- Swap index 3 with index 4: "00123" -> "00132"
*/


/*
Constraints:

2 <= num.length <= 1000
1 <= k <= 1000
num only consists of digits.
*/