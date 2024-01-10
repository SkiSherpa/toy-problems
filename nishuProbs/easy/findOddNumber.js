/*
https://leetcode.com/problems/largest-odd-number-in-string/description/
You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

A substring is a contiguous sequence of characters within a string.



Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
Example 2:

Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".
Example 3:

Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.


Constraints:

1 <= num.length <= 105
num only consists of digits and does not contain any leading zeros.
*/
/**
 * @param {string} num
 * @return {string}
 */
//  IP: a string - but a number that is a string
// OP: a string, but the largest odd number
// C no leading zeros
// ? - is a sub string an odd num, like 234, is the ans 23 or 3?

// IF the current num is odd
    // return current number
// loop to slice off the final digit
    // newNum is a number with last digit popped
    // IF newNum is odd
        // return newNum as a string
    // set num to string of newNum

// finding single digits
// loop through num
    // IF the current is odd
        // return the current
var largestOddNumber = function(num) {
    // check if the last digit is num
    if (Number(num[num.length - 1]) % 2 !== 0) {
        return num;
    }
    let numCopy = num;
    // loop to slice off last digit in num
    for (let j = num.length - 1; j >= 0; j--) {
        let newNum = num.slice(0,j);
        if (Number(newNum[newNum.length - 1]) % 2 === 1) {
            return newNum;
        }
        num = newNum;
    }

    // finding single digist
    for (let i = 0; i < numCopy.length; i++) {
        if (Number(numCopy[i]) === 1) {
            return "1";
        }
        if (Number(numCopy[i]) % 2 === 1) {
            return numCopy[i];
        }
    }
    return "";
};

// console.log("ans: 1013389", largestOddNumber("10133890")); // test 118/196
//  console.log("ans: 239537672423884969653287101", largestOddNumber("239537672423884969653287101")); // test 125/196
//  console.log("ans: 36916697848018451", largestOddNumber("3691669784801845146")); // test 125/196
// No logs for leetcode, it can't handle the too large of numbers
// t =  O(n)
