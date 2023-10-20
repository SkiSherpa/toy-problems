// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// n = 1 => n

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3 => n + 2(n-1)
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// IP: 4
// 1. 1+1+1+1
// 2. 1+1+2
// 3. 2+1+1
// 4. 2+2

// IP: 5 => n + 4(n-1) + 3(n-2)
// 1. 1+1+1+1+1 = n
// 2. 1+1+1+2
// 3. 1+1+2+1
// 4. 1+2+1+1
// 5. 2+1+1+1
// 6. 1+2+2
// 7. 2+2+1
// 8. 2+1+2
// OP: count coeficients of eqn = 8

// IP: 7 => n + 6(n-1) + 5(n-2)



// Constraints:

// 1 <= n <= 45
/**
 * @param {number} n
 * @return {number}
 */
// IP: a number - totol number of stairs to climb
// OP: a number, differnt way to climb stairs

// IF n is even = 2*n
// IF n is odd = more complicated...
var climbStairs = function(n) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 3;
    }
    if (n % 2 === 0) {
        return n*2;
    } else {
        return 1 + (n-1) + (n-2);
    }

};
