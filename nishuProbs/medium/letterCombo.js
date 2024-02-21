/**
 *
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]


Constraints:
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
 * @param {string} digits
 * @return {string[]}
1       2 (ABC)  3 (DEF)

4 (GHI)  5 (JKL)  6 (MNO)

7 (PQRS)  8 (TUV)  9 (WXYZ)
 */
// IP: a string - a series of numbers
// OP: an array of strings - all possible letter combos from IP nums

var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    let results = [];
    let len = digits.length;
    let letters = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    if (len === 1) {
        let max1 = letters[parseInt(digits[0])].length;
        for (let i = 0; i < max1; i++) {
            results.push(letters[parseInt(digits[0])][i]);
        }
    } else if (len === 2) {
        let max1 = letters[parseInt(digits[0])].length;
        let max2 = letters[parseInt(digits[1])].length;

        for (let i = 0; i < max1; i++) {
            let firstLet = letters[parseInt(digits[0])][i];
            for (let j = 0; j < max2; j++) {
                let secLet = letters[parseInt(digits[1])][j];
                let combo = firstLet.concat(secLet);
                results.push(combo)
            }
        }
    } else if (len === 3) {
        let max1 = letters[parseInt(digits[0])].length;
        let max2 = letters[parseInt(digits[1])].length;
        let max3 = letters[parseInt(digits[2])].length;
        for (let i = 0; i < max1; i++) {
            let firstLet = letters[parseInt(digits[0])][i];
            for (let j = 0; j < max2; j++) {
                let secLet = letters[parseInt(digits[1])][j];
                for (let k = 0; k < max3; k++) {
                    let thirdLet = letters[parseInt(digits[2])][k];
                    let combo =firstLet.concat(secLet, thirdLet);
                    results.push(combo);
                }
            }
        }
    } else {
        let max1 = letters[parseInt(digits[0])].length;
        let max2 = letters[parseInt(digits[1])].length;
        let max3 = letters[parseInt(digits[2])].length;
        let max4 = letters[parseInt(digits[3])].length;
        for (let i = 0; i < max1; i++) {
            let firstLet = letters[parseInt(digits[0])][i];
            for (let j = 0; j < max2; j++) {
                let secLet = letters[parseInt(digits[1])][j];
                for (let k = 0; k < max3; k++) {
                    let thirdLet = letters[parseInt(digits[2])][k];
                    for (let x = 0; x < max4; x++) {
                        let forthLet = letters[parseInt(digits[3])][x];
                        let combo =firstLet.concat(secLet, thirdLet, forthLet);
                        results.push(combo);
                    }
                }
            }
        }
    }
    return results;
};
// let test = 1 === 2 || 1 === 2 ? 'true' : 'false';
// console.log(test);
// console.log(letterCombinations('2'),' - ', ['a', 'b', 'c']);
// console.log(letterCombinations(''), ' - ',[]);
console.log(letterCombinations('23'),' - ', ["ad","ae","af","bd","be","bf","cd","ce","cf"]);
// console.log(letterCombinations('3'),' - ', ["d","e","f"]);
// console.log(letterCombinations('7'),' - ', ["p","q","r","s"]);

// t = O(n^4), where at worst case n = 4; - my guess
// t = O(1), occording to gpt. The argument is that the while there are nest loops how many times it runs doesn't change with the IP size
// m = O(1)

// t = 59ms 22.34% | m = 49.04MB 15.88%
