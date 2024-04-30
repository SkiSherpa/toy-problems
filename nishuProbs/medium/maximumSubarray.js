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

var _maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }

};
// prefix = nums[0]
// largestSum = 0
// two pointers, i = 0, j = 1
// loop through nums
    // prefix = current j + prefix
    // IF prefix is negative
        // move left pointer to right pointer
        // set prefix to num at i
    // IF largestSum is less than prefix
        // set largest to prefix

let __maxSubArray = (nums) => {
    let prefix = nums[0];
    let largest = 0;
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        prefix = nums[j] + prefix
        console.log(i, j);
        console.log(nums[i], nums[j], prefix);
        if (prefix < 0) {
            prefix = nums[i];
            i = j;
        }
        if (prefix > largest) {
            largest = prefix;
        }
        j++;
    }
    return largest;
}

let maxSubArray = (nums) => {
    let max = nums[0];
    let curSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (curSum < 0) {
            curSum = 0;
        }
        curSum += nums[i];
        max = Math.max(max, curSum);
    }
    return max;
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6);
// t = O(n), where n is the length of nums
// m = O(1)
