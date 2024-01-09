/*
https://leetcode.com/problems/number-of-segments-in-a-string/
Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

Example 1:
Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

Example 2:
Input: s = "Hello"
Output: 1


Constraints:

0 <= s.length <= 300
s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
The only space character in s is ' '.
*/
/**
 * @param {string} s
 * @return {number}
 */
//  IP: a string
// OP: number - count of char's that are not spaces
// C: They lied, there can be more than one space at once.

// trim s - remove leading and trailing spaces
// add a trailing space
// letterFound flag = true

// loop through s
// IF the current char IS a space, && letterFound is True
    // count++
    // letterFound = false
// else IF (current char is a letter )
    // letterFound = true
// return the count;
var countSegments = function(s) {
    if (s.length === 0) {
        return 0;
    }
    s.trim();
    s = s.concat(' ');
    let count = 0;
    let letterFound = false;
    for (let i = 0; i < s.length; i++) {
        let cur = s[i];
        if (cur === ' ' && letterFound) {
            count++;
            letterFound = false;
        } else if (cur !== ' ') {
            letterFound = true;
        }
    }
    return count;
};
// concat is O(n+m), where n and m are the length of the og str and the str you want to add
// my concat is O(n+1), I only add a space
// t = O(n+1), where n is the chars in the string
// m = O(n+1), where n is the chars in the string
// t = 49ms 67% | m = 41.81MB 36%

console.log(countSegments("a b c d")); // 4
// console.log(countSegments("       j         ")); // 1
// console.log(countSegments("                ")); // 0
