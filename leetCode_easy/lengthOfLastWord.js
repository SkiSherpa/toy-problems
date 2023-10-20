// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */

// IP: String - a sentence
// OP: a number - length of the last word
// C: you can have multiple trailing spaces at the end
// C: the sentence only letters and spaces

// Remove all trailing spaces
// init count = 0
// iterate through s backwards
// IF the current char is a space
// return the count
// count the each letter
var lengthOfLastWord = function(s) {
    if (s.length === 1) {
        return 1;
    }
    let trimmed = s.trim();
    let count = 0;
    for (let i = trimmed.length - 1; i >= 0; i--) {
        if (trimmed[i] === " ") {
            return count;
        }
        if (trimmed[i] !== " ") {
            count++;
        }
    }
    return count;
};

// console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
// console.log(lengthOfLastWord("Hellow World")); // 5
// console.log(lengthOfLastWord(" liuffy is JoyBoy"));// 6
console.log(lengthOfLastWord(" a")); //1
console.log(lengthOfLastWord("a")); //1
