# We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

# Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

# A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.


# Example 1:
# Input: nums = [1,3,2,2,5,2,3,7]
# Output: 5
# Explanation: The longest harmonious subsequence is [3,2,2,2,3].

# Example 2:
# Input: nums = [1,2,3,4]
# Output: 2

# Example 3:
# Input: nums = [1,1,1,1]
# Output: 0


# Constraints:

# 1 <= nums.length <= 2 * 10^4
# -10^9 <= nums[i] <= 10^9

from typing import List
class _Solution:
    def findLHS(self, nums: List[int]) -> int:
        res = []
        for fixed_i, fixed_num in enumerate(nums):
            chunk = [fixed_num]
            slide_num = 10**9 + 1
            slide_i = fixed_i + 1
            while slide_i < len(nums):
                if abs(fixed_num - nums[slide_i]) == 1 and slide_num == 10**9 + 1:
                    slide_num = nums[slide_i]

                if nums[slide_i] == fixed_num or nums[slide_i] == slide_num:
                    chunk.append(nums[slide_i])
                slide_i += 1
            if len(chunk) > 1:
                is_diff_of_one = False
                num1 = chunk[0]
                for num in chunk:
                    if num != num1:
                        is_diff_of_one = True
                if is_diff_of_one:
                    res.append(chunk)
        if len(res) > 16:
            print(res)
        longest = 0
        for seq in res:
            if len(seq) > longest:
                longest = len(seq)

        return longest

class Solution:
    def findLHS(self, nums: List[int]) -> int:
        nums.sort()  # Sorting the list to easily check consecutive numbers
        start = 0  # Pointer to the start of the current subsequence
        max_length = 0

        for end in range(1, len(nums)):
            # Move the start pointer until the difference is less than or equal to 1
            while nums[end] - nums[start] > 1:
                start += 1

            # Check if we found a valid harmonious subsequence
            if nums[end] - nums[start] == 1:
                max_length = max(max_length, end - start + 1)

        return max_length

t = Solution()
# print(t.findLHS([1,3,2,2,5,2,3,7]), 5)
# print(t.findLHS( [1,2,3,4]), 2)
# print(t.findLHS( [1,1,1,1]), 0)
# print(t.findLHS([-3,-1,-1,-1,-3,-2]), 4)
# print(t.findLHS([1,2,1,3,0,0,2,2,1,3,3]), 6)
print(t.findLHS([2,2,2,2,2,2,2,3,1,0,0,0,3,1,-1,0,1,1,0,0,1,1,2,2,2,0,1,2,2,3,2]), 20)
