/*
https://leetcode.com/problems/happy-number/
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
Example 2:

Input: n = 2
Output: false


Constraints:

1 <= n <= 231 - 1
*/
/**
 * @param {number} n
 * @return {boolean}
 */
// IP: A Number
// OP: A bool - true IF n is a happy number
// C: except 1, all single digits would return false
// C: only non-zero IP

// do a solutiont that splits numbers into an array and a string. See if there are any runtime differences

// edge case of 1 and single digits


// tf into string
// IF sum is a single digit
    // IF equal to 1
        // return true
    // otherwise, return false

// create sum var = 0

// loop through strN
    // tf back to number
    // square each number
    // add to "sum"

// Otherwise, run the fn again with new sum as input

var isHappy = function(n) {
    let strN = JSON.stringify(n);
    if (strN.length === 1) {
        if (strN === "1" || strN === "7") {
            return true;
        }
        return false;
    }
    let sum = 0;
    for (let i = 0; i < strN.length; i++) {
        let curSqrNum = Number(strN[i])**2;
        sum += curSqrNum;
    }
    return isHappy(sum);
};

console.log(isHappy(2)); // false
console.log(isHappy(7)); // true
console.log(isHappy(19)); // true

// t = 42ms | mem = 42.93MB ; 98.88%  |  72.04%
