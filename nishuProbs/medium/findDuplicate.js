/**
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

Example 1:
Input: nums = [1,3,4,2,2]
Output: 2

Example 2:
Input: nums = [3,1,3,4,2]
Output: 3

Constraints:

1 <= n <= 10^5
nums.length == n + 1
1 <= nums[i] <= n
All the integers in nums appear only once except for precisely one integer which appears two or more times.
 * @param {number[]} nums
 * @return {number}
 */
// IP: an array of nums
// OP: a number - the single repeating number
// C: cannot modify nums
// C: only m = O(1); - can't make a new array

// create a set
// loop through nums
    // IF current number is in the set
        // return that number
    // otherwise add that number to set
var findDuplicate = function(nums) {
    let found = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (found.has(nums[i])) {
            return nums[i];
        } else {
            found.add(nums[i]);
        }
    }
};
// t = O(n), n is length of nums
// m = O(n), n is length of nums,
// it passes all the tests and answer is accepted

// my solution matches the ones on leetcode
