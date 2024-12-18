/*
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

Example 1:
Input: n = 5
Output: true
Explanation: The binary representation of 5 is: 101

Example 2:
Input: n = 7
Output: false
Explanation: The binary representation of 7 is: 111.

Example 3:
Input: n = 11
Output: false
Explanation: The binary representation of 11 is: 1011.


Constraints:

1 <= n <= 2^31 - 1
*/
// True IF 01010101 OR 10101, potterns
// convert the int > bits > string of bits >
// loop over the str version of bits
// IF not repeating retrun False
// return true
function hasAlternatingBits(n) {
    var bits = n.toString(2);
    for (var i = 1; i < bits.length; i++) {
        var prev = i - 1;
        if (bits[i] === bits[prev]) {
            return false;
        }
    }
    return true;
}
console.log(hasAlternatingBits(5), true);
console.log(hasAlternatingBits(7), false);
console.log(hasAlternatingBits(11), false);
