/**
 * https://leetcode.com/problems/sort-characters-by-frequency/
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

Example 1:
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:
Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:
Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.


Constraints:

1 <= s.length <= 5 * 105
s consists of uppercase and lowercase English letters and digits.
 * @param {string} s
 * @return {string}
 */
// IP: a string
// OP: a string - re-arranged
// C: string can contain lower/uppercase and digits
// C: lowercase and uppercase of same letters are treated as different letters
// C: the higher freq comes first

/*
{
    frequency count: [ 'a', 'b']
}
with 'aabc'
{
    2: [a]
    1: [b, c]
}
*/
// sort s, to make get same char next to each other
// create my obj to store counts and array of chars
// create a currChar = s[0]
// count = 0
// loop through my sorted s, i = 0
    // count++
    // IF next char is undefined
        // add current char with count to obj
    // if the current does not equal the next char
        // add current char with freq to obj
        // set count to zero
// get an array of all the key and sort by largest to smallest

// create string based off freq

var frequencySort = function(s) {
    // s = s.sort();
    const sorted = s.split('');
    const obj = {};
    let count = 0;
    console.log(sorted);
    for (let i = 0; i < sorted.length; i++) {
        count++;
        let current = sorted[i];
        let next = sorted[i+1];
        if (next === undefined) {
            if (obj[count]) {
                obj[count].push(current)
            } else {
                obj[count] = [current];
            }
        }
        if (current !== next) {
            if (obj[count]) {
                obj[count].push(current)
            } else {
                obj[count] = [current];
            }
            count = 0;
        }
    }

    let freq = Object.keys(obj).sort((a,b) => b-a);
    let str = '';

    for (let i = 0; i < freq.length; i++) {
        let key = freq[i];
        let tempStr = obj[key].join('');
        str = str.concat(tempStr);
    }
    return str;
};

// console.log(frequencySort('tree'), 'eert');
// console.log(frequencySort("Aabb"), 'bbAa');
console.log(frequencySort("cccaaa"), "cccaaa");
