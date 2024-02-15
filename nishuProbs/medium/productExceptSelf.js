/**
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.



Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


Constraints:

2 <= nums.length <= 10^5
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 * @param {number[]} nums
 * @return {number[]}
 */
// IP: an array of nums
// OP: a new array of nums - product of every other num, but current

// create a results arr
// loop through nums, i
    // loop through nums, j
        // multiply all nums, but the one at i
        // add product to results

var _productExceptSelf = function(nums) {
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        let product = 1;
        for (let j = 0; j < nums.length; j++) {
            if (i === j) {
                continue
            }
            product *= nums[j];
        }
        results.push(product);
    }
    return results;
};
// exceeds time limit when nums is very large
//  feel like I should be using a cache, but not sure how...
// using 1 as a place holder for populating the two arrs befow
// loop once going forward, stopping at the last number
// loop once going backwards, stopping right before the last number
// ex1:
// front: [1] the place holder, do 1 x nums[0], 1 x nums[0] x nums[1], 1 x nums[0] x nums[1] x nums[2]. we stop before mult nums[3]
// front; [1, 1, 2, 6]
// do the same for the back
// back: [1], placeholder, 1 x 4,   1 x 4 x 3,   1 x 4 x 3 x2, unshift - add to front
// back: [24,12,,4,1]

// front x back, matching each index
// [1, 1, 2, 6]
// [24,12,4, 1]
// =
// [24, 12, 8, 6]
var productExceptSelf = function(nums) {
    let front = [1];
    let back = [1];
    let results = [];
    for (let i = 0; i < nums.length - 1; i++) {
        let product = front[i] * nums[i];
        front.push(product);
    }
    for (let j = nums.length - 1; j > 0; j--) {
        let product = back[0] * nums[j];
        back.unshift(product);
    }
    for (let k = 0; k < nums.length; k++) {
        let product = front[k] * back[k];
        results.push(product);
    }
    return results;
}

console.log(productExceptSelf([1,2,3,4]), [24,12,8,6]);
console.log(productExceptSelf([-1,1,0,-3,3]), [0,0,9,0,0]);
// not the fastest but, its accepted
// t = O(n), where n is the length of nums
// m = O(n), where n is the length of nums, I make 3 array that are the length of nums
