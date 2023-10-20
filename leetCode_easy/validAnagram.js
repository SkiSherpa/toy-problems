// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// IP: two strings
// OP: bool - true IF s and t are anagrams of each other
// C: all lowercase letters

// create an empty obj for s and t to store letter counts
// place the letters and their counts into their respective objs
// loop through s's obj
    // IF s's letter count !== t's letter count
        // return false
// return true
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let sCount = {};
    let tCount = {};
    for (let i = 0; i < s.length ; i++) {
        if (sCount[s[i]]) {
            sCount[s[i]]++;
        } else {
            sCount[s[i]] = 1;
        }
        if (tCount[t[i]]) {
            tCount[t[i]]++;
        } else {
            tCount[t[i]] = 1;
        }
    }
    for (letter in sCount) {
        if (sCount[letter] !== tCount[letter]) {
            return false;
        }
    }
    return true;
};

// BigO t = linear -> n + n = 2n
