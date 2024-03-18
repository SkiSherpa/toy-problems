/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.



Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).


Constraints:

1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 * @param {number[]} nums
 * @return {number}
 */
// IP: an array of nums - non-descending order
// OP: a number - number of left over elements after removal of duplicates
// C: you can have up to 2 elements in nums that repeate

// create current count = 1
// create currentNum = nums[0] - to hold the current number
// loop through nums
    // IF count is greater than 2 && currentNum === current
        // reset count to zero
        // make current be '_'
    // IF the currentNum === current
        // make count go up by one
    // OTHERWISE,
        // reset count = 1
// run sort on nums
var removeDuplicates = function(nums) {
    let count = 0;
    let currentNum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];

        // if (cur === 1) {
        //     console.log("TOP")
        //     console.log('i', i, count, 'current:', cur );
        // }

        if (currentNum === cur) {
            count++;
        } else {
            currentNum = cur;
            count = 1;
        }
        if (count > 2 && currentNum === cur) {
            // console.log('-- in IF --')
            // console.log('i', i, count, 'current:', cur );
            // count = 0;
            nums[i] = Infinity;
        }
        console.log(i, nums);
    }

    // sort '_' to the back of the array
    nums.sort((a,b) => {
        if (typeof a === 'number' && typeof b === 'string') {
            return -1;
          } else if (typeof a === 'string' && typeof b === 'number') {
            return 1;
          } else {
            return a - b;
          }
    });
    console.log(nums);
    let j = 0;
    for (j; j < nums.length; j++) {
        if (nums[j] === '_') {
            break;
        }
    }
    console.log('j', j);
    return j;
};

// t = O(nlog(n), due to the sort, where n is the length of nums
// m = O(1), it should be constant as everything is handled in place

// t = 59ms 69.23% | m 51.68MB 54.40%
let nums1 = [1,1,1,2,2,3];
let nums2 = [0,0,1,1,1,1,2,3,3];
// Output: 5, nums = [1,1,2,2,3,_]
// console.log(removeDuplicates(nums1), 5);
// console.log([1,1,2,2,3,'_'])

// console.log(removeDuplicates(nums2), 7);
// console.log([0,0,1,1,2,3,3,'_','_'], [0,0,1,1,2,3,3,'_','_'].length - 2);

// const mixedArray = [10, 'a', 5, 'c', 11, 'b'];
// mixedArray.sort((a, b) => {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a - b;
//   } else if (typeof a === 'string' && typeof b === 'string') {
//     return a.localeCompare(b);
//   } else {
//     return a - b;
//   }
// });
// console.log(mixedArray)
