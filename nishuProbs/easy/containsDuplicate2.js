/**
 * https://leetcode.com/problems/contains-duplicate-ii/
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

Constraints:
1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9
0 <= k <= 10^5

 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/* Conditions:
1. i != j
2. nums[i] == nums[j]
3. abs(i - j) <= k
*/
// IP: array of nums, a int
// OP: Bool - true if 3 conditions met

// video's sol
// !!! the big conceptual take away is - as long as there is 1 duplicate in nums its true

// creates a set
// set i = 0
// loop through nums with j
    // IF j - i > k
        // remove nums[i] from the set
        // i++
    // IF nums[j] is in the set
        // return true - as long as there is 1 duplicate in nums its true
    // add nums[j] to the set
// return false
var containsNearbyDuplicate = function(nums, k) {
    console.log('==============')
    let window = new Set();
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        console.log(i, j, 'cur i', nums[i], 'sur j', nums[j])
        console.log(window);
        if (j - i > k) {
            console.log('will delete', nums[i]);
            // since nums[j] is always added, IF out of bounds for k
            // you need to remove the last one added, b/c its out of bounds
            window.delete(nums[i]);
            i++;
        }
        if (window.has(nums[j])) {
            return true;
        }
        window.add(nums[j]);
    }
    return false;
}
// t = O(kn), where n is the length of nums, k is a constant
// m = O(n), where n is the length of nums,
    // you have the case where there are no dups and you've added every number to the set

// create an obj {number: bool - true if any of numbers pass}
// loop through nums
    // IF current is NOT in obj
        // loop through to k away from current
            // IF j current equals i current
                // add current number to obj, with val of true
// create arr of obj values
// IF length of arr is NOT zero
    // return true
// return false
var ___containsNearbyDuplicate = function(nums, k) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if (!obj[cur]) {
            for (let j = i+1; j < k+i+1; j++) {
                if (cur === nums[j]) {
                    obj[cur] = true;
                }
            }
        }
    }
    let bools = Object.values(obj);
    if (bools.length > 0) {
        return true;
    }
    return false;
}

// create an obj {number: bool - default is false, true if any of numbers pass}
// loop through nums
    // loop through rest of nums, where j starts at i + 1
        // IF nums at i and j are equal
            // IF current number is in obj
                // IF |i - j| <= k
                    // change obj[num] = true
            // otherwise, IF current number is NOT in obj
                // add current number to obj, set bool = false
                // IF |i - j| <= k
                    // change obj[num] = true
// loop through values in obj
    // IF any are false
        // return false
// return true
var __containsNearbyDuplicate = function(nums, k) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let j = i+1;
        let curNum = nums[i];
        for (j; j < nums.length; j++) {
            if (curNum === nums[j]) {
                if (obj[curNum]) {
                    if (Math.abs(i - j) <= k) {
                        obj[curNum] = true;
                    }
                } else {
                    obj[curNum] = false;
                    if (Math.abs(i - j) <= k) {
                        obj[curNum] = true;
                    }
                }
            }
        }
    }
    let bools = Object.values(obj);
    for (let i = 0; i < bools.length; i++) {
        if (bools[i] === false) {
            return false;
        }
    }
    return true;
}





// This initial plan does not account for when some duplicates pass all three conditions and not others
// based on test 2, [1,0,1,1] and k = 1, the first 1 fails 3, but the last 1's, pass. Which I guess counts
// create a set to hold already checked numbers
// create two pointer i and j, where i = j+1
// loop through nums, until i is at the end
    // IF current number is NOT in the set
        // loop through nums, until j is at the end
            // IF values are equal AND NOT condition 3
                // return false
            // j++
        // IF j makes it to the end
            // save value at i into set
    // i++
// return true
var _containsNearbyDuplicate = function(nums, k) {
    let numsChecked = new Set();
    let i = 0;
    while (i < nums.length) {
        if (!numsChecked.has(nums[i])) {
            let dupFound = false;
            let j = i+1;
            while (j < nums.length) {
                console.log(i,j);
                console.log(Math.abs(i-j), )
                if (nums[i] === nums[j] ) {
                    if (!(Math.abs(i - j) <= k)) {
                    dupFound = true;
                }
                }
                j++;
            }
            if (dupFound) {
                numsChecked.add(nums[i]);
            } else {
                return false;
            }
        }
        i++;
    }
    return true;
};

let nums1 = [1,2,3,1];
let k1 = 3
// Output: true

// Example 2:
let nums2 = [1,0,1,1];
let  k2 = 1;
// Output: true

// Example 3:
let nums3 = [1,2,3,1,2,3];
let  k3 = 2;
// Output: false

console.log(containsNearbyDuplicate(nums1, k1), true);
console.log(containsNearbyDuplicate(nums2, k2), true);
console.log(containsNearbyDuplicate(nums3, k3), false);
