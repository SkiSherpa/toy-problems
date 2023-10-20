// Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25


// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

// IP: 2 nums, x = num, n = int
// OP: a num
// -100.0 < x < 100.0
// -2^31 <= n <= 2^31-1
// n is an integer.
// Either x is not zero or n > 0.
// -104 <= xn <= 104

// result var = 1;
// make length var = abs(n)
// loop n times and multply x by result
// IF n > 0
    // return result
// otherwise
    // return 1 / result
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }
    let result = 1;
    let len = Math.abs(n);
    for (let i = 0; i < len; i++) {
        result *= x;
    }
    if (n > 0) {
        return result;
    } else {
        return 1/result;
    }
};

-2147483648
