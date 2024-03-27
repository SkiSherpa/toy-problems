/**
 * https://leetcode.com/problems/maximum-product-subarray/
Given an integer array nums, find a
subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

Example 1:
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

Example 2:
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.


Constraints:

1 <= nums.length <= 2 * 10^4
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


 * @param {number[]} nums
 * @return {number}
 */
// [2,3,-2,4]
// product [2, 6, -12, -48]
// [-1, -2, 3, 4] -> 12

// IP: an array of nums
// OP: a number - the largest product from subarray

// [1, 2, 3, - 1, 2, 1, - 1, 3, - 1 6]
// [1, - 1, 2, 2, - 1, 1, - 1, 2, 3, 2, - 1, 2, 3, -1 ]
/*
1. EVEN number of negs
    multiply ever number
2. ODD number of negs
    you cant use the middle neg to take away, both sides will = neg
        if there are 3, 7, 11... neg numbers
    you can use the middle neg if odd number count is 5, 9, 13...

    you look at arrs in front / back of first or last neg number
3. if there is a zero in nums, everything is zero
4. OBVI case, no zeros or neg number, multiply everything

create negIndex array
Loop through nums
    IF the current num is zero, return zero
    IF the current num is negative, save current INDEX to array

Determine if number of negs are EVEN
    Multiply all numbers in nums together

    x = 3 + 5*n
    x+3 / 5 = numbner of negs, cant use middle index for neg
create largest product var = 1
2. IF (number of neg)+3 / 5 equals a whole number
    CANT use middle indexed to take arway
        multiply from zero to first neg index
        mult from one after first neg index to end
        You do this ^^ for each neg index, except the middle one
    Otherwise you can use middle index to take away
*/
var maxProduct = function(nums) {
    // console.log('hi')
    if (nums.length === 1) {
        return nums[0];
    }

    // split up nums on the zeroes and place into an array
    // check each array with code below

    let subNums = [];
    let tempNums = [];
    let zeroFound = false;
    // loop through nums
        // IF current is a zero
            // add tempNums to subNums
            // reset tempNums back to empty arr
        // OTHERWISE, push in current to tempNums
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            subNums.push(tempNums);
            tempNums = [];
            zeroFound = true;
        } else {
            tempNums.push(nums[i]);
            if (i === nums.length - 1) {
                subNums.push(tempNums);
            }
        }
    }
    let globalProduct = 1;
    let isGlobalChanged = false;
    // Loop through subNums
        // for each subarr in subNums run below
    for (let j = 0; j < subNums.length; j++) {
        let currentSubNums = subNums[j];
        console.log('[-2] or [-1]', currentSubNums);
        // get arr of negative number indexes and if a zero is present
        let largestProduct = 1;
        let negIndexes = [];
        for (let i = 0; i < currentSubNums.length; i++) {
            if (currentSubNums[i] < 0) {
                negIndexes.push(i);
            }
        }

        let lenOfNegs = negIndexes.length;
        console.log('negIndexex', negIndexes);
        // IF only one negative value
            // set largestProduct to currentSubNums[0]
        // otherwise, everything below
        if (lenOfNegs === 1) {
            largestProduct = currentSubNums[0];
        } else {
            // all positive currentSubNums:
            if (lenOfNegs === 0) {
                for (let i = 0; i < currentSubNums.length; i++) {
                    // console.log(currentSubNums[i]);
                    if (currentSubNums[i] > 0) {
                        largestProduct *= currentSubNums[i];
                    }
                }
            }

            // neg currentSubNums are present
            if (lenOfNegs % 2 === 0) {
                for (let j = 0; j < lenOfNegs; j++) {
                    largestProduct *= currentSubNums[j];
                }
            }
            // [1, 2, 3, -1, 2, 1, -1, 3, -1, 6] = 32
            // get product of (0, first neg i)
            // (first neg i+1, end)
            for (let curIndex in negIndexes) {
                console.log('hit', negIndexes)
                let left = currentSubNums.slice(0, negIndexes[curIndex]);
                let right = currentSubNums.slice(negIndexes[curIndex+1], lenOfNegs - 1);
                let leftProduct = 1;
                let rightProduct = 1;
                // console.log(subNums, left, right, curIndex);
                for (let l = 0; l < left.length; l++) {
                    leftProduct *= left[l];
                }
                for (let r = 0; r < right.length; r++) {
                    rightProduct *= right[r];
                }
                if (largestProduct < leftProduct) {
                    largestProduct = leftProduct;
                }
                if (largestProduct < rightProduct) {
                    largestProduct = rightProduct;
                }
                console.log(curIndex, largestProduct)
            }
        }
        console.log('global', globalProduct);
        console.log('larget', largestProduct);
        if (largestProduct > globalProduct) {

            globalProduct = largestProduct;
        }
    }
    if (zeroFound && globalProduct < 0) {
        return 0;
    }
    return globalProduct;

};

// console.log(maxProduct([1, 2, 3, -1, 2, 1, -1, 3, -1, 6]), 36);
// [3,5,8]
// console.log(maxProduct([2,3]), 6); // 44/190
// console.log(maxProduct([0,2]), 2); // 48/190
console.log(maxProduct([-2,0,-1]), 0); // 2/190
// I'm not sure how to get around the using 1 for the global, in test 2. 1 is larger than every IP
// I can't think of a way to distinguish between the 1 that initializes the var and if a 1
// appears as an input

// Based on all the flags and IF's that I have there has to be a better solution
