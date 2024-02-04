/*
You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.

You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].

Return the array ans. Answers within 10-5 of the actual answer will be accepted.

Note that:

Kelvin = Celsius + 273.15
Fahrenheit = Celsius * 1.80 + 32.00


Example 1:

Input: celsius = 36.50
Output: [309.65000,97.70000]
Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.
Example 2:

Input: celsius = 122.11
Output: [395.26000,251.79800]
Explanation: Temperature at 122.11 Celsius converted in Kelvin is 395.26 and converted in Fahrenheit is 251.798.


Constraints:

0 <= celsius <= 1000
*/
/**
 * @param {number} celsius
 * @return {number[]}
 */
// IP: a number - temp in C
// OP: array of 2 nums - [K, F]
// C: all inputs are non-negative floats to 2 decimals
// JS doesn't care about ints and floats, so nothing to worry about there

// would use given formulas to convert and return the values
// I feel like there might be something that I'm missing in terms of difficulty - the test will tell me
var convertTemperature = function(celsius) {
    let K = celsius + 273.15;
    let F = (celsius*1.8) + 32;
    return [K, F];
};

console.log([273.15, 32], convertTemperature(0)); // [273.15, 32]
console.log([309.65000,97.70000],convertTemperature(36.50)); // [309.65000,97.70000]
console.log([395.26000,251.79800], convertTemperature(122.11))

// nothing that I was missing, it was just that easy
// t = O(1), all constant operations
// t = 61ms, 15.08%
// m = O(1), only made 3 things, vars K and F, and the arr
// m = 48.73MB, 12.64%

// to make faster this is t = 42ms, 94.74% | m = 48.75MB, 12.64%
var convertTemperature = function(celsius) {
    return [celsius + 273.15, (celsius*1.8) + 32];
};
