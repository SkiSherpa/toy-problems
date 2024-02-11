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

// console.log(longestPalindrome("babad"), "bab");
// console.log(longestPalindrome("cbbs"), "bb");
// console.log(longestPalindrome("ss"), "ss"); // test 82/142
// tests are taking too long to pass, but passes all 142
// maybe a memoize thing - after starting to implement this, using a map,
    // you can do something like, map.set((0, 2), s.substring(0, 2)
// but it doesn't seem like it would make anything faster for how I have it built, like

// t = n^3, the isPalindrome is a nested O(n), making a triple nest while, where each is O(n)
// m = O(1),
/* Adding in the cache didn't improve the runtime
I think a different approach is needed. Looked at solutions

NEW APPROACH
ODD case:
Move a pointer along to the string
Loop to move center char up by one index
    Loop to move left and right pointers
        IF the left and right char don't match move to next char
        OTHERWISE, IF left and right chars do match
            IF length of current substring > longest
                set longest to current substring
EVEN case:
The same but two center pointers
*/
/* ex1: aba
the while loop in expandAroundCenter will stop when left = -1 & right = 3
The lenght of palin is 3, but 3 - (-1) = 4, so right - left - 1, give correct length

absbd -> terminates at 0, 4 -> 4 - 0 - 1 = 3
*/
var longestPalindrome = function(s) {
    if (!s) {
        return s;
    }
    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // return the length
        // when len is returned, left and right will have gone one more iteration
        // than when we want it to stop - look at ex1 at top
        return right - left - 1;
    }

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const odd = expandAroundCenter(s, i, i);
        const even = expandAroundCenter(s, i, i + 1);
        const maxLen = Math.max(odd, even);

        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }
    return s.substring(start, end + 1);
}
console.log(longestPalindrome("babad"), "bab");
// with each iteration of the for loop
// a new maxLen will be generated,
// then can be compared to the start and end vars outside the for loop
// IF the new maxLen is a bigger num than (end - start), then a new start and end should be assigned

// t = O(n^2), where n is the length of s.
// m = O(1), it seems constant to me
// t = 60ms 98.30%, m = 49.99MB 47.71%
