/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2694302/js-98-sliding-window-with-exlanation/
Given a string s, find the length of the longest
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/
/**
 * @param {string} s
 * @return {number}
 */
// IP: a string
// OP: a number - length of longest substring with out repeating chars
//  can use a Set - because it stores uniq chars
// E: IF s is empty, return zero

// define an empty set
// create a total longest str var
// create a current longest str var
// loop through s
    // IF cur char exist in the set || IF cur char is a space
        // curLongest to zero
        // make a new Set
    // add 1 to curLongest
    // add current char to set
    // IF totLongest < curLongest
        // totLongest = curLongest
// return curLongest
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }
    let curChars = new Set;
    let totLongest = 0;
    let curLongest = 0;
    while (s.length > 0) {
        console.log(s);
        for (let i = 0; i < s.length; i++) {
            let cur = s[i];
            console.log(i, curChars);
            if (curChars.has(cur)) {
                curChars = new Set;
                if (curChars.size !== 0) {
                    curChars.add(s[i-1]);
                }
            }
            if (!curChars.has(cur)) {
                curChars.add(cur);
            }
            console.log("post", i, curChars);
            if (curLongest < curChars.size) {
                curLongest = curChars.size;
            }
        }
        // slice off the first letter of s
        s = s.slice(1);
        if (totLongest < curLongest) {
            totLongest = curLongest;
        }
        curLongest = 0;
    }
    return totLongest;
};
// I've gone backwards
console.log('3', lengthOfLongestSubstring('abcabcbb')) // 1/987
// console.log('3', lengthOfLongestSubstring('dvdf')) // 407/987
// This is an issue, I'm not sure what to do here...
// might have to run throung it again,
    // but slice off the first letter once done
// console.log('5', lengthOfLongestSubstring("anviaj")) // 477/987
