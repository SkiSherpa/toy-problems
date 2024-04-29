/**
 * https://leetcode.com/problems/maximum-subarray/
Given an integer array nums, find the
subarray with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

Constraints:
1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 * @param {number[]} nums
 * @return {number}
 */
// IP: array of nums
// OP: a num - the largest sum of subarray from nums.

// create curSum var = nums[0]
// create largestSum = nums[0]
// create a set with `(i,j) as key : their sum as val
// i and j pointers, i is first and j is second
// loop through nums
    // IF current idecies is not in set
        // add number at j to curSum
        // add indicies with sum to set
    // otherwise,
        // IF curSum is larger than largestSum
            // set largerSum to curSum
    // j++

var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

};
