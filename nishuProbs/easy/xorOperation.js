/*
You are given an integer n and an integer start.

Define an array nums where nums[i] = start + 2 * i (0-indexed) and n == nums.length.

Return the bitwise XOR of all elements of nums.



Example 1:

Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.
Example 2:

Input: n = 4, start = 3
Output: 8
Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.


Constraints:

1 <= n <= 1000
0 <= start <= 1000
n == nums.length

*/
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
// IP: 2 ints - n and start
// OP: a number
// The ^ is like an operator, but needs to be done with vars that are numbers
// It's NOT "to the power" like in math, but its own thing in code

// define result var = start + 2 * i
// define an array "nums", "n" is the length of "nums"
    // use i+1 for the first part of the loop
    // each element, w/ i as index, is nums[i] = start + 2 * i
    // result ^= start + 2 * i
// return result

var xorOperation = function(n, start) {
    let i = 0;
    let result = 0; // 0^ any number is that number
    for (i; i < n; i++) {
        result ^= start + 2 * i;
    }
    return result;
};
// t = O(n), where n is n
// m = O(1), I didn't end up making an array, just used the nums on each iteration
// t = 53ms 51.45% | m = 48.96MB 8.70%
console.log(xorOperation(5, 0), 'ans: ', 8);
console.log(xorOperation(4, 3), 'ans: ', 8);
