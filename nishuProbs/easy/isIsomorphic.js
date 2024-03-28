/**
 * https://leetcode.com/problems/isomorphic-strings/
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.




Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true


Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// is Iso when words have the chars repeating
// IP: 2 strings
// OP: bool - true if Iso
// figuring out when the same letter is at the same index

// IF lengths are different
    // return false
// find repeat letters
// create an obj {letter from s: letter from t}
// loop through s
    // IF current letter is not in obj
        // add current letter from obj[s] = t at same index

    // otherwise,
        // see iF current letter in t is the NOT same as obj[s]
            // return false
// return true
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let fromS = {};
    let fromT = {};
    for (let i = 0; i < s.length; i++) {
        let sCur = s[i];
        let tCur = t[i];

        if ((fromS[sCur] && fromS[sCur] !== tCur) || (fromT[tCur] && fromT[tCur] !== sCur)) {
            return false;
        }
        if (!fromS[sCur]) {
            fromS[sCur] = tCur;
        }
        if (!fromT[tCur]) {
            fromT[tCur] = sCur;
        }

    }
    return true;
};

// t = O(n), where n is the length of either s or t
// m = O(n), where n is the length of strings s and t, due to fromS and fromT objs

// t = 55ms 83.72% | m = 40.94MB 42.67%

// console.log(isIsomorphic('egg', 'add'), true);
// console.log(isIsomorphic('egg', 'fac'), false);
console.log(isIsomorphic('paper', 'title'), true);
// console.log(isIsomorphic('badc', 'baba'), false); // 37/45
