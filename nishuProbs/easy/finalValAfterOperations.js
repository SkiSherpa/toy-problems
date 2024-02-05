/*
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.



Example 1:

Input: operations = ["--X","X++","X++"]
Output: 1
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
Example 2:

Input: operations = ["++X","++X","X++"]
Output: 3
Explanation: The operations are performed as follows:
Initially, X = 0.
++X: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
X++: X is incremented by 1, X = 2 + 1 = 3.
Example 3:

Input: operations = ["X++","++X","--X","X--"]
Output: 0
Explanation: The operations are performed as follows:
Initially, X = 0.
X++: X is incremented by 1, X = 0 + 1 = 1.
++X: X is incremented by 1, X = 1 + 1 = 2.
--X: X is decremented by 1, X = 2 - 1 = 1.
X--: X is decremented by 1, X = 1 - 1 = 0.


Constraints:

1 <= operations.length <= 100
operations[i] will be either "++X", "X++", "--X", or "X--".
*/
/**
 * @param {string[]} operations
 * @return {number}
 */
// IP: an array - of strs
// OP: a number - the final value after operations take place

// create a starting var "x" set to zero
// loop through "operations"
    // IF the middle char in current item is +
        // add one to "x"
    // otherwise
        // subtract one from "x"
// return x

var _finalValueAfterOperations = function(operations) {
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i][1] === "+") {
            x++;
        } else {
            x--;
        }
    }
    return x;
};

console.log(finalValueAfterOperations(["--X","X++","X++"]), "ans: ", 1);
// t = O(n), where n is the number of items in operations array
// m = O(1), creating the x var, that is being overwritten each time
// t = 55ms 62.21%, m = 48.51MB 26.25%

// I think it could run faster if I define the length of the array before the loop, so it doesn't have to keep doing that calc each iteration.
var finalValueAfterOperations = function(operations) {
    let x = 0;
    let len = operations.length;
    for (let i = 0; i < len; i++) {
        if (operations[i][1] === "+") {
            x++;
        } else {
            x--;
        }
    }
    return x;
};
// t = 42ms 98.44%, m = 48.98MB, 21.52%
