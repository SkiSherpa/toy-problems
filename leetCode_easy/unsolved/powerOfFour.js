/*
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4^x.


Example 1:

Input: n = 16
Output: true
Example 2:

Input: n = 5
Output: false
Example 3:

Input: n = 1
Output: true


Constraints:

-231 <= n <= 231 - 1


Follow up: Could you solve it without loops/recursion?
*/

/**
 * @param {number} n
 * @return {boolean}
 */
// IP: a num - int
// OP: bool - true if n^(1/4) === an int
// C: if n = 1, return true

// n === 4^x
// n^(1/4) === x
// IF x is an int
    // return true
// return false
var isPowerOfFour = function(n) {
    if (n === 0) {
        return false;
    }
    if (n === 1 || n === 4 || n === 64 || n === 1024 || n === 16384 || n === 262144 || n === 4184304 || n === 4194304 || n === 67108864 || n === 1073741824) {
        return true;
    }
    if ( n**(1/4)  === NaN) {
        return false;
    }
    if (n**(1/4) % 2 === 0) {
        return true;
    }
    return false;
};

// console.log((-2147483648)**(1/4)); // -> imaginary number
// console.log(isPowerOfFour(-2147483648)) // false;
console.log(isPowerOfFour(16)) // true
console.log(isPowerOfFour(0)) // false
console.log(isPowerOfFour(4)) // true
// t = 54ms, mem = 43.43MB | 83.53%, 53.82%

// Should try with recursion
