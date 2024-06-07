/**
 * https://leetcode.com/problems/divide-two-integers/description/
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−2^31, 2^31 − 1]. For this problem, if the quotient is strictly greater than 2^31 - 1, then return 2^31 - 1, and if the quotient is strictly less than -2^31, then return -2^31.


Example 1:
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.

Example 2:
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.


Constraints:

-231 <= dividend, divisor <= 231 - 1
divisor != 0 -> I assume this means it can't be an input

 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// C: can't use mult or division or %
// C: ans are floored
// handle when divisor = 0
// handle negative cases
// keep subtracting divisor from dividend,
// until you hit a neg result and return counter
let tooLow = function (n) {
    // console.log('too low hit', n, n < -Number.MAX_SAFE_INTEGER)
    return n < -Number.MAX_SAFE_INTEGER
}
let tooHigh = function (n) {
    // console.log('too Hihg hit', n, n > Number.MAX_SAFE_INTEGER)
    return n > Number.MAX_SAFE_INTEGER;

}

var divide = function(dividend, divisor) {

    let isTooLow = tooLow(dividend);
    let isTooHigh = tooHigh(dividend);
    if (isTooLow) {
        result = divisor === -1 ? 2147483647 : -2147483647;
        return result;
    }
    if (isTooHigh) {
        return 2147483647;
    }

    if (dividend === divisor) {
        return 1;
    }
    if (dividend + divisor === 0) {
        return -1;
    }
    if (divisor === 1) {
        return dividend;
    }
    if (divisor === -1) {
        return -dividend;
    }

    let isNeg = false;
    let i = 0

    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
        isNeg = true;
    }

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend >= divisor) {
        dividend -= divisor
        if (isNeg) {
            i--
        } else {
            i++
        }
    }
    if (i > 2147483647) {
        return 2147483647;
    }
    if (i < -2147483648 ) {
        return -2147483647;
    }
    return i;
};

console.log(divide(-2147483648, -1), -2147483647) // this number is out of range
// -2147483647 = -2 ** 31, this input is out of 32 bit int range
console.log(divide(2147483648, 1), 2147483647)
console.log(divide(0, 3), 0);
console.log(divide(10, 3), 3);
console.log(divide(7, -3), -2);
/*
   if (dividend === -2147483648) {
        if (divisor === -1) {
            return 2147483647;
        }
        return -2147483647;
    }
*/
