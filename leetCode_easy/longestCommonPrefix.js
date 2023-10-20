// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// IP: an Arr of words
// OP: a string - the common chars in every word
// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

// loop thro strs
// IF at initial item in strs
// record current char at current word
// IF currentLetter does NOT equal strs[currentLetterIndex]
    // return prefix
// IF at end of list, increase currentLetterIndex by one

var longestCommonPrefix = function(strs) {
    let prefix = "";
    let currentLetterIndex = 0;
    let i = 0;
    let currentLetter = "";
    let shortestWord = strs[0];
    for (let j = 1; j < strs.length; j++) {
        if (strs[j].length < shortestWord.length) {
            shortestWord = strs[j];
        }
    }
    while (i < strs.length) {
        let currentWord = strs[i];
        if (i === 0) {
            currentLetter = currentWord[currentLetterIndex];
        }
        if (currentLetter !== currentWord[currentLetterIndex]) {
            return prefix;
        }
        if (i === strs.length - 1 && currentLetterIndex === shortestWord.length) {
            return prefix
        }
        if (i === strs.length - 1 && currentLetterIndex < shortestWord.length) {
            prefix += currentLetter;
            currentLetterIndex++;
            i = 0;
        } else {
            i++;
        }
    }
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["dog","cat","flight"])) // "fl"

// runtime: 61ms, 45.48% | Mem: 41.70MB, 91.45%
var _longestCommonPrefix = function(strs) {
    if (!strs.length) {
        return '';
    }
    let longerstCommonPrefix = '';
    for(let i=0; i< strs[0].length; i++) {
        let char = strs[0][i]
        if(!char) return ''
        if(strs.every(str => str[i] === char)) {
            longerstCommonPrefix+=char
        } else break
    }
    return longerstCommonPrefix
}
// runtime: 48ms, 92.34% | Mem: 42.600MB, 42.62%
