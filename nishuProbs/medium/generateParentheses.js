/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"] - invalid -> )(

Ex3:
IP: n = 2
OP: ["()()", "(())"] - invalid -> )()(, ))((, )()(

Ex4:
IP: n = 4
OP: [ (((()))), (()()()), (())(()), ((()))(), ()((()))...]
Constraints:

1 <= n <= 8
*/
/**
 * @param {number} n
 * @return {string[]}
 */
// IP: a number - 1 <= n <= 8
// OP: an array of strings - generated valid parentheses

// Use a stack structure to determine if valid set of parenths

var generateParenthesis = function(n) {

};
