/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.



Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]

Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109


Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// IP: array1(nums1) and number 1, and another array2(nums2) and its number 2
// OP: a merged sorted nums1 array
// C: have to return nums1 but is merged with the numbers from nums2

// loop through nums2
    // set current value of nums2
    // loop through nums1, only need to go up to m
        // is the current val of num2 <= current of nums1
        // 2 <= 1?
        // 2 <= 2
        // splice in current val of nums2
        // remove the last zero
// return nums1

// if (m === 0 & n === 1) {
//     nums1[0] = nums2[0];
// }
// console.log(nums1, nums2);
// for (let j = 0; j < n; j++) {
//     let cur2 = nums2[j];
//     for (let i = 0; i < m+n; i++) {
//         let cur1 = nums1[i];
//         console.log(cur2,"<=", cur1)
//         if (cur2 <= cur1) {
//             // console.log("hit");
//             nums1.splice(i, 0, cur2);
//             nums1.pop();
//             break;
//         }
//         if (cur1 === 0 && i > m) {
//             nums1.splice(i, 0, cur2);
//             nums1.pop();
//             break;
//         }
//     }
// }
// return nums1;
var _merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let leftInNums2 = n;
    while (leftInNums2 > 0) {
        // loop through nums1
        // IF num1[i] < num2[j]
            // splice in num2[j] at i
            // remove a trailing zero
            // increase j by one
            // break
        // otherwise, IF num1[i] > num2[i]
            // IF (i === 0)
                // add to the front of nums1
                // remove a trailing zero
                // increase j by one
                // break
            // otherwise,
            // splice in num2[j] at i - 1
            // remove a trailing zero
            // increase j by one
            // break
        // set i = 0;
        while (i < m+n) {
            let cur1 = nums1[i];
            let cur2 = nums2[j];
            if (cur1 < cur2) {
                nums1.splice(i+1, 0, cur2);
                nums1.pop();
                j++;
                leftInNums2--;
                break;
            } else if (cur1 > cur2) {
                if (i === 0) {
                    nums1.unshift(cur2);
                    nums1.pop();
                    j++;
                    leftInNums2--;
                    break;
                }
                nums1.splice(i, 0, cur2);
                nums1.pop();
                j++;
                leftInNums2--;
                break;
            }
            i++;
        }
        i = 0;
    }
    return nums1;
};

// chop off trailing zeros from nums1
// add each num from nums2
// use .sort on nums1
var merge = function(nums1, m, nums2, n) {
    let nums2Len = nums2.length;
    let nums1Len = nums1.length;

    if (nums2Len === 0) {
        return nums1;
    }

    if (m === 0 & n === 1) {
        nums1[0] = nums2[0];
        return nums1;
    }

    if (m === 0 &&  nums1Len > 0) {
        nums1 = [];
    } else {
        let i = nums1.length - m;
        nums1.splice(i, m);
    }
    for (let j = 0; j < nums2Len; j++) {
        nums1.push(nums2[j]);
    }
    nums1.sort();
    return nums1;
}

// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); // [1,2,2,3,5,6]
// console.log(merge([1,1,2,3,0,0,0], 4, [2,5,6], 3)); // [1,1,2,2,3,5,6]
// console.log(merge([1], 1, [], 0)); // [1]
// console.log(merge([0], 0, [1], 1)); // [1]
// console.log(merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3)) // [-1,0,0,1,2,2,3,3,3]
// console.log(merge([1,0], 1, [2], 1)); // [1,2]
// console.log(merge([0,0,0,0,0], 0, [1,2,3,4,5], 5)) // [1,2,3,4,5]
