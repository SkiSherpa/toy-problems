/* climbing stairs
Each time you can climb 1 or 2 steps
How many distinct ways can you climb to the top?
ex: 5 stairs
1 1 1 1 1

1 1 1 2
1 1 2 1
1 2 1 1
2 1 1 1

1 2 2
2 1 2
2 2 1
= 8
[1, 4, 3]

ex: 4 stairs
1 1 1 1
1 1 2
1 2 1
2 1 1
2 2
= 5 ways
[1, 3, 1]

ex: 3 stairs
1 1 1
1 2
2 1
= 3
*/
/*
IF odd number of tot stairs
    count the 1 for all 1 steps
    count n-1 set of square matricies - 5 stairs, you'll have 4 rows of a square matrix
    count n-2 set of
    ----
    11111 -> x1
    1112 -> x4
    112 -> x3
    -----
    111 -> x1
    12 -> 2
    ----- 7 stairs
    1111111 -> x1
    111112 -> x6
    11122 -> x5
    1222 -> x4
IF even number
    count
*/
/* recursion - think about it as walking down the stairs

starting a n
you can do either n-1 or n-2

base case(n) - IF n === 0, return 1
 IF n < 0, return 0;

return countSteps(n-1) + countSteps(n-2)
*/
let _countSteps = function(n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 0;
    }
    return countSteps(n - 1) + countSteps(n - 2);
}

// console.log(countSteps(5), "ans: 8");
// console.log(countSteps(13), "ans: 377");
// console.log(countSteps(40), "ans: 165580141");
// how to modify this to do in linear time
// hint: memoization
// right now its t = O(2^n) - real bad

// memoization lets you store answers for functions that have been prev run to specific inputs
// In this one we store them in array set to the index of the IP n.
let countSteps = function(n, prevVals = []) {
    if (prevVals[n] != null) {
        return prevVals[n];
    }

    let result;

    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 0;
    } else {
        result = countSteps(n - 1, prevVals) + countSteps(n - 2, prevVals);
    }
    prevVals[n] = result;
    return result;
}

console.log(countSteps(13), "ans: 377");
console.log(countSteps(40), "ans: 165580141");
// mine is running slow, slower than not having memoize
// I wasn't passing prevVals
