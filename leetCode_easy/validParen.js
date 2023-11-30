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
// YOU CANT HAVE NESTED PARENTH, LIKE ({[]}) - you can have this...

// As soon as one opens, it has to close
// loop through s, start at 1, go up by 2
    // if the current is ) && prev = (
        // continue
    // otherwise, return false

var _isValid = function(s) {
    if (s.length % 2 === 1) {
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
// Someone solved it using a stack:
var isValid = function(s) {
    let stack = []; // create an empty stack to store opening brackets
    for (let c of s) { // loop through each character in the string
        // console.log("begin, stack: ", stack);
        if (c === '(' || c === '{' || c === '[') { // if the character is an opening bracket
            // console.log("push happened");
            stack.push(c); // push it onto the stack
        } else { // if the character is a closing bracket
            console.log(stack,"cur: ", c, "last item in stack: ", stack[stack.length - 1])
            if (!stack.length || // if the stack is empty or
                (c === ')' && stack[stack.length - 1] !== '(') || // the closing bracket doesn't match the corresponding opening bracket at the top of the stack
                (c === '}' && stack[stack.length - 1] !== '{') ||
                (c === ']' && stack[stack.length - 1] !== '[')) {
                    console.log('early return of false');
                return false; // the string is not valid, so return false
            }
            // console.log("will pop, stack: ", stack);
            stack.pop(); // otherwise, pop the opening bracket from the stack
            // console.log("after pop, stack: ", stack);
        }
        // console.log("end of iteration: ", stack);
    }
    // IF the stack is zero, which is falsy, return the bang
    return !stack.length; // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,
                          // so the string is valid, otherwise, there are unmatched opening brackets, so return false
};

// console.log(isValid("()")); // true
// console.log(isValid("()[]")); // true
// console.log(isValid("([])")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("()[]{}")) // true
// test case 76:
// console.log(isValid("([)]")); // false
// console.log(isValid("((")); // false
// console.log(isValid("(")); // false
// console.log(isValid("(({}[]){})")); // true
console.log(isValid("(({[}]){})")); // false
