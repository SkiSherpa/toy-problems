// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?
// IP: an arr of nums, a target sum
// OP: arr of 2 nums
// C: a single solution | 2 <=  nums.length <= 10^4
// C: -109 <= nums[i] <= 109 | -109 <= target <= 109

// loop thro list, "outer"
// loop thro "inner" list starting at "outer" list i+1
// IF current outer * current inner === target
// return [current outer, current inner]
var twoSum = function(nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             return [i, j];
    //         }
    //     }
    // }
};

// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([2, 7, 11, 15], 9));
// Time is O(n^2) b/c of nested for loops
// Runtime = 85ms, Mem 41.45MB


// Below is a O(n) - only if the map can be smaller than 92 items, it times out in LeetCodes test
var _twoSum = function(nums, target) {
    let mp = new Map()

    for (let i = 0; i < nums.length; i++) {
        console.log(mp);
        let diff = target - nums[i]

        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }

        mp.set(nums[i], i)
    }
};

// The Map() is storing things somehow, you should probably look it up
console.log(twoSum([0, 1, 2, 3], 5));
// Map stores a pair of values where the first val points to the 2nd val
// You can use .has() and .get() on a Map
// .has() sees if a val existing in the map. Here the diff will be one of the other numbers in the arr.
// This is will loop thro the arr once, it could be less, have the the check if diff - a previous num which is stored in the Map
// Not sure of the time complexity of .has and .get
