/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1


Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// IP: array of numbers
// OP: a number - the number that appears once
// C: only int, "nums" will always have one number in it

// {the number: count}

// loop through the list
    // IF indexOf(current val, i) === -1
        // return current val

var singleNumber = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let length = nums.length;

    for (let i = 0; i < length; i++) {
        // IF a pair is found
            // delete current val and found pair
            // reset i, i--
        let cur = nums[i];
        let iOfPair = nums.indexOf(nums[i], i+1);
        if (iOfPair === -1) {
            return cur;
        }
        nums.splice(i, 1);
        nums.splice(iOfPair-1, 1);
        i--;
    }
};

// console.log(singleNumber([2,2,1])) // 1
// console.log(singleNumber([4,1,2,1,2])) // 4
// console.log(singleNumber([1])) // 1

// t = 221ms | mem = 46.62MB ; 12.13% | 30.65%

// Someone elses Sol:
var singleNumber = function (nums) {
    let arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it
    console.log(arr);
    for (let i = 0; i <= nums.length - 1; i += 2) { // Iterate by 2
        if (arr[i] !== arr[i + 1]) {
            return arr[i];
        }
    }

    return arr[arr.length - 1];  // Return the first non-matching pair
};

//   60ms | 44.62MB; 61.18% | 59.83%
// console.log(singleNumber([1,4,2,1,2])) // 4
let arr = [1,2,3];
console.log(arr, arr.length);
delete arr[0];
console.log(arr, arr.length);
