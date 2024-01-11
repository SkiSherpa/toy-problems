/*
https://leetcode.com/problems/reverse-integer/description/
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21


Constraints:

-231 <= x <= 231 - 1
*/
/**
 * @param {number} x
 * @return {number}
 */
// IP: a number | x < (2^32) -1
// OP: a number | -2^32 < num < (2^32) - 1
// C: if OP number goes into bigInt range return zero
//      -2^32 < OP num < (2^32) - 1
// C: a negative num will return a negative num
// C: leading zeros should be romved

// IF x is a big int
    // return zero - assuming that any BigInt IP will result in a BigInt return
// create isNeg flag set to false;
// IF x is negative
    // set isNeg to true
    // reassign x to |x|

// transform x to a string
// create placeholder "ReverseStr", but is an empty arr - to hold reverse number
// loop through xString backwards
    // place in ReveseStr

// transform back to number - "reverseNum"
// IF isNeg is true
    // mult revNum by -1
// IF reverse number is with in the normal num range
    // return reverseNum
// return 0;
var reverse = function(x) {
    // Check if x is outside the 32-bit integer range
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
        return 0;
    }

    let strNum = JSON.stringify(x);
    let isNeg = false;
    if (x < 0) {
        isNeg = true;
        x = Math.abs(x);
    }
    // reverse and place into arr - concat slower than .join, O(n+m) < O(n)
    let reverseStrArr = [];
    let len = strNum.length - 1;
    for (let i = len; i >= 0; i--) {
        reverseStrArr.push(strNum[i]);
    }
    // make a number
    revNum = parseInt(reverseStrArr.join(''), 10); // parseInt & join are both O(n)
    // IF x was a negative number
    if (isNeg) {
        revNum *= -1;
    }

    // Check if x revNum outside the 32-bit integer range
    if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) {
        return 0;
    }

    return revNum;
};
// t = O(n), is the number of digits in x
    // for loop, join, parseInt are all O(n) -> n+n+n = 3n ~> O(n)
// m = O(n), is the number of digits in x
    // the temp arr holds every digit
// t = 68ms, 34.31% | m = 44.24MB 25.66%

// console.log('ANS: 123',reverse(321));
// console.log('ANS: -123',reverse(-321));
console.log('ANS: 0',reverse(1n));
