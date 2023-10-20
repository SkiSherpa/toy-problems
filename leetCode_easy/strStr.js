// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// IP: two strs, haystack.length > needle.length, needle is target
// Op: number, index of first occurance of the needle str
// C: -1 for if the needle is not there

var strStr = function(haystack, needle) {
    return haystack.search(needle);
};
