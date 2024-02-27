/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "Mr Ding"
Output: "rM gniD"

Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
 * @param {string} s
 * @return {string}
 */
// IP: a string
// OP: a string - reverse each word of input string, spaces included
// C: at least 1 char for IP

// split the IP string on a single space
// loop through the words array
    // reverse each item and place into new array
// combine reverse array words into return string
var reverseWords = function(s) {
    let words = s.split(' ');
    let revWords = [];
    for (let i = 0; i < words.length; i++) {
        let revWord = '';

        for (let j = words[i].length - 1; j >= 0; j--) {
            revWord = revWord.concat(words[i][j]);
        }
        revWords.push(revWord);
    }
    let revStr = revWords.join(' ');
    return revStr;
};

console.log(reverseWords("s'teL ekat edoCteeL tsetnoc"
), " - ", "Let's take LeetCode contest");

// multiple spaces were not an issue, passed all tests
// t =
