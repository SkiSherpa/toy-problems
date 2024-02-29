/**
 * https://leetcode.com/problems/roman-to-integer/
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.



Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 * @param {string} s
 * @return {number}
 */
//  the subtraction parts
/*
I can be placed before V (5) and X (10) to make 4 and 9.
IV & IX | 4,9
X can be placed before L (50) and C (100) to make 40 and 90.
XL & XC | 40,90
C can be placed before D (500) and M (1000) to make 400 and 900.
CD & CM | 400, 900

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/
// figure out the single, double, triple, digits in that order
// may give insight into how to solve rest
// 9 = IX
// 8 =

// create an obj to hold symbols and values
// result = 0
// loop through s
    // create cur and next pointers
    // IF cur is less than next in obj - subtractive like 4, 9
        // current number = next - cur
        // add current number to result
        // make i go up by one, bc two chars counted to one number
    // otherwise,
        // result += cur
var romanToInt = function(s) {
    const sym = {
        'I': 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];
        const next = sym[s[i+1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }
    return result;
};
// t = O(n), where n is the length of s
// m = O(1), a few variables and the obj sym, but they don't increase with s increasing.
// t = 112ms 62.69%
// I think you could make it run faster, if you use a map, istead of obj, b/c entries are small, but for an interview you need the speed of just using an obj in terms of typing.
// - ITS not faster in terms of testing with leetcode
// t = 115 ms 53.28%
var romanToIntMap = function(s) {
    const sym = new Map();
    sym.set('I', 1);
    sym.set('V', 5);
    sym.set('X', 10);
    sym.set('L', 50);
    sym.set('C', 100);
    sym.set('D', 500);
    sym.set('M', 1000);

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const cur = sym[s[i]];
        const next = sym[s[i+1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }
    return result;
};
