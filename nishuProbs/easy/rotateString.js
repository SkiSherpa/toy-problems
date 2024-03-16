/*
* https://leetcode.com/problems/rotate-string/
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.

For example, if s = "abcde", then it will be "bcdea" after one shift.


Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false


Constraints:

1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.
*/
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// IP: two strings - s and goal
// OP: a bool - true if s can be rotated to match goal
// doubling the s, s+s
// searching for goal in s+s
var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    let doubleS = s.concat(s);
    if (doubleS.indexOf(goal) >= 0) {
        return true;
    }
    return false;
};
// t = 63ms 11%, m 49.02MB 35.33%
// goal of const space
/*
def check_for_rotation(s, goal):
    if len(s) != len(goal):
        return False
    for rotation_amt in range(len(s)):
        if is_rotated(s, goal, rotation_amt):
            return True
    return False

def is_rotated(s, goal, rotation_amt):
    # returns true if goal is equal to s rotated by rotation_amt
    for i in range(len(s)):
        if s[i] != goal[(i + rotation_amt) % len(s)]:
            return False
    return True
*/
var constSpaceRotateString = function (s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        if (isRotated(s, goal, i)) {
            return true;
        }
    }
    return false;
}
var isRotated = function (s, goal, rotationAmount) {
    // returns true if goal is equal to s rotated by rotation_amt
    // rtn = 1, s.len = 5
    for (let i = 0; i < s.length; i++) {
        // s[4] = g, g[4+1 % 5] = 0
        if (s[i] !== goal[(i + rotationAmount) % s.length]) {
            return false;
        }
    }
    return true;
}
// console.log(constSpaceRotateString("abcdeea", "eaabcde"), true);
console.log(constSpaceRotateString("gcmbf", "fgcmb"), true);


// // find index of first letter in s in goal set to j
// // i = 0;
// // set length of goal to len
// // start loop through both s and goal
//     // i++;
//     // j++;
//     // IF j goes above len
//         // set j = 0;
// let j = goal.indexOf(s[0]);
// let i = 0;
// let len = s.length - 1;

// while (i < len) {
//     console.log(i, s[i], j, goal[j]);
//     if (s[i] !== goal[j]) {
//         return false;
//     }
//     i++;
//     j++;
//     if (j > len) {
//         j = 0
//     }
// }
// return true;

// console.log(rotateString("abcde", "cdeab"), true);
// console.log(rotateString("abcde", "abced"), false);
// console.log(rotateString("abcde", "abc"), false);
// console.log(rotateString("abc", "abcde"), false);
console.log(rotateString("abcdeea", "eaabcde"), true);
// t = O(4n), when n is the length of s
// m = O(2n),
