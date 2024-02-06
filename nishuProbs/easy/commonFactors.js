/*
Given two positive integers a and b, return the number of common factors of a and b.
An integer x is a common factor of a and b if x divides both a and b.

Example 1:

Input: a = 12, b = 6
Output: 4
Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

Example 2:
Input: a = 25, b = 30
Output: 2
Explanation: The common factors of 25 and 30 are 1, 5.

Constraints:

1 <= a, b <= 1000
*/
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// IP: 2 pos ints - a, b
// OP: a number - the count of common factor between a and b

// create a small and big var to hold a and b values
// create count var set to zero
// IF (a < b)
    // small = a
    // big = b
// otherwise
    // small = b
    // big = a
// loop starting at 1, up to small's number
    // if big and small divided by the current is an int
        // make count go up by one
// return count
var commonFactors = function(a, b) {
    let big;
    let small;
    let count = 0;
    if (a < b) {
        small = a;
        big = b;
    } else {
        small = b;
        big = a;
    }
    for (let i = 1; i <= small; i++) {
        if (big % i === 0 && small % i === 0) {
            count++
        }
    }
    return count;
};
console.log(commonFactors(12, 6), "ans ", 4);
console.log(commonFactors(25, 30), "ans ", 2);

// t = O(n), where n is the smaller of a and b
// m = O(1)
// t = 43ms 94.13% | m = 49.06Mb 12.29%
