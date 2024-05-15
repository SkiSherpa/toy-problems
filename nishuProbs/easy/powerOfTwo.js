/**
 * https://leetcode.com/problems/power-of-two/
Determine if n is a power of 2.
 * @param {number} n
 * @return {boolean}
 */
//  IP: an int
// OP: bool - true if power of two

// instead of taking square root, which fails when x === odd num
// multiply by 2 until you hit n or go over
let isPowerOfTwo = function(n) {
    if (n === 1 || n === 2) {
        return true;
    }
    let product = 2;
    while (product <= n) {
        product *= 2;
        if (product === n) {
            return true;
        }
    }
    return false;
}
// This is clearly the way to go
// t = O(n^x), where 0 < x < 1
// m = O()
// gpt says that t = O(log(n)) exactly

// this mathy way doesn't seem to work. It has some rounding error.
// I bet it would work in python.
let _isPowerOfTwo = function(n) {
    if (n === 3) {
        return false;
    }
    function getBaseLog(x) {
        return Math.log(x) / Math.log(2);
    }
    const isInt = getBaseLog(n);

    if (Number.isInteger(isInt) && isInt >= 0) {
        return true;
    }
    return false;
};

console.log(isPowerOfTwo(8), true);
console.log(isPowerOfTwo(536870912), true); // 1109 / 1110
