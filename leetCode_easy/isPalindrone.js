// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.



// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// Constraints:

// C: -231 <= x <= 231 - 1
// IP: a number
// OP: bool - true IF num is palindrone

// IF negative, auto false
// convert to string nums
// IF odd in length
// compare reverse of first half with second half, excluding middle num
// otherwise
// split num in half
// compare reverse half with second half
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    const strNum = x.toString();
    if (strNum.length % 2 === 1) {
        const i = Math.floor(strNum.length / 2);
        let firstHalf = strNum.slice(0, i);
        let secondHalf = strNum.slice(i+1, strNum.length);
        let reverseSecond = '';
        if (secondHalf.length === 1) {
            if (firstHalf === secondHalf) {
                return true;
            }
        }
        for (let j = secondHalf.length - 1; j >= 0; j--) {
            reverseSecond += secondHalf[j];
        }
        if (firstHalf === reverseSecond) {
            return true;
        }
    } else {
        const i = Math.floor(strNum.length / 2);
        let firstHalf = strNum.slice(0, i);
        let secondHalf = strNum.slice(i, strNum.length);
        if (secondHalf.length === 1) {
            if (firstHalf === secondHalf) {
                return true;
            }
        }
        let reverseSecond = '';
        for (let j = secondHalf.length - 1; j >= 0; j--) {
            reverseSecond += secondHalf[j];
        }
        if (firstHalf === reverseSecond) {
            return true;
        }
    }
    return false;
}

console.log(isPalindrome(-121)); // f
console.log(isPalindrome(121)); // t
console.log(isPalindrome(14241)); // t
console.log(isPalindrome(142241)); // t
console.log(isPalindrome(14251)); // f

/*
if (secondHalf.length === 1) {
    if (firstHalf === secondHalf) {
        return true;
    }
}
*/
// This ^^ improved time complexity, by 71.36 - 5.02 = 66.34%
// when comparing to others that solved it.
// Memory imporvement is only 5.03% -> 13.26%
console.log(71.36 - 5.02);
// OTHER SOL, t = O(n), space = O(1)
var _isPalindrome = function (x) {
    //TIME-COMPLEXITY: O(n);
    //MEMORY: O(1);
    const str = x.toString();
    let leftIndex = 0;
    let rightIndex = str.length - 1;

    while (leftIndex < rightIndex) {
      if (str.charAt(leftIndex) !== str.charAt(rightIndex)) {
        return false;
      }
      leftIndex++;
      rightIndex--;
    }

    return true;
  };
