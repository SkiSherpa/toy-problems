/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.


Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
    the ^^ -1s are prob different -1s in the IP, one a i = 0, and i = 4
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.


Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// IP: an array of ints
// OP: array of arrays - each sub array is of 3 distinct nums that sum to zero

// store trplets in a map - to keep from dulicates
// [-1,0,1,2,-1,-4][-1,0,1,2,-1,-4]
// define nums length
// create a copy of the nums array and double it
// [-1,0,1,2,-1,-4]

// [-1,0] -> figure out what you need to sum to zero
// 0 - [-1 + 0] = 1
// loop through the rest of numsCopy till end length, looking for a 1
// IF found add to [-1, 0] -> [-1, 0, 1]
// push to return array

// [-1, 1]
// 0 - [-1, + 1] = 0, but no zero after 1, which ii good, shouldn't repeat
// go till end length, looking for zero
// IF statement shouldn't trigger, no push
// do this until [-1, -1, -4]
// then move partition up by 1
// [0,1,2,-1,-4,-1]

// [0, 1]
// 0 - [0+1] = -1
var _threeSum = function (nums) {
	let triplets = new Map();
	let copyNums = nums[0];
	let len = copyNums.length - 1;

	let start = 1;
	while (start <= len) {
		// adding the first number, ex -1
		let curTriple = [copyNums[start - 1]];
		// inner loop to change the start pointer
		let i = start;
		while (i <= len) {
			let secondNum = copyNums[start];
			curTriple.push(secondNum);
			// find number to zum to zero
			let targetNum = 0 - curTriple[0] + curTriple[1];
			let j = i + 1;
			while (j <= len) {
				let current = copyNums[j];
				console.log(1, current);
				// IF current sums to zero
				// sort triplet
				// add triplet to map

				j++;
			}
			i++;
		}
		start++;
	}
};

var threeSum = function (nums) {
	// Sort the array
	nums.sort((a, b) => a - b);

	const result = [];
	console.log(nums);
	// Iterate over the array
	for (let i = 0; i < nums.length - 2; i++) {
		console.log("    ");
		console.log("    ");
		console.log("---  ---  new for it  ---  ---");
		// Skip duplicate values for the first element
		if (i > 0 && nums[i] === nums[i - 1]) {
			console.log("continue, i", i);
			continue;
		}

		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			console.log("    ");
			console.log("~~~~~~~    new while it   ~~~~~~~~");
			console.log("i ------", i, "lefti", left, "righti", right);
			console.log(
				"nums[i]",
				nums[i],
				"leftV",
				nums[left],
				"Rvalue",
				nums[right]
			);
			const sum = nums[i] + nums[left] + nums[right];

			if (sum === 0) {
				// Found a triplet with sum 0
				console.log("push", [nums[i], nums[left], nums[right]]);

				result.push([nums[i], nums[left], nums[right]]);

				// Skip duplicate values for the second element
				// i+1 < nums.length (IF i = len)&&
				while (left < right && nums[left] === nums[left + 1]) {
					console.log(`WHILE new left`);
					left++;
				}

				// Skip duplicate values for the third element
				while (left < right && nums[right] === nums[right - 1]) {
					console.log(`WHILE new right`);
					right--;
				}

				// Move pointers
				console.log("CUR pointers L:", left, "Right", right);
				left++;
				right--;

				console.log("end IF, new pointers left:", left, "right", right);
			} else if (sum < 0) {
				// Move left pointer to increase the sum
				left++;
				console.log("sum < 0, left++, new left: ", left);
			} else {
				// Move right pointer to decrease the sum
				right--;
				console.log(", right--, new right: ", right);
			}
		}
	}

	return result;
};
// to sort nums is the key, it allows you to move the pointer and do a pincer-like thing, while scanning for duplicates
// sort will be a nlogn, but this will always be a nested loop sitch, so adding on a nlogn to n^2 doesn't add much

// This approach is better than a recursive solution that is apparently more complicated.
const nums1 = [-1, 0, 1, 2, -1, -1, -4];
// let left = i + 1;
// let right = nums.length - 1;
console.log(threeSum(nums1)); // Output: [[-1, -1, 2], [-1, 0, 1]]

// console.log([[-1,-1,2],[-1,0,1]], threeSum([0, -1, -1, 1, 2]));
// const nums2 = [0, 1, 1];
// console.log(threeSum(nums2)); // Output: []

// const nums3 = [0, 0, 0];
// console.log(threeSum(nums3)); // Output: [[0, 0, 0]]

// console.log(threeSum([[-1,0,1,2,-1,-4]]));
// adding lines
