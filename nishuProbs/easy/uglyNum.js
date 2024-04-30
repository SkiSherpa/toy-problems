/**
 * https://leetcode.com/problems/ugly-number/
An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.

Given an integer n, return true if n is an ugly number.


Example 1:
Input: n = 6
Output: true
Explanation: 6 = 2 × 3

Example 2:
Input: n = 1
Output: true
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

Example 3:
Input: n = 14
Output: false
Explanation: 14 is not ugly since it includes the prime factor 7.


Constraints:

-2^31 <= n <= 2^31 - 1
 * @param {number} n
 * @return {boolean}
 */
// IP: a pos int
// OP: bool - true if n is divisible by 2, 3, and 5 AND only those numbers
    // but ex1 is only 2 and 3
    // ex3 is divisible by 2, but also has 7.

// create helper fn's to divide by 2,3,5
    // save to var
    // recursive call for each
        // base case for if n equals 2,3 or 5
        // return that value if an int
//    create arr of [2,3,5]
// call helpers

// IF all three values are 2, 3, 5 or floats
    // return true
// return false

let findPrime = function(n, num) {
    n = n/num;
    if (n % num === 0 && n % n === 0) {
        return n;
    }
    if (n < 2) {
        return n;
    }
    return findPrime(n, num);
}

var _isUgly = function(n) {
    if (n <= 0) {
        return false;
    }
    if (n <= 3 || n === 5) {
        return true
    }
    let prime2 = findPrime(n, 2);
    let prime3 = findPrime(n, 3);
    let prime5 = findPrime(n, 5);
    console.log(prime2, prime3, prime5);
    let is2 = false;
    let is3 = false;
    let is5 = false;
    if (prime2 === 2 || prime2 === 3 || prime2 === 5) {
        is2 = true;
    }
    if (prime3 === 2 || prime3 === 3 || prime3 === 5) {
        is3 = true;
    }
    if (prime5 === 2 || prime5 === 3 || prime5 === 5) {
        is5 = true;
    }
    if (is2 || is3 || is5) {
        return true;
    }
    return false;
};

let isUgly = (n) => {
    while (n > 1) {
        if (n % 2 === 0) {
            n /= 2;
        } else if (n % 3 === 0) {
            n /= 3;
        } else if (n % 5 === 0) {
            n /= 5;
        } else {
            return false;
        }
    }
    return n === 1;
}
// t = O(n^x), where 0 < x < 1
// m = O(1),
// there prob is some way to do a dynamic var...
// console.log(isUgly(14));
console.log(isUgly(8), true); // 941/1013
console.log(isUgly(7), false); // 955/1013
