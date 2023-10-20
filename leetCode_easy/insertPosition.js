/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  IP: a sorted number array, a target num
//  OP: the target number's index OR the index of where the target num should be in the sorted list
//  C: should be log(n) rumtime

//  IF indexOf return a value
    // return nums.indexOf(target)
// loop through "nums"
    // IF current > target
        // return previous index val
var searchInsert = function(nums, target) {
    // if (nums.indexOf(target) > -1) {
    //     return nums.indexOf(target);
    // }
    let isExists = nums.indexOf(target);
    if (isExists > -1) {
        return isExists;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) {
            return i;
        }
    }
    return nums.length;
};

// console.log(searchInsert([1,3,5,6], 5)) // 2
// console.log(searchInsert([1,3,5,6], 2)) // 1
// console.log(searchInsert([1,3,5,6], 7)) // 4
console.log(89/4);
// Without isExists var
// t = 45ms, mem = 41.95MB
// with isExists
// t = 43ms, mem = 41.77MB
// indexOf has to be looping through somehow, might as well do it once
