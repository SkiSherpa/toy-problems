/**
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.


Constraints:

0 <= x <= 231 - 1

 * @param {number} x
 * @return {number}
 */
//  IP: a num - int
//  OP: a num - rounded ans returned, an int
//  C: no imaginary nums, all return vals are non-negative
// C: can't use pow(x, 0.5) or **

// x*x = x^2
// x^2 / x = x
// 36 / 2 = 18 / 2 = 9 / 2 = 4.5
// check 5, check 6

// 8 / 2 = 4 / 2 = 2

// current = 3
// while loop of true
    // IF current * current === x
        // return current

    // IF current*current > x
        // return current - 1
    // current++
var _mySqrt = function(x) {
    if (x === 0) {
        return 0;
    }
    if (x < 4) {
        return 1;
    }
    if (x < 8) {
        return 2;
    }
    let current = 3;

    while (true) {
        if (current*current === x) {
            return current;
        }
        if (current*current > x) {
            return current - 1;
        }
        current++;
    }
};
// t = 96ms, mem = 43.52MB
// t is bad, but works beats 11% of users

function mySqrt(x) {
    // as per the constrain x lies from 0 - 2^31-1
    let low = 0;

    // to calculate square root of number means
    // we need to find the square of that function
    // meaning if 4 is the target then 2 will be it's
    // input as 2 x 2 == 4
    // meaning the square will always be smaller than
    // the squareroot i.e 4 > 2
    // so high pointer will be the number itself as
    // the higher we go the further away we go from
    // the square of the that target
    let high = x;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      const square = mid * mid;
        console.log("square:", square, "mid: ", mid);
      // now if square is equal to or less than
      // our target then we've found the square
      // root, so we can directly return the mid pointer
      // OR our square is lesser than the x
      // we need to move to right, as the right we
      // go the smaller the greater the square becomes
      // so move right and discard left section
      if (square <= x) low = mid + 1;
      // else we need to move to left as our
      // square is greater than x
      else high = mid - 1;

      console.log("at end, square: ", square, "mid", mid, "high: ", high);
    }

    // at the end of the iteration our high
    // pointer will point to the correct number
    return high;
  }

  console.log(mySqrt(100));
