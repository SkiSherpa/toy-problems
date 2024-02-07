/*
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely"


Constraints:

1 <= s.length <= 100
s consists of printable ASCII characters.
*/
// mine:
var _toLowerCase = (s) => s.toLowerCase();
// t = O(n), I assume that loops through every char
// m = O(n), you might be concating every char
// t = 65ms 12.29%, m = 48.9MB 16.15%
// Something faster below
/**
 * @param {string} s
 * @return {string}
 */
// Looking up .toLowerCase() under the hood its similar to below
// I think it might be slower as it hadles special cases,
// where below the prob has constraints that can make below faster
var toLowerCase = function(s) {
    let ans = '';

    for(const char of s){
        const curr = char.charCodeAt(0) - 65;
        if(curr >= 0 && curr <= 25){
            ans+= String.fromCharCode(97+curr);
        }else{
            ans+=char;
        }
    }
    return ans;
}
// t = O(n), where n is every char in s
// m = O(n), where n is every char in s, due to the concatination
// t = 42ms 96.05%, m = 50.52MB 6.53%
