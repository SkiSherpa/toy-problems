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
var _longestCommonPrefix = function(strs) {
    let longest = "";
    let j = 0;
    let curCharToMatch;
    let strsLen = strs.length;
    if (strsLen === 1) {
        return strs[0];
    }



    for (let i = 0; i < strsLen; i++) {
        if (i === 0 && strs[0]== "") {
            return longest;
        }
        if (i === 0) {
            curCharToMatch = strs[i][j];
            continue;
        }
        if (curCharToMatch !== strs[i][j]) {
            return longest;
        }
        if (i === strsLen - 1) {
            longest.concat(curCharToMatch);
            j++;
            i = -1;
        }
    }
    return longest;
};

// Someone sol: t = 61ms | m = 41.87MB
// To me it looks like it only compares the first and last words and their chars,,
// but it does compare every one why? - ANS, its the sort(),
// it makes the first and last most likely to be different

var longestCommonPrefix = function(strs) {
    // sort the array because its rearrange alphabetical order
    strs.sort(); // nlog(n)

    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]){
            return strs[0].substr(0, i);
        }
    }

  return strs[0];
};


// console.log(longestCommonPrefix(["dog","racecar","car"])); // ""
// console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
// console.log(longestCommonPrefix(["f"])); // f
// console.log(longestCommonPrefix(["", ""])); // ""
// this takes too much mem:
// console.log(longestCommonPrefix(["flower", "flower","flower","flower"])); // flower
console.log(longestCommonPrefix(["flower","flow","fight", "flack", "floom"])); // ""

// Big O:
// t = nlog(n), n is the length of the strs array
// t = m, where m is the length of the longest common prefix
// t = nlog(n)
// m = O(1), just holding i.
