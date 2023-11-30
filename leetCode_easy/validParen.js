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
// assume you could have something nested like: ([])
// assume only valid entries
var isValid = function(s) {

};

console.log(isValid("()")); // true
console.log(isValid("([])")); // true
console.log(isValid("(]")); // false
console.log(isValid("()[]{}"))
