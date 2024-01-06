/*
https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
Given an integer array nums, you need to find one continuous subarray such that if you only sort this subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.

Return the shortest such subarray and output its length.



Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
[4, 6, 8, 9, 10] -> [2,4,6,8,9,10,15]

Example 2:
Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0


Constraints:

1 <= nums.length <= 104
-105 <= nums[i] <= 105


Follow up: Can you solve it in O(n) time complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

// make a copy of nums
// sort the copy
// use pincer to compare when numbers are different
// loop through arr's - start of arr's
// IF cur of Nums !== cur of Copy
    // break - save i
// loop through back of arrs
// IF cur of Nums !== cur of Copy
    // break - save j
// return end - start + 1
var findUnsortedSubarray = function(nums) {
    let copy = nums.slice().sort((a, b) => a - b);
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        if (nums[i + 1] === undefined) {
            return 0;
        }
        if (nums[i] !== copy[i]) {
            break;
        }
        i++;
    }

    while (j >= 0) {
        if (nums[j] !== copy[j]) {
            break;
        }
        j--;
    }
    return j - i + 1;
}
// t = O(nlog(n)), where n is the number of numbers.
    // I think nlog(n) from the sort, the two whiles together is ~ n. = nlog(n) + n
    // If nums is sorted, then first while will go through the whole list

// a pincer
// start = 0
// end = arr.length - 1 (last element)
// loop through are with "start" and "end" pointers

// while start
// IF start+1 val is undefined
    // return zero, b/c nums is sorted
// IF start val > start+1 val
    // break - stop moving with start
// start++

// while end
// IF end-1 val > end val
    // break - stop moving end
// end--

// slice subarray using start and end
// return subarray length;
var _findUnsortedSubarray = function(nums) {
    if (nums.length === 0 || nums.length === 1) {
        return 0;
    }
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        if (nums[start + 1] === undefined) {
            return 0;
        }
        // IF current === next
            // increase start by 1
            // go to next iteration
        if (nums[start] === nums[start+1]) {
            start++;
            continue;
        }
        if (nums[start] > nums[start + 1]) {
            break;
        }
        start++;
    }
    // console.log("bnefore isSame, end", end);
    // let isSame = end;
    // console.log("isSame", isSame);
    while (end >= start) {
        // console.log("in end loop, start, end", start, end);
        if (nums[end - 1] > nums[end]) {
            // end = isSame;
            break;
        }
        // if (nums[end - 1] < nums[end]) {
        //     // set end to isSame
        //     continue;
        // }
        end--
    }
    console.log("start, end", start, end) // 1,4
    return end - start + 1;
};

// consfusing sol below, not mine
var __findUnsortedSubarray = function(nums) {
    let len = nums.length - 1;
    let left = -1;
    let right = -1;
    let  max = nums[0];
    let min = nums[len];
    console.log("i |", "left", "a", "max", "right", "b", "min");
    for (let i = 1; i <= len; i++) {
        let a = nums[i]
        let b = nums[len-i];
        console.log(i,"|", left," ", a , " ", max, " ", right, " ", b, min);
        a < max ? right = i : max = a;
        b > min ? left = i : min = b;
        console.log(i,"|", left," ", a , " ", max, " ", right, " ", b, min);
        console.log("======");
    }
    console.log("L", left, "R", right, len + 1)
    return Math.max(0, left + right - len + 1)
}

// make a copy of nums
// sort the copy
// use pincer to compare when numbers are different
// loop through arr's - start of arr's
// IF cur of Nums !== cur of Copy
    // break - save i
// loop through back of arrs
// IF cur of Nums !== cur of Copy
    // break - save j
// return end - start + 1
var findUnsortedSubarray = function(nums) {
    let copy = nums.slice().sort((a, b) => a - b);
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        if (nums[i + 1] === undefined) {
            return 0;
        }
        if (nums[i] !== copy[i]) {
            break;
        }
        i++;
    }

    while (j >= 0) {
        if (nums[j] !== copy[j]) {
            break;
        }
        j--;
    }
    return j - i + 1;
}
// I don't understand left and right, why use the formula that is there?
// I think he's counting the two ends around the sub array... I dont think that's the case any more.

// console.log(findUnsortedSubarray([2,6,4,8,10,9,15])) // 5
// console.log(findUnsortedSubarray([1,2,3,4])); // 0
// console.log(findUnsortedSubarray([1,3,2,4])); // 2
// console.log(findUnsortedSubarray([1,1,2,3,4]));// 0
// console.log(findUnsortedSubarray([2])) // 0
// console.log(findUnsortedSubarray([2,6])) // 0
// console.log(findUnsortedSubarray([1,3,2])) // 2
// why set left to 1 on first pass?

// console.log(findUnsortedSubarray([2,2,2,2,2]));// 0
// // // ---
// console.log(findUnsortedSubarray([1,2, 3, 3, 3])) // 0
// These two are contradicting each other in my code, might need a new approach.
// console.log("ans", findUnsortedSubarray([1,3,2,2,2])) // 4
// below is the odd case where the prev is smaller
// console.log("ans", findUnsortedSubarray([1,3,2,3,3])) // 2
// ---
// [1,4,2,2,3]
console.log(findUnsortedSubarray([1,4,2,2,3]));// 4
