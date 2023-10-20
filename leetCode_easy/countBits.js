// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// n    binary   in OP arr  Explination
// 0 --> 0          0       The are zero 1's
// 1 --> 1          1       one 1
// 2 --> 10         1       one 1
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0          0       The are zero 1's
// 1 --> 1          1       one 1
// 2 --> 10         1       one 1
// 3 --> 11         2       two 1's
// 4 --> 100        1       one 1
// 5 --> 101        2       two 1a


// Constraints:

// 0 <= n <= 105
/**
 * @param {number} n
 * @return {number[]}
 */
//  IP: num
// OP: arr of nums
// loop, count up to n
// convert the current number to binary str
// count its 1's
// push the count into results
var countBits = function(n) {
    let results = [];
    for (let i = 0; i <= n; i++) {
        const binary = i.toString(2);
        let count = 0;
        for (let j = 0; j < binary.length; j++) {
            if (binary[j] === "1") {
                count++;
            }
        }
        results.push(count);
    }
    return results;
};

// console.log(countBits(2)); // [0, 1, 1]
console.log(countBits(5)); // [0,1,1,2,1,2]

// t -> O(n^2)
// t = 84ms, 49.17% | Mem: 49.19MB, 47.15%
