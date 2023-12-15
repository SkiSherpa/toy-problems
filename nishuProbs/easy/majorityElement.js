/*
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// IP: array of num
// OP: a num, the num that appears the most, at least greater than 50%
// C: there will always be a majority

// define 50% for comparison
// empty "counts" obj - to store occurance of numbers
// loop through "nums"
    // IF the current num is in obj
        // add one to the current num's count
        // IF current num's count is greater than 50%
            // return that num
    // otherwise, add the current num to "counts" with a calue of 1

var majorityElement = function(nums) {
    // if (nums.length <= 2) {
    //     return nums[0];
    // }

    let majority = Math.floor(nums.length / 2); // 0
    let counts = {}
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if (counts[cur]) {
            counts[cur]++;
        } else {
            counts[cur] = 1;
        }
        if (counts[cur] > majority) {
            return cur;
        }
    }

};

// console.log(majorityElement([3,2,3])); // 3
// console.log(majorityElement([2,2,1,1,1,2,2])); // 2
// console.log(majorityElement([1])); // 1
// console.log(majorityElement([1, 1])); // 1

// t = O(n)
// m = O(n)

/* SOL WITH CONSTANT MEM O(1) */

function _majorityElement(nums) {
    let candidate;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1
    }
    return candidate;
};

console.log(_majorityElement([1, 5, 1, 5, 5, 5, 1, 1, 1]));
