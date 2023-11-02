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
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// IP: an array of nums
// OP: a number - appears > 50% of the time
// C: a majority will always exist

// define majority count = nums / 2 round up
// when comparing counts on numbers, it will be >= "majority"
// create a counts obj
// loop through nums
    // add current numbers to counts and count occurances
// IF the count of a number is >= majority
    // return that number
// FOR BEST TIME:
var majorityElement = function(nums) {
    const len = nums.length;
    const maj = Math.ceil(len/2);
    let counts = {};
    for (let i = 0; i < len; i++) {
        let cur = nums[i];
        if (counts[cur]) {
            counts[cur]++;
        } else {
            counts[cur] = 1;
        }
        if (counts[cur] >= maj) {
            return cur;
        }
    }
};

console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2

// FOR BEST MEMORY:
var _majorityElement = function(nums) {
    const maj = Math.ceil(nums.length/2);
    let counts = {};
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if (counts[cur]) {
            counts[cur]++;
        } else {
            counts[cur] = 1;
        }
        if (counts[cur] >= maj) {
            return cur;
        }
    }
};
// t =68ms | mem = 44.18MB; 18.43% | 48.75%
// added in cur in loop
// t = 64ms | mem = 43.62MB; 31.9% | 65.58%
// add len var instead of nums.length in for
// t = 59ms | 43.96MB; 55.98% | 53.93%
// added len to the "maj" calcuation
// t = 48ms | mem = 44.29MB; 94.82% | 46.87%
