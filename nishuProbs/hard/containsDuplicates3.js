/**
 * https://leetcode.com/problems/contains-duplicate-iii/description/
You are given an integer array nums and two integers indexDiff and valueDiff.

Find a pair of indices (i, j) such that:

1. i != j,
2. abs(i - j) <= indexDiff.
3. abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.


Example 1:
Input: nums = [1,2,3,1], indexDiff = 3, valueDiff = 0
Output: true
Explanation: We can choose (i, j) = (0, 3).
We satisfy the three conditions:
i != j --> 0 != 3
abs(i - j) <= indexDiff --> abs(0 - 3) <= 3
abs(nums[i] - nums[j]) <= valueDiff --> abs(1 - 1) <= 0

Example 2:
Input: nums = [1,5,9,1,5,9], indexDiff = 2, valueDiff = 3
Output: false
Explanation: After trying all the possible pairs (i, j), we cannot satisfy the three conditions, so we return false.


Constraints:

2 <= nums.length <= 105
-109 <= nums[i] <= 109
1 <= indexDiff <= nums.length
0 <= valueDiff <= 109

 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
// IP: an array of nums, 2 nums
// OP: bool - true if you all 3 conditions pass
/*
1. i != j,
2. abs(i - j) <= indexDiff.
3. abs(nums[i] - nums[j]) <= valueDiff, and
Return true if such pair exists or false otherwise.
*/
//  two pointers
// loop through nums
// where i and j are always off set by indexDiff
    // IF a pair of values satisfies valueDiff
        // return true
// retrurn false
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    let i = 0;
    let j = indexDiff;
    let len = nums.length;
    while (i <= len - indexDiff) {
        for (j; j < len; j++) {
            console.log('Math.abs(nums[i] - nums[j])', Math.abs(nums[i] - nums[j]));
            console.log(i, j, '|i-j|', Math.abs(i-j), '<= valDiff: ', valueDiff);
            if (Math.abs(nums[i] - nums[j]) <= valueDiff && Math.abs(i - j) <= indexDiff) {
                return true;
            }
        }
        i++;
        j = indexDiff + i;
    }
    return false;
};

// console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0), true);
const t2 = [1,5,9,1,5,9];
const iD2 = 2;
const vD2 = 3;
// console.log(containsNearbyAlmostDuplicate(t2, iD2, vD2), false);
console.log(containsNearbyAlmostDuplicate([1,2,2,3,4,5], 3, 0), true); //51 34/
// I think this test case is incorrect ^^^
// There's no value that can be |nums[i] - nums[j]| <= 0, when offset by 3 indicies.
