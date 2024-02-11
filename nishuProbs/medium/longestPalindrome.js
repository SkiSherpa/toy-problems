/*
Given a string s, return the longest
palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"


Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/
/**
 * @param {string} s
 * @return {string}
 */
// IP: a string
// OP: a substring - the longest palindrome substring
// E: a single letter is a palindrome?

// make a sub function to determine if a string is a palindrome
// create i(start) and j(end) pointers
// loop through substring
    // if (subString[i] !== subString[j])
        // return false
// return true

// create longest = '';
// make a start = 0 and end = 1 index pointers
// WHILE (start < end)
    // reset end = start + 1;
    // loop through the rest of s,
        // IF current substring from (start, end) is a pali.
        // && substring is longer than "longest"
            // set longest to current substring
        // moving "end" up by one
    // move start up by one

var _longestPalindrome = function(s) {
    if (s.length === 1) {
        return s;
    }
    let cache = new Map();
    let isPalindrome = function(subString, start, end, cache) {
        if (cache[(start, end)]) {
            return cache[(start, end)];
        }
        let i = 0;
        let j = subString.length - 1;
        while (i < j) {
            if (subString[i] !== subString[j]) {
                return false;
            }
            i++;
            j--;
        }
        cache.set((start, end), true);
        return true;
    }
    let longest = '';
    let start = 0;
    let end = 1;

    while (start < end) {
        end = start + 1;
        while (end <= s.length) {
            if (isPalindrome(s.substring(start, end), start, end, cache) && s.substring(start, end).length > longest.length) {
                longest = s.substring(start, end)
            }
            end++;
        }
        start++;
    }
    return longest;
};

console.log(longestPalindrome("babad"), "bab");
console.log(longestPalindrome("cbbs"), "bb");
console.log(longestPalindrome("ss"), "ss"); // test 82/142
// tests are taking too long to pass, but passes all 142
// maybe a memoize thing - after starting to implement this, using a map,
    // you can do something like, map.set((0, 2), s.substring(0, 2)
// but it doesn't seem like it would make anything faster for how I have it built, like

// t = n^3, the isPalindrome is a nested O(n), making a triple nest while, where each is O(n)
// m = O(1),
/* Adding in the cache didn't improve the runtime
I think a different approach is needed. Looked at solutions

NEW APPROACH

*/
