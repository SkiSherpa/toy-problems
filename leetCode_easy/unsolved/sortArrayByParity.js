// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.
// Return any array that satisfies this condition.

// Example 1:

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

// Example 2:

// Input: nums = [0]
// Output: [0]


// Constraints:

// 1 <= nums.length <= 5000
// 0 <= nums[i] <= 5000
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// IP: an Array of nums
// OP: an Array of nums, but sort into evens first
// C: the order of the even/odd nums doesn't matter
// make an empty evens and odds array
// loop through nums
    // IF current number is even
        // place in evens array
    // otherwise,
        // place in odds array
// join evens and odds array
// return the joiend array
var sortArrayByParity = function(nums) {
    let evens = [];
    let odds = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens.push(nums[i]);
        } else {
            odds.push(nums[i]);
        }
    }
    // const results = evens.concat(odds);
    // return results;
    // goes from 70ms -> 52ms, by not just returning line 45, like this:
    return evens.concat(odds);
};

console.log(sortArrayByParity([3,1,2,4]));
