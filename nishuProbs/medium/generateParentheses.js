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

var _generateParenthesis = function(n) {
    // holds the current generate parentheses pattern
    let curParen = [];
    let result = [];

    // The 3 rules - in a different order to reflect recursive code
    // only add an open paren IF open < n
    // only add a closing paren if close < open
    // Valid IF open === n and close === n
    function generate(open, close) {
        // base case
        if (open === n && close === n) {
            console.log(curParen);
            result.push(curParen.join(''));
        }
        if (open < n) {
            curParen.push("(");
            generate(open + 1, close);
            curParen.pop();

        }
        if (close < open) {
            curParen.push(")");
            generate(open, close + 1);
            curParen.pop();
        }
    }
    generate(0, 0);
    return result;
};
console.log(generateParenthesis(2));
// t = 2^2n / sqrt(n) = 4^n / sqrt(n), each leaf can give rise to two more leafs
// t is a power function
// t = 5%

// chatGPT's sol, similar and much faster
var generateParenthesis = function(n) {
    let result = [];

    function backtrack(curParen, open, close) {
        if (curParen.length === 2 * n) {
            result.push(curParen);
            return;
        }

        if (open < n) {
            backtrack(curParen + '(', open + 1, close);
        }

        if (close < open) {
            backtrack(curParen + ')', open, close + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
};
// t = O(4^n / sqrt(n))
// t = 97.73%
// It seems like you can't escape the power fn runtime
