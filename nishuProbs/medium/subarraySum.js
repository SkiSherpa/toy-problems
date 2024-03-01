/**
 * https://leetcode.com/problems/subarray-sum-equals-k/
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2

Example 2:
Input: nums = [1,2,3], k = 3
Output: 2


Constraints:

1 <= nums.length <= 2 * 10^4
-1000 <= nums[i] <= 1000
-10^7 <= k <= 10^7
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// IP: a number array, target sum
// OP: a number - number of continous items in nums that sum to k

// create sum and count var = 0
// two pointers, i is an anchor, and j moves up by one each time
// loop through nums
    // IF current number equals k
        // count++
        // move i up one
        // make j = i + 1
    // otherwise,
        // add current number to sum
        // IF sum = k
            // count++
            // set sum to zero
            // move i up one
            // make j = i + 1
        // else IF count > k
            // set sum to zero
            // // move i up one
            // make j = i + 1
var _subarraySum = function(nums, k) {
    let sum = 0;
    let count = 0;
    let i = 0;
    while (i < nums.length) {
        console.log(i);
        if (nums[i] === k) {
            count++;
            i++;
        } else {
            sum += nums[i];
            if (sum === k) {
                count++;
                sum = 0;
            } else if (sum > k) {
                sum = 0;
                i++;
            } else {
                i++;
            }
        }
    }
    return count;
}
/*
// ex3: [3,4,7,2,-3,1,4,2], k = 7
results = [3,4], [7], [7,2,-3,1], [1,4,2]
There are many overlapping values
// calclate the sum going from left to right
indexes = --------------- i = [0, 1,  2,  3,  4,  5,  6,  7]
original array = ---------- = [3, 4,  7,  2, -3,  1,  4,  2]
left sum (ls) or prefix sum = [3, 7, 14, 16, 13, 14, 18, 20]

sum[i, j] = ls[j] - ls[i - 1] -> take the sum up to j, subtract the sum up to i
IF (i === 0) sum[i,j] = ls(j)
                                      i       j
indexes = --------------- i = [0, 1,  2,  3,  4,  5,  6,  7]
original array = ---------- = [3, 4,  7,  2, -3,  1,  4,  2]
left sum (ls) or prefix sum = [3, 7, 14, 16, 13, 14, 18, 20]
were looking at [7, 2, -3] (which is not = 7), but how the formula works is
sum[2, 4] = ls[4] - ls[2 - 1]
          =  13   - 7
          = 6
the sum of ls[1] should be stored in the cache, so it won't have to calc that sum again

start with i, j = 0
j goes unitl end of the array
then move i up by one
*/
// loop through nums and create leftSums array cache
// start with i, j, count = 0
// loop through sums
    // j loops through rest of sums
        // IF i === 0, sum[i,j] is ls(i)
        // otherwise,
        // sum[i, j] = ls(j) - ls(i - 1)
        // IF sum == k
            // make count++
// there's a faster method using the same idea, also the video got confusing
var __subarraySum = function(nums, k) {
    const leftSums = [];
    let tempSum = 0;
    for (let i = 0; i < nums.length; i++) {
        tempSum += nums[i];
        leftSums.push(tempSum);
    }
    let count = 0;
    for (let i = 0; i < leftSums.length; i++) {
        let sum;
        for (let j = 0; j < leftSums.length; j++) {
            if (i === 0) {
                sum = leftSums[i];
            } else {
                sum = leftSums[j] - leftSums[i - 1];
            }
            console.log(i, j,'ls[i]',  leftSums[i]);
            console.log('ls[j]', leftSums[j], 'ls[i-1]', leftSums[i-1]);
            if (sum === k) {
                console.log('   -- hit --   ');
                count++
            }
        }
    }
    return count;
}

// still not passing all tests, but may take some tinkering...
var subarraySum = function (nums, k) {
    const len = nums.length;
    if (len === 0) {
        return 0;
    }
    // {prefixSum : occurance of prefixSum}
    let myMap = new Map();
    // I thnk a 0: 1, is added to map for first find of sums == k
    // b/c on i = 1, 3+4 = 7 = currSum
    // so currSum - k = 7 - 7 = 0, with 0:1 in map,
    let i = 0;
    let currSum = 0;
    let count = 0;
     while (i < len) {

        currSum += nums[i]
        // found new subarray with sum == k, the first time
        // it wont exist in the map
        if (currSum === k) {
            count++;
        }
        // IF currSum - k equals a key in map, it already exists
            // add one to occurance of that sum
            // make count go up by one
        // otherwise, add prefixSum to map and make occurance 1
        // 20 -7 = 13
        let prefixSum = currSum - k
        if (myMap.get(prefixSum)) {
            myMap.set(currSum, myMap.get(currSum) + 1);
            count += myMap.get(prefixSum);
        }
        // why is this not an else?
        myMap.set(currSum, 1);

        // increase i by one
        i++;
     }
     return count;
}
/*
 SOL Video, goes through 3 ways, the final,
 fastest way using a cache + map starts at 12:00
 The 1st/2nd method lay the foundation for how it works
 https://www.youtube.com/watch?v=HbbYPQc-Oo4&ab_channel=Techdose
*/
// console.log(subarraySum([1,2,3], 3), 2);
// console.log(subarraySum([1,1,1], 2), 2);
// console.log(subarraySum([1], 0), 0);
// console.log(subarraySum([-1, -1, 1], 0), 1);
// [3, 4,  7,  2, -3,  1,  4,  2]
console.log(subarraySum([3, 4,  7,  2, -3,  1,  4,  2], 7), 4);
// [3,4], [7], [7,2,-3,1], [1,4,2]
console.log(subarraySum([1,-1,1,1,1,1], 3), 3);
console.log(subarraySum([1,2,1,2,1], 3), 4); // 37/93
console.log(subarraySum([-1,-1,1], 0), 1);
// currSum - k = IF there exist a prefixSum that come before
    // then count goes up
// -> [3,4,7]
// currSum = 14, k = 7
// prefixSum at 7, is 3+4 = 7
// So count would go up by one

// count = 0
// IF currSum == k
    // count++
// IF (myMap.find(currSum - k))
    // count += myMap[currSum - k]
/* myMap = {
    sum: count
    3   : 1
    7   : 1 -> count = 1
    14  : 1 -> count = 2
    16  : 1
    13  : 1
---- 14 already exist in map, so its count will go up by one
will make new map obj
}
myMap = {
    sum: count
    3   : 1
    7   : 1
    14  : 2 -> count = 3
    16  : 1
    13  : 1
    18  : 1
    20  : 1 -> but 20 - 7 = 13, which is present in the map
            -> count = 4
*/
