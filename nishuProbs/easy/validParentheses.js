// given a string s, that can contain any chars, but can contain (),[],{}
// Return true if all brackets are balanced
// False if not

let test = '(a)' // true
// let fail = 'a)b[]' // false
// let test2 = 'ab[]' // true
// let fail2 = '([)]' // false
// let fail3 = '))ab[]' // false
// let fail4 = '()ab)' // false

// IP: a string - any char
// OP: boolean - true if contains any balanced (),[],{}

// remove all chars that are not my target parenth

// init stack = []
// loop through what's left of s
    // IF stack.length is zero AND current is closing
        // return false
    // IF the current is open
        // add to stack
    // OTHERWISE, its a close
        // IF current close matches the last item in the stack
            // pop off the last item in stack
// IF length of stack is zero
    // return true
// return false
let isValid = function (newS) {
    // let newS = '';
    // for (let i = 0; i < s.length; i++) {
    //     let curChar = s[i];
    //     if (['(', ')', '[', ']', '{', ']'].includes(curChar)) {
    //         newS = newS.concat(s[i]);
    //     }
    // }

    let stack = [];
    /* let closing = new Set (')', ']', '}') */
    for (let i = 0; i < newS.length; i++) {
        if (stack.length === 0 && [')', ']', '}'].includes(newS[i])) {
            return false;
        }
        /*
        if (closing.has(newS[i]) && stack.length === 0 ) {
            return false;
        }
        */
        if (['(', '[', '{'].includes(newS[i])) {
            stack.push(newS[i]);
        } else {
            if (newS[i] === ')' && stack[stack.length - 1] === '(') {
                stack.pop();
            } else if (newS[i] === ']' && stack[stack.length - 1] === '[') {
                stack.pop();
            } else if (newS[i] === '}' && stack[stack.length - 1] === '{') {
                stack.pop();
            }
        }
    }
    // console.log(stack);
    if (stack.length === 0) {
        return true;
    }
    return false;
}

// t = O(n), n length of s
// m = O(n), n lenght of s

/*
Instead of concating with a string, which gives n^2 runtimes for commented out part.
You could do an array, pushing to an array is constant time.

But solution of using just the loop on the bottom works too.
*/
console.log(isValid(test), true);
let fail = 'a)b[]' // false
let test2 = 'ab[]' // true
let fail2 = '([)]' // false
let fail3 = '))ab[]' // false
let fail4 = '()ab)' // false
console.log(isValid(fail), false);
console.log(isValid(fail2), false);
console.log(isValid(fail3), false);
console.log(isValid(fail4), false);
console.log(isValid(test2), true);
