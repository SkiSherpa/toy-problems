// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]


// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// IP: an array of strs
// OP: nothing to return - modify in place
// C: mem = O(1)

// two pointers for the front (i) and back (j) of s
// define length - floor(s.length / 2)
// loop through to length
    // switch chars at i and j
var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    let len = Math.floor(s.length / 2);

    while (i < len) {
        let curFront = s[i];
        let curBack = s[j];
        s[i] = curBack;
        s[j] = curFront;
        i++;
        j--;
        console.log(s);
    }
    return s;
};

// let s = ["h","e","l","l","o"];
// let ans = ["o","l","l","e","h"];

// console.log(reverseString(s), "ans, ", ans);
// let s1 = ["H","a","n","n","a","h"];
// let ans1 = ["h","a","n","n","a","H"];

// console.log(reverseString(s1), "ans:", ans1);

// t = O(n), n is half the length of s
// m = O(1), modifies the arr in place, only 5 vars created
// t = 72ms 86.82%, m = 57.25MB 13.36%
