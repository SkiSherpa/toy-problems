/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".


Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
// IP: an array of strings
// OP: a string - the longest prefix of all IP strings
// C: return an empty string IF no common strings are found

// j var to hold current letter count in word
// loop through "strs"
// IF i = 0, the first word in "strs"
    // set curCharToMatch to the current letter
    // continue
// IF the current letter !== curChar
    // return longest
// IF i === length of "strs" - 1
    // push curChar to "longest"
    // j++
// return longest
var longestCommonPrefix = function(strs) {
    let longest = "";
    let j = 0;
    let curCharToMatch;

    if (strs.length === 1) {
        return strs[0];
    }

    for (let i = 0; i < strs.length; i++) {
        if (i === 0) {
            curCharToMatch = strs[i][j];
            continue;
        }
        if (curCharToMatch !== strs[i][j]) {
            return longest;
        }
        if (i === strs.length - 1) {
            longest += curCharToMatch;
            j++;
            i = -1;
        }
    }
    return longest;
};

// console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
// console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["f"])); // f
