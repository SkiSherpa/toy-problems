/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false


Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/
/**
 * @param {string} s
 * @return {boolean}
 */
// IP: a str
// OP: a bool - true if correct order of parenths
// C: must have closing parenths
// assume only valid entries
// YOU CANT HAVE NESTED PARENTH, LIKE ({[]})

// As soon as one opens, it has to close
// loop through s, start at 1, go up by 2
    // if the current is ) && prev = (
        // continue
    // otherwise, return false

var isValid = function(s) {
    if (s.length === 1 || s.length % 2 === 1) {
        return false;
    }

    for (let i = 1; i < s.length; i+=2) {
        if (s[i] === ')' && s[i-1] === '(') {
            continue;
        } else if (s[i] === ']' && s[i-1] === '[') {
            continue;
        } else if (s[i] === '}' && s[i-1] === '{') {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

// console.log(isValid("()")); // true
// console.log(isValid("()[]")); // true
// console.log(isValid("([])")); // false
// console.log(isValid("(]")); // false
// console.log(isValid("()[]{}")) // true
// test case 63:
console.log(isValid("([)]")); // false
console.log(isValid("((")); // false
console.log(isValid("(")); // false
