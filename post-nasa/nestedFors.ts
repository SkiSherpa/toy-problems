// Practice for solving nested for loops

// Classic versions Array/Matrix Problems
// 2 sum / 3 sum / 4 sum

function generateRandomArrayN(n: number): number[] {
	return Array.from({ length: n }, () => Math.floor(Math.random() * 30) + 1);
}

// -----  2 SUM -------
// Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target.
// You may assume that each input has exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9

// assuming arr is sorted.
// split arr down middle, track two indexes,
// IF sum of two indexes > target
// IF index1 = index2 - 1
// subtract one from index1
// otherwise subtract one from index 2
// Otherwise, if sum of two indexes < target
// IF index1 = index2 - 1
// index2 + 1
// otherwise, add one to index1
// Othersie, IF sum of two index = target
// return [index1, index2]
const output1 = function findSum(nums1: number[], target1: number) {
	let index1 = Math.floor(nums1.length / 2);
	let index2 = index1 + 1;
	let results: number[] = [];
	while (index1 > -1 && index2 < nums1.length - 1) {
		let sum = nums1[index1] + nums1[index2];
		console.log(sum, index1, index2);
		if (sum > target1) {
			if (index1 === index2 - 1) {
				index1 -= 1;
			} else {
				index2 -= 1;
			}
		} else if (sum < target1) {
			if ((index1 = index1 - 1)) {
				index2 += 1;
			} else {
				index1 += 1;
			}
		} else if (sum === target1) {
			results = [index1, index2];
			break;
		}
	}
	return results;
};
// console.log(output1(nums1, target1), [0,1]);
const nums12 = [2, 7, 8, 10, 11, 15, 16, 19];
const target12 = 23;
// console.log(output1(nums12, target12), [2, 5]);
// --- A BETTER WAY -----
// USING A HASH MAP (obj, {num, num's compliment}) TO SEE IF THE COMPLIMENT OF THE CUR NUM EXISTS
// O(n) to create the map.
// loop through nums
// IF compliment exists return complement and cur i
// otherwise add cur number & it's index
// IF not found return empty arr
function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>(); // {num, it's index}
	// loop through nums
	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]; // what is cur complement?

		if (map.has(complement)) {
			return [map.get(complement)!, i];
			// ! after var means your telling TS to "trust me" that the .get won't return undefined,
			// b/c we just checked in the IF's conditional, but TS didn't make that connection.
		}
		// has no complement yet, store num & it's index in the map
		map.set(nums[i], i);
	}
	return [];
}
console.log(twoSum(nums12, target12), [2, 5]);

// assuming arr is sorted.
// split arr down middle, track two indexes,
// IF sum of two indexes > target
// IF index1 = index2 - 1
// subtract one from index1
// otherwise subtract one from index 2
// Otherwise, if sum of two indexes < target
// IF index1 = index2 - 1
// index2 + 1
// otherwise, add one to index1
// Othersie, IF sum of two index = target
// return [index1, index2]

// --------- Find the larget sum ------
// Find the largest sum
// Input: nums = [2, 7, 8, 10, 11, 15, 16, 19],
// Output: [16, 19]
// IF you know it's sorted, add the last two numbers - This is Constant so it's the fastest
// IF it's not sorted, sort it, then add the last two numbers. - O(nlog(n))
// There is a faster way for being not sorted, O(n)
// Tracking two largest current nums, max1 & max2,
function largestSum(nums: number[]): number {
	if (nums.length < 2) {
		return 0;
	}
	let max1 = -Infinity;
	let max2 = -Infinity;

	for (const num of nums) {
		if (num > max1) {
			max2 = max1; // set old highest to 2nd highest
			max1 = num; // set new highest to highest
		} else if (num > max2) {
			max2 = num; // IF num > max2, but num < max1
		}
	}
	return max1 + max2;
}
const numsLargest = [2, 7, 8, 10, 11, 15, 16, 19];
console.log("largest sum", largestSum(numsLargest));

// Find the largest sum in the array, return the numbers
const numsR = generateRandomArrayN(8);
console.log(numsR.sort()[7] + numsR.sort()[6], largestSum(numsR));

// What is optimum for 3sum and 4sum
// 	NOT A HASH MAP, SORTING + TWO POINTER is the best way.

// ===================================================================================
// String Problems
// ===================================================================================
// Longest palindromic substring - Can use dynamic programming to optimize nested loops
// Longest common subsequence (LCS) - DP classic that starts with nested loops
// String pattern matching (naive vs KMP) - Shows dramatic improvement over nested loops

// Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.
// A palindrome is a string that reads the same forward and backward
// 1 ≤ s.length ≤ 1000
// s consists of only lowercase English letters

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer

// Input: s = "cbbd"
// Output: "bb"

// Input: s = "racecar"
// Output: "racecar"

// ===================================================================================
// Computational Geometry
// ===================================================================================
// Closest pair of points - Naive O(n²) vs divide-and-conquer O(n log n)
// Convex hull - Various algorithms with different nested loop depths
// Line segment intersection - Sweep line algorithms vs brute force

// ===================================================================================
// Classic Combinatorics
// ===================================================================================
// N-Queens problem - Backtracking with potentially deep nesting
// Subset sum - Can compare nested loops vs DP vs backtracking
// Generate all permutations/combinations - Understanding when deep nesting is necessary

// ===================================================================================
// Sorting
// ===================================================================================
// Bubble sort / Selection sort - Simple O(n²) nested loops
// Counting inversions - Naive O(n²) vs merge sort approach

// ===================================================================================

// ===================================================================================

// ===================================================================================
