from typing import List
# Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

# If target is not found in the array, return [-1, -1].

# You must write an algorithm with O(log n) runtime complexity.


# Example 1:
# Input: nums = [5,7,7,8,8,10], target = 8
# Output: [3,4]

# Example 2:
# Input: nums = [5,7,7,8,8,10], target = 6
# Output: [-1,-1]

# Example 3:
# Input: nums = [], target = 0
# Output: [-1,-1]


# Constraints:

# 0 <= nums.length <= 10^5
# -10^9 <= nums[i] <= 10^9
# nums is a non-decreasing array.
# -10^9 <= target <= 10^9

# two pointers
# find the first occurance of the targt
# start from first index plus one and do the same thing
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 0:
            return [-1, -1]
        def start_index(nums, target):
            start = 0
            end = len(nums) - 1
            res = -1

            while start <= end:
                mid = (start + end) // 2
                if nums[mid] >= target:
                    end = mid - 1
                    if nums[mid] == target:
                        res = mid
                else:
                    start = mid + 1
            return res

        def last_index(nums, target):
            start = 0
            end = len(nums) - 1
            res = -1

            while start <= end:
                mid = (start + end) // 2
                if nums[mid] <= target:
                    start = mid + 1
                    if nums[mid] == target:
                        res = mid
                else:
                    end = mid - 1
            return res

        start = start_index(nums, target)
        end = last_index(nums, target)

        return [start, end]

t = Solution()
print(t.searchRange([5,6,7,8,8,8,10], 8), [3, 5])
# nums = [5,7,7,8,8,10], target = 8

# t = O(lon(n)), binary searchs are log n
