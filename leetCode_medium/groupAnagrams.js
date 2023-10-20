// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]


// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// IP: Array of strings
// OP: an Array of arrays, inner arr's are words that are anagrams
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// make a copy of the array
// loop thro copy of strs array
    // pop the first word of the copy array, place into inner array
    // current word obj to store letters and their count
    // loop thro current/popped word
        // loop through the rest of the list
        // compare each word to saved obj letters and counts
        // IF matches
            // remove that word from copy array
            // add to current inner array

var _groupAnagrams = function(strs) {
    let copyArr = strs.slice();
    console.log(copyArr.length);
    let results = [];
    let innerArr = [];
    let obj = {};
    for (let i = 0; i < copyArr.length; i++) {
        console.log(i);
        let curWord = copyArr.shift();
        innerArr.push(curWord);
        for (let j = 0; j < curWord.length; j++) {
            if (obj[curWord[j]]) {
                obj[curWord[j]]++;
            } else {
                obj[curWord[j]] = 1;
            }
        }
        for (let k = 0; k < copyArr.length; k++) {
            return ""
        }
    }
};

var groupAnagrams= function(strs) {
    let map = {}

    for (let str of strs) {
        console.log(str);
        let s = str.split('').sort().join('')
        console.log(s, map[s]);
        if(!map[s]) {
            map[s] = [];
        }
        map[s].push(str);
    }
    console.log(map);
    return Object.values(map)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
