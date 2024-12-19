/*
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.


Example 1:
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

 Example 2:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
[1,2,3], [3,1,2], [2,3,1],
swap first and second
[3,2,1], [1,3,2], [2,1,3]
swap
Check IF swap gen a new array

store found array in an obj {[1,2,3]: 1}
return Object.keys()
Constraints:

1 <= nums.length <= 8
-10 <= nums[i] <= 10
*/

// the len of ans is, IF n is number of unique ints, its len = n!
function _permuteUnique(nums: number[]): number[][] {
	let numbers: { [key: string]: number[] } = {};
	let n = [...nums];
	const len = nums.length - 1;
	for (let i = 0; i <= len; i++) {
		let popped = n.pop();
		if (popped) {
			n.unshift(popped);
		}
		const nKey = n.join(",");
		if (!numbers[nKey]) {
			numbers[nKey] = [...n];
		}
		// swap first and second in at end of list
		if (i === len - 1) {
			let newFirst = n[1];
			let newSecond = n[0];
			n[0] = newFirst;
			n[1] = newSecond;
			i = 0;
			// IF n is in numbers, then were done
			const nKey = n.join(",");
			if (numbers[nKey]) {
				break;
			}
		}
		numbers[nKey] = [...n];
	}
	let ans = Object.values(numbers);
	return ans;
}

// this is the way to solve it.
function permuteUnique(nums: number[]): number[][] {
	const result: number[][] = [];
	nums.sort((a, b) => a - b); // Sort to easily skip duplicates

	const backtrack = (current: number[], remaining: number[]) => {
		if (remaining.length === 0) {
			result.push([...current]);
			return;
		}

		for (let i = 0; i < remaining.length; i++) {
			// Skip duplicates: if the current number is the same as the previous one, skip it
			if (i > 0 && remaining[i] === remaining[i - 1]) {
				continue;
			}

			// Choose the current number and recurse with the remaining numbers
			current.push(remaining[i]);
			backtrack(current, remaining.slice(0, i).concat(remaining.slice(i + 1)));
			current.pop(); // Backtrack: remove the last number
		}
	};

	backtrack([], nums);
	return result;
}
