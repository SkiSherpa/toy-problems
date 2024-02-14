/**
 * There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:
Input: nums = [1], target = 0
Output: -1

Constraints:

1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-10^4 <= target <= 10^4
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// IP: an array of nums, a number - target to look for
// OP: a number - index of where target is, -1 if not found

// binary search - cut nums in half until single values
    // IF a single value is target
        // return that index
// return -1

var _search = function(nums, target) {
    function biSearch(nums, target, startIndex) {
        if (nums[startIndex] === target) {
            return startIndex;
        }
        if (nums.length === 1 || nums.length === 0) {
            return -1;
        }
        // find middle index
        // console.log(nums.length)
        let middleIndex = Math.floor(nums.length / 2);
        // define frontNums array
        // define backNums array
        let frontArr = nums.slice(0, middleIndex);
        let backArr = nums.slice(middleIndex, nums.length);
        // recursive call or (front of nums, target, 0, middleIndex)
        // recursive call for backNums
        console.log(nums, frontArr, backArr, middleIndex);
        biSearch(frontArr, target, 0);
        biSearch(backArr, target, middleIndex);
    }
    return biSearch(nums, target, 0);

};
// My binary search isn't working right,
var __search = function(nums, target) {
    function biSearch(nums, target, start, end) {
        if (start > end) {
            return -1; // Target not found
        }

        let middleIndex = Math.floor((start + end) / 2);

        if (nums[middleIndex] === target) {
            return middleIndex; // Target found
        }

        if (nums[start] <= nums[middleIndex]) {
            // Left half is sorted
            if (target >= nums[start] && target < nums[middleIndex]) {
                return biSearch(nums, target, start, middleIndex - 1); // Search in the left half
            } else {
                return biSearch(nums, target, middleIndex + 1, end); // Search in the right half
            }
        } else {
            // Right half is sorted
            if (target > nums[middleIndex] && target <= nums[end]) {
                return biSearch(nums, target, middleIndex + 1, end); // Search in the right half
            } else {
                return biSearch(nums, target, start, middleIndex - 1); // Search in the left half
            }
        }
    }

    return biSearch(nums, target, 0, nums.length - 1);
};

var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // let mid = left + Math.floor((right - left) / 2);
        let mid = Math.floor((left + right) / 2)
        console.log(left, right, 'mid', mid);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                // Target is in the left sorted half
                right = mid - 1;
            } else {
                // Target is in the right half
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                // Target is in the right sorted half
                left = mid + 1;
            } else {
                // Target is in the left half
                right = mid - 1;
            }
        }
    }
    return -1;
};
var search1 = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor
    }
}
// The while seems pretty fast in terms of leetcode t%
// t = O(log(n)), where n is the length of the nums array
// m = O(1)
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
console.log(search([4,5,6,7,0,1,2], 0), 4);

let nums2 = [4, 5, 6, 7, 0, 1, 2];
let target2 = 3;
console.log(search(nums2, target2));  // Output: -1

let nums3 = [1];
let target3 = 0;
console.log(search(nums3, target3));  // Output: -1
