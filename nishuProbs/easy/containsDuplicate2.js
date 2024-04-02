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
var containsNearbyDuplicate = function(nums, k) {
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
