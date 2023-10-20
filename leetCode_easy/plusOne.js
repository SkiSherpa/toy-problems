// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].


// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// join the nums
// cast to num
// add one
// split back to arr
// let newNum = Number(digits.join(""));
// let strNum;
// if (typeof newNum === "bigint") {
//     console.log("hit");
//     strNum = (newNum + BigInt(1)).toString();
// } else {
//     strNum = newNum.toString();
// }
// let result = [];
// for (let i = 0; i < strNum.length; i++) {
//     result.push(Number(strNum[i]));
// }
// return result;
var plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        console.log(digits[i], digits);
        if(digits[i] === 9) {
            digits[i] = 0
        }
        else {
            digits[i] += 1
            return digits
        }
    }
    // this is the case for when all the digits are 9's
    return [1, ...digits]
};

// This would also work:
// return (BigInt(digits.join(''))+ BigInt(1)).toString().split('');

console.log(plusOne([9,9,9]));
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
