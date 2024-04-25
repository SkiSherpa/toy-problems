/**
 * https://leetcode.com/problems/summary-ranges/
You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b

Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"


Constraints:

0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.

 * @param {number[]} nums
 * @return {string[]}
 */
// IP: a uniq nums array, ascending order
// OP: an array of strings - giving ranges of nums

// create empty ranges array
// create start var set to first num
// create count var = 0
// loop through nums
    // IF current number is +1 of previous
        // count goes up by one
    // IF current number is Not +1 of previouse num
        // IF count is zero
            // add current single number to ranges
        // otherwise,
            // add current -> (current number + count) number as string to ranges
            // set count to zero
            // set start
    // IF i === nums.length - 1
        //  / IF count is zero
            // add current single number to ranges
        // otherwise,
            // add current -> (current number + count) number as string to ranges

var summaryRanges = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [`${nums[0]}`];
    }
    let ranges = [];
    let start = nums[0];
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        let prev = nums[i-1]
        if (prev + 1 === nums[i]) {
            count++;
        } else {
            if (count === 0) {
                ranges.push(`${start}`);
                start = nums[i];
            } else {
                ranges.push(`${start}->${prev}`);
                count = 0;
            }
            start = nums[i];
        }
        if (i === nums.length - 1) {
            if (count === 0) {
                ranges.push(`${start}`);
            } else {
                ranges.push(`${start}->${nums[i]}`);
            }
        }
    }
    return ranges;
};

console.log(summaryRanges([0,1,2,4,5,7]), ["0->2","4->5","7"]);
// console.log(summaryRanges([0,2,3,4,6,8,9]), ["0","2->4","6","8->9"]);

// t = O(n), where n is the elements in nums
// m = O(n), when n is the elements in nums
// t = 49ms 67.78% | m = 48.55MB 67.68%
