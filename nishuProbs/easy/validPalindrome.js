/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 * @param {string} s
 * @return {boolean}
 */

// IP: a string - sentence with punctuation
// OP: bool - true IF s is a palindrome (with puctuation removed)
// C: casing doesn't matter - so C === c, in this question
// C: numbers should not be removed like punctuation.

// convert s to lowercase
// pincer loop, with two pointers at each end
    // IF i is not with in letter range
        // move i up by one
    // Otherwise, IF j is not in letter range
        // subtract one
    // Otherwise, IF char at i DOES NOT equal char at j
        // return false
// return true
var _isPalindrome = function(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        console.log(i, j, s[i], s[j]);
        // letter = (97 < s[i].charCodeAt(0) < 122)
        // number = (48 < s[i].charCodeAt(0) < 57)
        console.log(s[i], (122 > s[i].charCodeAt(0) > 97), (57 > s[i].charCodeAt(0) > 48) );

        if ((122 > s[i].charCodeAt(0) > 97) || (57 > s[i].charCodeAt(0) > 48)) {
            console.log('s[i]', s[i] );
            console.log('hirt');
            i++;
            continue;
        } else if ((122 > s[j].charCodeAt(0) > 97) || (57 > s[j].charCodeAt(0) > 48)) {
            console.log('s[j]', s[j])
            j--;
            continue;
        } else if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;

    }
    return true;
};
// a = 97
// z = 122;
// 0 = 48
// 9 = 57
// ' ' = 32
// letter = (97 < s[i].charCodeAt(0) < 122)
// number = (48 < s[i].charCodeAt(0) < 57)

// IF char at i AND j is a letter OR number
    // IF char at i DOES NOT equal char at j
        // return false
// IF ELSE char at i is punctuation
    // i++;
// IF ELSE char at j is puunctuation
    // j--;
// OTHERwise
    // i++ and j--
var __isPalindrome = function(s) {
    // s = s.toLowerCase();
    // let i = 0;
    // let j = s.length - 1;
    // while (i <= j) {
    //     console.log(i, j)
    //     // IF char at i and j is a alpha - numer
    //     if () {
    //         if (s[i] !== s[j]) {
    //             return false;
    //         }
    //         // char at i is punctuation
    //     } else if () {
    //         i++;
    //         continue;
    //         // char at j is punctuation
    //     } else if () {
    //         j--;
    //         continue
    //     }
    //     i++;
    //     j--;
    // }
    // return true;
}

// make s lower case
// loop through and remove all punctuation from s, replace with ''
// use two pointer and pincer, and loop through s again
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');
    console.log(s);
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false
        }
        i++;
        j--;
    }
    return true;
}
// console.log("a".charCodeAt(0) <= 97, "a".charCodeAt(0) >= 122);
// console.log(isPalindrome("A man, a plan, a canal: Panama"), true);
// console.log(isPalindrome("race a car"), false);
// console.log(false || false);
// console.log(isPalindrome("0P"), false);
console.log(isPalindrome("1a2"), false);

// t = O(n), n is the length of s
// The while goes through n/s, but I bet replace loops through all of s
// m = O(1), mostly single vars are created and re-assigned
