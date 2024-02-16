/**
Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

Example 1:
Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.

Example 2:
Input: s = "aba"
Output: false

Example 3:
Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.


Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
 * @param {string} s
 * @return {boolean}
 */
/*
IP: a string
// OP: a boolean - true if a substring is a pattern when repeated makes s

Check up to half the length of s
get length of s

loop through s, up to half length of s
get slice, starting with length one
compare current slice with rest of s
IF not a match
    move to next slice

=====
start with a slice that is half
then 1/3
1/4

len of s
IF len divided by 2 is a whole num
    IF first half * 2 = s
        return true
IF len divided by 3 is a whole num
    IF first half * 3 = s
        return true
Go until you divide by (len of s)/2
return false
*/
var repeatedSubstringPattern = function(s) {
    let len = Math.floor(s.length / 2);
    console.log(len);
    for (let i = 2; i <= len; i++) {
        if (s.length % i === 0) {
            let times = s.length / i;
            let curSlice = s.slice(0, i);
            let testForS = curSlice;

            for (let j = 1; j < times; j++) {
                testForS = testForS.concat(curSlice);
            }
            if (testForS === s) {
                return true;
            }
        }
    }
    return false;
};
// let lice = 'ab';
console.log(repeatedSubstringPattern("abab"), true);
