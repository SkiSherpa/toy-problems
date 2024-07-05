// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"

// Constraints:

// 1 <= num1.length, num2.length <= 10^4
// num1 and num2 consist of only digits.
// num1 and num2 don't have any leading zeros except for the zero itself.

// convert both strs to nums
// add numbers
// check if sum is a safe int
// save sum
// otherwise, save the bigint sum
// tf back to string

function addStrings(num1: string, num2: string): string {
	// helper to determine if IP's are big ints
	function isSafeNum(str: string): boolean {
		const num = Number(str);
		return Number.isSafeInteger(num);
	}
	let n1: number | bigint;
	let n2: number | bigint;
	// IF n1 and n2 are number or bigint
	if (isSafeNum(num1)) {
		n1 = Number(num1);
	} else {
		n1 = BigInt(num1);
	}

	if (isSafeNum(num2)) {
		n2 = Number(num2);
	} else {
		n2 = BigInt(num2);
	}

	let sum: number | bigint;
	// IF n1 or n2 are bigint, do bigint sum
	// otherwise, reg sum
	if (typeof n1 === "bigint" || typeof n2 === "bigint") {
		sum = BigInt(n1) + BigInt(n2);
	} else {
		sum = n1 + n2;
	}

	let strSum = sum.toString();
	return strSum;
}
/*

Conversion	        Time Complexity	Space Complexity
String to Number	O(n)	        O(1)
String to BigInt	O(n)	        O(n)
BigInt to String	O(n)	        O(n)
Number to String	O(1)	        O(1)
*/
// t = O(n)
// m = O(n)
// t = 56ms 89.94% | 51.95 Mb 64.50%
// two nums that are safe ints, but when added are big int for testing
// 2^52 = 4503599627370496
let willBeBig1 = "4503599627370496";
console.log(addStrings(willBeBig1, willBeBig1), "9007199254740992");
