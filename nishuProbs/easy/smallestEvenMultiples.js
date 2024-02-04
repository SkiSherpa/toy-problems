/*
Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.

Example 1:

Input: n = 5
Output: 10
Explanation: The smallest multiple of both 5 and 2 is 10.
Example 2:

Input: n = 6
Output: 6
Explanation: The smallest multiple of both 6 and 2 is 6. Note that a number is a multiple of itself.


Constraints:

1 <= n <= 150
*/
/**
 * @param {number} n
 * @return {number}
 */
// IP: a number - pos int
// OP: a number - an int that is divisible by 2 and n
// C: 2*n will always be the end of numbers

// smallest num could be n itself
// 2*n is the ceiling


// IF n is divisible by 2
    // return n
// create cur = n;
// loop by adding n to it self
    // IF cur is divisible by 2
        // return cur

var smallestEvenMultiple = function(n) {
    let cur = n;
    while (cur) {
        console.log(cur)
        if (cur % 2 === 0) {
            return cur;
        }
        cur += n;
    }
};

// console.log(smallestEvenMultiple(5), "ans:", 10);
// console.log(smallestEvenMultiple(6), "ans:", 6);
console.log(smallestEvenMultiple(19), "ans:", 6);
// t = O(1), the loop will only do 2 iterations
// t = 35ms, 99.44%
// m = O(1), cur is the only var created and it keeps getting over written
// m = 48.77, 8.68%

// really only two answers can happen n and n*2

var __smallestEvenMultiple = function(n) {
    if (n % 2 === 0) {
        return n;
    }
    return n+n;
}
// t = 50ms, 68.30% | m = 48.96MB 6.23%

var _smallestEvenMultiple = function(n) {
    if (n % 2 === 0) {
        return n;
    }
    return n*2;
}
// t = 49ms, 73.27% | m = 48.70MB 10.57%

/* It's odd that the one with the loop that does two iterations is faster than the ones below */
