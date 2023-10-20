// Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.

// Example 1:

// Input: s = "1001"
// Output: false
// Explanation: The ones do not form a contiguous segment.
// Example 2:

// Input: s = "110"
// Output: true


// Constraints:

// 1 <= s.length <= 100
// s[i]​​​​ is either '0' or '1'.
// s[0] is '1'.

// IF any set of 1's appears after the first
// IP: a string of binary nums
// OP: Bool - true IF any 1's repeat
// C: 1 <= s.length <= 100, the first val is always 1
// E: IF s = '1' return true - found from testing

var checkOnesSegment = function(s) {
    if (s.length === 1) {
        return true;
    }
    let isOneAfter = false;
    let zeroAppear = false;
    let i = 1;
    while (i < s.length) {
        // zero has appeared
        if (s[i] === '0') {
            zeroAppear = true
        }
        // a 1 has appeared after a zero has appeared
        if (zeroAppear && s[i] === '1') {
            isOneAfter = true
        }
        // final check
        if (isOneAfter) {
            return false;
        }
        i++;
    }
    return true;
};

console.log(checkOnesSegment('1001')); // false
console.log(checkOnesSegment('110')); // true
console.log(checkOnesSegment('1')); // true
console.log(checkOnesSegment('10')); // true
console.log(checkOnesSegment('1001000')); // false

// while loop:
// Runtime: 61ms
// Memory: 42.21 MB

// FOR loop:
// Runtime: 62ms
// Memory: 42.26 MB

// IN terms of efficency: FOR < While

// Other sol:
var _checkOnesSegment = function(s) {
    return s.indexOf('01') < 0;
};
// Runtime: 51ms
// Memory: 41.47 MB
// Time complexity of indexOf = O(n), this on could

var __checkOnesSegment = function(s) {
    if (s.length === 1) {
        return true;
    }
    for (let i = 2; i < s.length; i++) {
        if (s[i-1] === '0' && s[i] === '1') {
            return false;
        }
    }
    return true;
}
// Runtime: 62ms
// Memory: 41.81 MB
