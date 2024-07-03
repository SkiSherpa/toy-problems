// Given a positive integer num, return true if num is a perfect square or false otherwise.

// A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

// You must not use any built-in library function, such as sqrt.

// Example 1:
// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

// Example 2:
// Input: num = 14
// Output: false
// Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.

// Constraints:
// 1 <= num <= 2^31 - 1
function isPerfectSquare(num: number): boolean {
  let result = num ** 0.5;
  if (
    typeof result === "number" &&
    isFinite(result) &&
    Math.floor(result) === result
  ) {
    return true;
  }
  return false;
}

// t = O(1)
// m = O(1)
// t = 59ms 44.83% | 49.82Mb 81.90%
console.log(isPerfectSquare(16), true);
console.log(isPerfectSquare(14), false);
