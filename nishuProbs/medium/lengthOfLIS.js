/**
Given an integer array nums, return the length of the longest strictly increasing
subsequence

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4

Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1

Constraints:
1 <= nums.length <= 2500
-10^4 <= nums[i] <= 10^4

Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity?
 * @param {number[]} nums
 * @return {number}
 */
/*
Strictly increasing means, increasing in value, with no repeats.
It doesn't have to consectutive in the original sequence to count, why in ex1 you can skip 5
*/
// IP: array of nums
// OP: a number - longest strictly increasing subsequence

// create a count set to zero
// create two pointers, but one starts +1 to other
// loop through nums
    // if num at i < nums at j
        // make count go up by one
    // otherwise, equal or greater than
        // move j up by one
    // i++ and j++
var _lengthOfLIS = function(nums) {
    let i = 0;
    let j = 1;
    let count = 0;
    let startCount = false
    while (j < nums.length) {
        console.log(i, j, nums[i], nums[j])
        if (nums[i] < nums[j]) {
            startCount = true;
            count++;
        } else if (startCount) {
            j++;
        }
        i++;
        j++;
    }
    return count;
};


// didn't get the first one to pass,
// I did spend 15 mins on figuring out what strictly increasing means,
// and why ex1 skips 5.

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]), [2,3,7,101], "ans is ", 4);
