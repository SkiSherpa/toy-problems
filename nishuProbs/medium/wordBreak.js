/**
 * https://leetcode.com/problems/word-break/description/
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.



Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false


Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// IP: a string, and an arrays of strings
// OP: bool - true is s can be evenly divided by words in wordDict

// loop unitl you cant remove current word from wordDict OR s is empty
// IF a word from wordDict is in s
    // remove that word in s

var _wordBreak = function(s, wordDict) {
    let i = 0;
    let sCopy = s.slice();
    while (i < wordDict.length && s.length > 0) {

        let startIndex = sCopy.indexOf(wordDict[i]);

        if (startIndex !== -1) {
            let endIndex = wordDict[i].length;
            let frontS = sCopy.slice(0, startIndex);
            let backS = sCopy.slice(endIndex+startIndex, sCopy.length);
            sCopy = frontS.concat(backS);
        } else {
            i++;
        }
    }
    if (sCopy.length === 0) {
        return true;
    }
    return false;
};


// console.log(wordBreak("leetcode", ["leet","code"]), true);
// let s1 = "catsandog";
// let wordDict1 = ["cats","dog","sand","and","cat"];
// console.log(wordBreak(s1, wordDict1), false);
// let s2 = "cars";
// let wd2 = ["car","ca","rs"];
// console.log(wordBreak(s2, wd2), true); // this breaks my solution

// if (-1) {
//     console.log('hi')
// }
// let test = 'abcpenabc';
// let testDict = ['abc', 'pen']
// console.log(test.indexOf(testDict[0]));
var wordBreak = function(s, wordDict) {
    const words = new Set(wordDict);
    const wordLens = new Set(wordDict.map((word) => word.length))
    const starts = new Set([0])
    for (let start of starts) {
        console.log("starts", starts);
        console.log("[i]", start);
        for (let len of wordLens) {
            console.log('wordLens', wordLens, 'len', len);
            if (words.has(s.slice(start, start + len))) {
                starts.add(start + len)
            }
        }
    }
    return starts.has(s.length)
};

console.log(wordBreak("leetcode", ["leet","code"]), true);
let s1 = "catsandog";
let wordDict1 = ["cats","dog","sand","and","cat"];
// console.log(wordBreak(s1, wordDict1), false);
let s2 = "cars";
let wd2 = ["car","ca","rs"];
// console.log(wordBreak(s2, wd2), true); // this breaks my solution
