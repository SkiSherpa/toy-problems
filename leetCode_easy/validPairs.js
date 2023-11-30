// Write a function that can tell if ()'s are properly closed. Only using ()
// practice using the stack data structure
// its valid if it works like math parenths

// create stack to hold parenths
// loop through s
    // IF current is an (
        // push it onto the stack
    // otherwise, IF a clossing )
        // IF the stack is empty AND ... I'm not sure whats happening
            // return false
        // if it makes it passed ^^, then it matches
        // want to remove the open ( from the stack
// return bang length of stack, if zero, which is falsy, will return true

let validPairs = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === '(') {
            stack.push('(');
        } else {
            console.log(stack[stack.length - 1], stack, "c: ", c);
            // handling if the stack is empty and a ) comes up
            // OR
            // handling too many ), prompts early return
            // getting the last item in the stack: stack[stack.length - 1]
            if (stack.length === 0 || stack[stack.length - 1] === ')') {
                console.log('early return of false')
                return false;
            }
            stack.pop();
        }
    }
    console.log('made it to the end, stack legnth: ', stack.length)
    return !stack.length;
}

// console.log(validPairs('()')); // true
// console.log(validPairs('(())')); // true
// console.log(validPairs('(()')); // false
// console.log(validPairs('(()()()(()))')); // true
// console.log(validPairs('(()))()')); // false
console.log(validPairs(')')); // false
