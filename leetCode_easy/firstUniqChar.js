var firstUniqChar = function(s) {
    const charCount = {}
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]]) {
            charCount[s[i]]++;
        } else {
            charCount[s[i]] = 1;
        }
    }
    console.log(charCount);
    for (let j = 0; j < s.length; j++) {
        if (charCount[s[j]] === 1) {
            return j;
        }
    }
    return -1;
};

console.log(firstUniqChar("leetcode")); // 0
console.log(firstUniqChar("loveleetcode")); // 2

console.log(firstUniqChar("aabb")); // -1

// Linear time complexity = 2 FOR's = n + n = 2n
//
