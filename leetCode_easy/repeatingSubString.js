var repeatedSubstringPattern = function(s) {
    const repeat = s.repeat(2);
    console.log(repeat);
    const slice = repeat.slice(1, -1);
    console.log("slice: ", slice);
    const check = slice.includes(s);

    return check;
};
// console.log(repeatedSubstringPattern("aa"));

// console.log(repeatedSubstringPattern("ababba"));
console.log(repeatedSubstringPattern("abcabc"));

// original.
var _repeatedSubstringPattern = function(s) {
    if (s.length === 2) {
        if (s[0] === s[1]) {
            return true;
        }
    }
    for (let i = 2; i < s.length; i++) {
        const sub = s.substring(0, i);
        const restOfStr = s.substring(i, s.length);
        if (restOfStr.includes(sub)) {
            return true;
        }
    }
    return false;
};
