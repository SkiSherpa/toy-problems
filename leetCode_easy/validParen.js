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

// create flag vars for regular parenth, brackets, and squiggles set to true
// Loop through string
    // IF current char is (, [, or {
        // set corrisponding flag to false
    // IF reg, bra, squig are false && current char is a closing reg, bra, squig
        // set corrisponding flag to true
// IF all flags are true
    // return true
// return false
var isValid = function(s) {
    if (s.length === 1) {
        return false;
    }
    let reg = true;
    let bra = true;
    let squig = true;
    for (let i = 0; i < s.length; i++) {
        let cur = s[i];
        if (cur === '(') {
            reg = !reg;
        }
        if (cur === '[') {
            bra = !bra;
        }
        if (cur === '{') {
            squig = !squig;
        }
        if (!reg && cur === ')') {
            reg = !reg;
        }
        if (!bra && cur === ']') {
            bra = !bra;
        }
        if (!squig && cur === '}') {
            squig = !squig;
        }
    }
    if (reg && bra && squig) {
        return true;
    }
    return false;
};

// console.log(isValid("()")); // true
// console.log(isValid("([])")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("()[]{}")) // true
// test case 63:
console.log(isValid("([)]")); // false
console.log(isValid("((")); // false
console.log(isValid("(")); // false
