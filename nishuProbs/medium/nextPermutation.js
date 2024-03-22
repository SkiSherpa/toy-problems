/**
 * https://leetcode.com/problems/next-permutation/

Topics
Companies
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

The order of permuations is the number getting bigger
123 < 132 < 213 < 231 < 312 < 321
321 is the largest number of the permutations so it loops around to the first one
Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// IP: a number
// OP: nothing - you modify nums in place

// E: figuring out if your at the end of the perutation list

// check order of each num
var nextPermutation = function(nums) {

};
let t1 = nextPermutation([1,2,3,4])
console.log(t1, [1,2,4,3]);
// since 3 < 4, I know have to move the 2
// grab the smaller of the two values on the right of the 2, which is 3
// move 3 to the 2 positon index
// move 4 one space to right
// 2 moves one space to the right
nextPermutation(t1);
console.log(t1, [1,3,2,4]);

let t2 = nextPermutation([2, 1, 3, 5, 4, 6]);
// 4 < 6 -> they switch
console.log(t2, [2, 1, 3, 5, 6, 4]);
nextPermutation(t2);
// 5 < 6 -> but 4 < 5, 6 moves to 5's index,
// i switched 5 and 6
// realized 5 and 4 needed to be switched
// ... 5, 6, 4
// ... 6,5,4
// ... 6, 4, 5
// 1. is finding IF prev < current
// 2. switch those
console.log(t2, [2, 1, 3, 6, 4, 5]);
