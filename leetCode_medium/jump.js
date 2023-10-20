// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

// Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].



// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2

/**
 * @param {number[]} nums
 * @return {number}
 */
// C:1 <= nums.length <= 104
// 0 <= nums[i] <= 1000
// It's guaranteed that you can reach nums[n - 1].
// Assume: nums[i] >= 0

// define a counter = 0
// define pointer for index, starts at 0
// --> restart
// IF index >= nums.length
    // return counter
// determine how much to jump forward from pointer val
// set a largest val
// loop thro all possible resulting vals to find largest
// IF a jump + current val at pointer = largest val
    // jump to that index
// move to largest val's index && increase count++
var _jump = function(nums) {
    let counter = 0;
    let pointer = 0;
    let largestPointer = 0;
    let largestVal = 0;

    while (pointer <= nums.length) {
        console.log(pointer, largestPointer);
        for (let i = 0; i < pointer + nums[pointer]; i++) {
            if (nums[i] > largestVal) {
                largestVal = nums[i];
                largestPointer = i;
            }
            console.log("in FoR largestVal: ", largestVal, largestPointer);
        }
        pointer += largestPointer;
        largestVal = 0;
        counter++;
    }

    return counter;
};

var jump = function(nums) {
    const backtracking = (currentIndex, step) => {
        if (currentIndex === 0) return step;
        if (currentIndex <= nums[0]) return step + 1;

        for (let i = 0; i < currentIndex; i++) {
            if (nums[i] >= currentIndex - i) {
                return backtracking(i, step + 1);
            }
        }
    }
    return backtracking(nums.length - 1, 0);
}

console.log(jump([2,3,1,1,4])); // 2
