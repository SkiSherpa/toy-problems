/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]


Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// IP: array of nums
// OP: same array, but zeros moved to back

// make a var to hold a count of how many zeros there are
// loop through nums
    // if the current is zero
        // zeroCount++
        // move array over by 1 with splice
// loop by zeroCount
    // add zeros to end of nums
var _moveZeroes = function(nums) {
    let numsLen = nums.length
    for (let i = 0; i < numsLen; i++) {
        let cur = nums[i];
        console.log("cur: ", cur, "i", i);
        if (cur === 0) {
            let toAdd = nums.slice(i+1);
            console.log("i", i, toAdd);
            nums.splice(i, toAdd.length, ...toAdd);
            console.log(nums);
            nums.splice(nums.length - 1, 1, 0);
            console.log("3---", nums);

        }
    }
    return nums;
};

// another persons sol:
var moveZeroes = function(nums) {
    let i = 0;
    let j = i + 1;

    while (j <= nums.length - 1) {
        if (nums[i] !== 0) {
            i++;
            j++;
        } else {
            // i is a zero
            if (nums[j] !== 0) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
            j++;
        }
        console.log(i, j, nums);
    }
}
console.log(moveZeroes([0,1,0,3,12])); //[1,3,12,0,0]
// console.log(moveZeroes([0, 0, 1])); // [1, 0, 0]
