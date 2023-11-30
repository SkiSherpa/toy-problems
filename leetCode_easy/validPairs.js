// Write a function that can tell if ()'s are properly closed. Only using ()
// practice using the stack data structure
// its valid if it works like math parenths

// create stack to hold parenths
// loop through s
    // IF current is an (
        // push it onto the stack
    // otherwise, IF a clossing )
        // IF the stack is empty OR ... I'm not sure whats happening
            // return false
        // if it makes it passed ^^, then it matches
        // want to remove the open ( from the stack
// return bang length of stack, if zero, which is falsy, will return true

let validPairs = function (s) {
    let stack = [];

}

console.log(validPairs('()')); // true
console.log(validPairs('(())')); // true
console.log(validPairs('(()')); // false
console.log(validPairs('(()()()(()))')); // true
