/**
 * https://leetcode.com/problems/add-binary/
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"


Constraints:

1 <= a.length, b.length <= 10^4
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

0 = 0
1 = 1
0 + 1 = 10
11 + 1 = 100

  1010
+ 1011
=10101

  1111
+ 1110
=11101

[1,0,1,0]
[1,0,1,1]
=
[10, 0, 10, 1]
IF current is zero and next number is 10,
remove the zero from result array

 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/*
4 cases when adding
a = 1, b = 1 where result is 0 and carry the one
a = 0 b = 1 & a = 1 b = 0, result is 1
a, b = 0, result is zero
loop through a b backwards
IF a or b is undefined, take the other number and add to result string
*/
var _addBinary = function(a, b) {
    let result = '';
    let len = a.length > b.length ? a.length - 1 : b.length - 1;
    let sums = [];
    let as = a.split('');
    let bs = b.split('');
    for (let i = len; i >= 0; i--) {
        console.log(as[i], bs[i], i);

        if (as[i] === undefined) {
            sums.unshift(bs[i]);
        }
        if (bs[i] === undefined) {
            sums.unshift(as[i]);
        }
        if (as[i] === '1' && bs[i] === '1') {
            console.log('i should equal 1', i);
            sums.unshift('10');
        }
        if (as[i] === '0' && bs[i] === '0') {
            sums.unshift('0');
        } else {
            sums.unshift('1');
        }
    }
    console.log(sums);
    for (let j = 0; j < sums.length; j++) {
        let cur = sums[j];
        let next = sums[j+1];
        if (cur === '0' && next === '10') {
            sums = sums.splice(j, 1);
        } else {
            result = result.concat(cur);
        }
    }
    return result;
};
// RAN out of time, first approach I hit an issue and came up with the one above
// below is a different persons approach
var addBinary = function (a, b) {
    let num1Arr = a.split("");
    let num2Arr = b.split("");
    let result = [];

    let temp = 0;

    let j = num2Arr.length - 1;
    let i = num1Arr.length - 1;
    console.log(num1Arr, num2Arr);
    while (i >= 0 || j >= 0 || temp > 0) {

        let value = (i >= 0 ? Number(num1Arr[i]) : 0) + (j >= 0 ? Number(num2Arr[j]) : 0) + temp;

        console.log(i, j, "vals from arrs 1, then 2.", num1Arr[i], num2Arr[j], value, 'temp,', temp);

        if (value === 2) {
            result.push(0);
            temp = 1;
        }
        else if (value === 1) {
            result.push(1);
            temp = 0;
        }
        else if (value === 0) {
            result.push(0);
            temp = 0;
        }
        else if (value === 3) {
            result.push(1);
            temp = 1;
        }
        i--;
        j--;
        console.log("res", result);
    }

    if (temp > 0) {
        result.push(temp);
    }
    console.log(result);
    return result.reverse().join('');
};
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"
// console.log(addBinary('11', '1'), '100');
// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
// console.log(addBinary('1010', '1011'), '10101');
//  1010
// 11100
//100110
console.log(addBinary('1010', '11100'), '100110');

// split IP arrs on empty space
// create carry var = 0
// get lengths of both IP arrs
// loop backwards, kill if i OR j >=0  OR (also carry >=0)... not sure why
    // value = Number at arrs being greater than zero == the number at array.  + carry val
