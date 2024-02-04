/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
 consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.


Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/
/**
 * @param {string} s
 * @return {number}
 */
// IP: a sentence
// OP: a number - length of last word in sentence
// C: at least one word present in "s"

// to make it faster, trim the back spaces yourself
    // loop to remove spaces
    // save index to start with

// trim the spaces around "s"
// create a count var set to 0
// loop backward through "s"
    // IF current is a space
        // return count
    // count++
// return count; - incase single word
var lengthOfLastWord = function(s) {
    let count = 0;
    let j = s.length-1;
    for (j; j >= 0; j--) {
        if (s[j] !== " ") {
            break;
        }
    }

    for (let i = j; i >= 0; i--) {
        if (s[i] === " ") {
            return count;
        }
        count++;
    }
    return count;
};

// console.log(lengthOfLastWord("Hello World"), "ans: ", 5);
console.log(lengthOfLastWord("   fly me   to   the moon  "), "ans: ", 4);
// t = O(n+m), where n is the length of the last word and m is the trailing spaces of s
// m = O(1), just the 3 vars, i, j, and count
// t = 44ms, 90.90% | m = 48.30MB, 24.91%
