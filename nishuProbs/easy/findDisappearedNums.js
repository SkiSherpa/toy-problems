/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.


Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]


Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n


Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// n = nums.length
// if [4,3,2,7,8,2,3,1] -> 1 - 8 and 5 & 6 are not present
// IP: array of nums
// OP: array of nums - but missing nums from 1 - n, where n is the length of the IP nums array
// C: Can there be ints out side the range of 1 to n contained in nums?
// E: IF "nums" is empty, return empty arr

/* Using a SET insetead of an array */

// create "uniqNums" set to hold all the unique vals from nums
// create "missingNums" array to return
// loop through nums
    // add each num to "uniqNums"
// loop through 1 to n, j
    // IF (!uniqNums.has(j))
        // add j to missingNums
// return missing nums
var _findDisappearedNumbers = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    let uniqNums = new Set;
    let missingNums = []
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        uniqNums.add(nums[i]);
    }
    for (let j = 1; j <= n; j++) {
        if (!uniqNums.has(j)) {
            missingNums.push(j);
        }
    }
    return missingNums;
};








/* Using an array to hold nums, times out */
// what are the missing numbers from 1 - (len of "nums")
// create an empty array "arr"
// make "n" var equal to length of "nums"
// create a loop going from 1, to "n"
    // where i is the current number in range
    // loop through "nums", use j
        // IF i = the current number in nums
            // break inner loop
        // IF j is the last number
            // add i to "arr"

// return arr
var _findDisappearedNumbers = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    let arr = [];
    let n = nums.length;
    for (let i = 1; i <= n; i++) {
        // i should go from 1 - 8
        for (let j = 0; j <= n; j++) {
            if (i === nums[j]) {
                break;
            }
            // console.log("i", i, "nums[j]", nums[j]);
            if (j === n) {
                arr.push(i);
            }
        }
    }
    return arr;
};
