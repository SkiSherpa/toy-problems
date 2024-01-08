/*
https://leetcode.com/problems/rotate-array/
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105


Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// IP: array of nums, number to rotate by - k
// OP: an array - a rotated "nums" by "k"
// move to the right means wrapping around
// C: you have to use the same values in the array
// C: it seems like you can't use slice

var rotate = function(nums, k) {
    while (nums.length <= k) {
        k = k - nums.length;
    }
    // delete's beginging of the array, saves in temp
    const temp = nums.splice(0, nums.length-k)
    console.log("temp", temp);
    // then adds to back of the array
    nums.push(...temp);
    return nums;
};
// deleting for splice is O(n)
// t = O(n), n is items in nums
//m = O(m), m = nums.length - k, as temp saves all those new numbers

// PASSES ALL TEST, BUT TAKES TO LONG SO IT DOESN'T COUNT
// THE UNSHIFT IS O(n), PUSHES IT TO O(n^2)
// loop through "nums" in reverse, end at len-k+1
    // pop current item
    // place in front of nums
// return nums
var __rotate = function(nums, k) {
    if (k === 0) {
        return nums;
    }
    if (nums.length === 0) {
        return [];
    }
    let len = nums.length-1;
    for (let i = len; i > len-k; i--) {
        let cur = nums.pop();
        nums.unshift(cur);
    }
    return nums;
}
console.log([5,6,7,1,2,3,4],rotate([1,2,3,4,5,6,7], 3)); //[5,6,7,1,2,3,4]
// console.log([3,99,-1,-100], rotate([-1,-100,3,99], 2));

/*
SLICE METHOD - CAN'T USE TO PASS LEETCODE TESTS - NOT STATED IN PROBLEM, RUDE
Double the array
[1,2,3,4, | 5,6,7,1,2,3,4, | 5,6,7]
Then slice the array at k, length of nums
return that slice
*/
// len = 7, k = 3 - inti = 7 - 3 + 1 = len - k + 1
// final = len + k + 1
var _rotate = function(nums, k) {
    if (k === 0) {
        return nums;
    }
    if (nums.length === 0) {
        return [];
    }
    let len = nums.length;
    let double = nums.concat(nums);
    // console.log(double);
    let rotated = double.slice(len-k, len+k+1); // 5, 11
    // console.log(rotated);
    return rotated;
};

// console.log([5,6,7,1,2,3,4],rotate([1,2,3,4,5,6,7], 3)); //[5,6,7,1,2,3,4]
// console.log([3,99,-1,-100], rotate([-1,-100,3,99], 2));
