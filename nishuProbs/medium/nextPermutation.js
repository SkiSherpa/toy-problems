/**
 * https://leetcode.com/problems/next-permutation/

Topics
Companies
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

The order of permuations is the number getting bigger
123 < 132 < 213 < 231 < 312 < 321
321 is the largest number of the permutations so it loops around to the first one
Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// IP: a number
// OP: nothing - you modify nums in place

// E: figuring out if your at the end of the perutation list

// check order of each num
/*
1. Find the longest prefix, where you can re-arrange the rest of the nums to get the next largest number.
	1. 2,1,3 is the longest prefix where I can re-arrange 5,4,6 to get the next highest number
	2. [1,2,3, {5} ,4,6]
2. dealing with the 5, indicated by {}. From the following numbers 4,6 which number is the next largest?
	1. The answer is 6, so replace 5 with 6 -> [1,2,3, 6 , 5,4]
3. Now sort the following number in ascending order -> 5,4 -> 4,5 add to the new prefix
*/
var nextPermutation = function(nums) {
    // 1. moving from the back see if nums can be re-arranged to get a larger number
    let i = nums.length - 1;
    while (i >= 0) {
        // can you swap a number with current to get a larger number
            // save the smallest difference, difference >= 1
        // nums[i] can be <= 100, should choose 101 as starting value
        let smallestDiff = 101;
        let swapTarget;
        let cur = nums[i];
        let j = i+1;
        for (j; j < nums.length; j++) {
            let jCurrent = nums[j];
            console.log('cur and jcurr', cur, jCurrent);
            let diff = jCurrent - cur;
            // IF curr < jCurrent
                // perform differnce calc
                // console.log(diff);
            console.log(diff);
            if (diff > 0 && diff < smallestDiff) {
                smallestDiff = diff
                swapTarget = j;
            }
        }
        console.log(swapTarget, j, smallestDiff);
        //2.  switch the smaller of the options in place, swap i and swapTarget
        if (swapTarget) {
            let newI = nums[swapTarget];
            let newST = nums[i];
            console.log('5', newI, '6', newST);
            nums[i] = newI;
            nums[swapTarget] = newST;
            // 3. sort the leftover nums
            // slice off the nums at i + 1
                // sort the nums in ascending order
            // add back onto nums.
            console.log('before slice', nums);
            let back = nums.splice(i+1);
            back.sort((a,b) => a-b);
            console.log(i, 'nums', nums, 'back', back);
            for (let i = 0; i < back.length; i++) {
                nums.push(back[i]);
            }
            console.log('end', nums);
            return;
        }
        i--;
    }
    // IF went through the whole loop and didn't get to break
    // were at the last permutation and need to sort to the lowest number
    nums.sort((a,b) => a-b);
    console.log('sort to smallest', nums);
};
// t = O(nlog(n)), where n is the numbers of the back array from sorting. At worst case you may have to sort m-1, where m is the number of values in nums
// m = O(n), where n is the number of values in nums

// t = 57ms 70.80% | m = 51.98 MB  14.36%

// let t1 = nextPermutation([1,2,3,4]);
// console.log(t1, [1,2,4,3]);
// since 3 < 4, I know have to move the 2
// grab the smaller of the two values on the right of the 2, which is 3
// move 3 to the 2 positon index
// move 4 one space to right
// 2 moves one space to the right
// t1();
// console.log(t1, [1,3,2,4]);

// let t2 = nextPermutation([2, 1, 3, 5, 4, 6]);
// // 4 < 6 -> they switch
// console.log(t2, [2, 1, 3, 5, 6, 4]);
// nextPermutation(t2);
// // 5 < 6 -> but 4 < 5, 6 moves to 5's index,
// // i switched 5 and 6
// // realized 5 and 4 needed to be switched
// // ... 5, 6, 4
// // ... 6,5,4
// // ... 6, 4, 5
// // 1. is finding IF prev < current
// // 2. switch those
// console.log([2, 1, 3, 6, 4, 5]);

// let testCase2 = nextPermutation([3,2,1])
let t117 = nextPermutation([1,3,2]); // 117/266
