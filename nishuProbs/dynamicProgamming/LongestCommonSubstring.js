/*
Given two strings a and b, return the length of the longest common substring between them

ex1:
a = ABCDEFG
b = ZUZUCDEZU
answer: CDE

ex2:
a = ABCDEFG
b = ABLABCW

*/
// IF you formulate a sub problem that could exist for all the possible IP, then you may a dp solution

// create an array , where index number of a is saved to substring
// ex: starting at i = 2, is where you have a matching substrings
    // [,,'CDE','DE','E',,,] - when completed

// create two pointers, startA, startB,
// loop through A
    // start point to index = 0
    // loop through B
        // IF A[startA] is the same as B[startB]]
            // move pointers up by one
            // check if next chars are equal
        // whenever not equal save that substring.

// The max length of a substring ends at && includes A[i] and B[j] chars of B - and doesn't include any chars to the right of A[i] and B[j]

// if (A[?,i] === B[?,j])
// b_cache_arr = the length of B = [ , , , C, CD, CDE, , , ]
// length from i,j which then save into the cache,
// what input do we save that's linked to the max length
// cache[(i, j)] = max length of moving backwards from i and j
// IF cache[(i-1, j-1)] exist
    // Take the length from (i-1, j-1) add it to your current length
    // save to cache
const longestCommonSubstring = (a, b) => {
    let cache = {};
    for (let i = 0; i < a.length; i++) {
        let curA = a[i];
        for (let j = 0; j < b.length; j++) {
            if (curA === b[j]) {
                let curLen = 1;
                // check in the cache to see IF previous chars matched
                    // take length from cache and add to current length
                // otherwise,
                // add curLen to cache at i and j
                let prevCacheIndex = [i-1, j-1].toString();
                let curCacheI = [i, j].toString();
                if (cache[prevCacheIndex]) {
                    curLen = curLen + cache[prevCacheIndex];
                    cache[curCacheI] = curLen;
                } else {
                    cache[curCacheI] = curLen;
                }
            }
        }
    }

    let maxLen = Math.max(...Object.values(cache));
    let targetI = 0;

    for (key in cache) {
        if (cache[key] === maxLen) {
            targetI = parseInt(key[0]);
        }
    }

    let result = a.slice(targetI - maxLen + 1, targetI+1);
    return result;
}

let a = 'ABCDEFG'; // e = 4
let b = 'ZUZUCDEZU';
console.log(longestCommonSubstring(a, b));
let a2 = 'ABCDEFG';
let b2 = 'ABLABCW';
console.log(longestCommonSubstring(a2, b2));
