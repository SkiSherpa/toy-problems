/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.

Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0

Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// IP: 2 strs:
    //  types of jewels that are stones
    //  stones - the stones you have
// OP:
// C: strs are case sensitive
// C: only english letters in strs
// C: chars of jewels are unique

// Each single letter is a jewel/stone. In ex1, you have 2 stones, "a" and "A". "aA" is NOT a stone/jewel
// ex1: is 3 b/c "a" = 1, "A" = 1, 2nd "A" = 1 | 1+1+1=3

// count = 0
// loop through "jewels"
    // "jewelsCur" = current item in jewels
    // loop through stones
        // if "jewelCur" === current item in stones
            // count++

//  t = O(n*m), where n = IP size of jewels and m = IP size of stones
var _numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i < jewels.length; i++) {
        let curJewel = jewels[i];
        for (let j = 0; j < stones.length; j++) {
            if (curJewel === stones[j]) {
                count++;
            }
        }
    }
    return count;
};

// worked first try, but seems slow
//  t = O(n*m), where n = IP size of jewels and m = IP size of stones
// mem = O(1)
// t = 51ms, 72.48% | mem = 42.46MB, 40.57%

// Someones O(S), where S is the size of stones IP
const numJewelsInStones = (J, S) => {
    // Create a Set called 'jewels' containing the characters from string 'J'
    const jewels = new Set(J);
    // Use the reduce function to iterate through each character in string 'S'
    // and accumulate the count of characters that are also in the 'jewels' Set
    console.log(S.split(''));

    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
};
// A Set is a data structure that stores unique values,
// so this Set will contain the unique characters from the J string.
// jewels.has(s) returns "true" IF cur char "s" is in the "jewels" set
    //  IN JS, TRUE CAN BE CONVERTED TO 1 when added to a number, like res
    // IF TRUE IS CONVERTED TO A NUMBER IT IS ALWAYS 1
    // Similarly, false can be converted to Zero
console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0

// t = O(m+n)
// m = O(m+n)
