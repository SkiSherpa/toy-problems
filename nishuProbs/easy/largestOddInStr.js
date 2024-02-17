/*
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.


Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

Example 2:
Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".

Example 3:
Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.
*/
// IP: a str - an int
// OP: a str - the largest odd num, can be a substring
// C: return an empty str if no odd num found

// The last digit must be odd to be an odd num
/*
IF s is odd
    return s
loop until s is empty
    pop off last digit
    check IF s is odde

    // turn s into an array
    // pop off last num
    // turn new s into a number
    // if s is odd
        // return str version of s
    // turn new s back to str
*/
let largestOddInStr = function (s) {
    if (s.length === 0) {
        return '';
    }
    if (parseInt(s[s.length - 1]) % 2 === 1) {
        return s;
    }
    while (s.length > 0) {
        s = s.split('');
        s.pop();
        if (s.length === 0) {
            return '';
        }
        let newS = '';
        newS = s.join('');

        if (parseInt(newS[newS.length - 1]) % 2 === 1) {
            console.log("hit")
            return newS;
        }
        s = newS;

    }
    return '';
}

console.log(largestOddInStr("4206"), 'empty string');
console.log(largestOddInStr("52"), '5');
console.log(largestOddInStr("37033"), '37033');
console.log(largestOddInStr("3560"), '35');
// console.log(239537672423884969653287101 % 2);
// This is one of the test numbers, it causes it to time out:
// One of the test numbers is very large, it takes 87KB of memory to store it. It's also all even digits - once code passed it is all even.
// I had a sol in leetcode when I opened the problem, it passes all the tests
// I think the .split and .join are slowing everything down
// I think its one of my solutions, it looks like mine

var largestOddNumber = function(num) {
    // check if the last digit is num
    if (Number(num[num.length - 1]) % 2 !== 0) {
        return num;
    }
    let numCopy = num;
    // loop to slice off last digit in num
    for (let j = num.length - 1; j >= 0; j--) {
        let newNum = num.slice(0,j);
        if (Number(newNum[newNum.length - 1]) % 2 === 1) {
            return newNum;
        }
        num = newNum;
    }

    // finding single digist
    for (let i = 0; i < numCopy.length; i++) {
        if (Number(numCopy[i]) === 1) {
            return "1";
        }
        if (Number(numCopy[i]) % 2 === 1) {
            return numCopy[i];
        }
    }
    return "";
};
// t = O(n^2), loop with a nested slice (O(n)), n is the number of digits is s
    // with using Number: t = 63ms 61.73%
    // with using parseInt: t = 70ms 33.88%
    // That was an unexpected result;
// m = O(n), where n is the number of digits in s

// The top soultion does a lot of tf strings to arrays and back.
// Where the bottom keeps everything as a string, only tf the last digit
// after slicing, but then returns the same string
// The numCopy iterates moving forward, b/c the first reverse loop would have caught an odd number at the end of the number.
// The top is also O(n^2), but I guess a bigger one
    // n*(n+n) = n * 2n = 2n^2
    // The bottom would just be n^2
