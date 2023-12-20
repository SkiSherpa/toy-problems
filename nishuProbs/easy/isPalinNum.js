/*
Given an integer x, return true if x is a
palindrome
, and false otherwise.



Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


Constraints:

-231 <= x <= 231 - 1
*/
/**
 * @param {number} x
 * @return {boolean}
 */
// IP: a num
// OP: a bool - true if a palindrone
// C: if a neg num auto false

// turn x into a str and save as var
// create var to hold reverse of str number
// loop through str num
    // add reverse nums to var
// compare two strings

var _isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let strNum = JSON.stringify(x);
    let reverseNum = "";
    for (let i = strNum.length - 1; i >= 0; i--) {
        console.log(strNum[i]);
        reverseNum += strNum[i];
    }
    if (strNum === reverseNum) {
        return true;
    }
    return false;
};

// console.log(isPalindrome(121));

// t = 380ms 5% |  t = O(2n), n is the number of digits in the number, loop to stringify and the reverse loop
// m = 63.52Mb 5% | m = O(1)

// There's obvi a faster way
// start a pointer at begining and end
    // IF numbers dont match return false
// return true
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let strNum = JSON.stringify(x);
    let strNumLen = strNum.length;
    let i = 0
    let j = strNumLen - 1;
    while (i < strNumLen) {
        if (Number(strNum[i]) !== Number(strNum[j])) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};
console.log(isPalindrome(121));
console.log(isPalindrome(1221));
// t = 150ms 32.63% |  t = O((3/2)n), n is the number of digits in the number
    // loop to stringify, 1/2 of n when looping
// m = 51.38Mb 30% | m = O(1)
