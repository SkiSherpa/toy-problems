# Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

# You must write an algorithm with O(log n) runtime complexity.


# Example 1:
# Input: nums = [1,3,5,6], target = 5
# Output: 2

# Example 2:
# Input: nums = [1,3,5,6], target = 2
# Output: 1

# Example 3:
# Input: nums = [1,3,5,6], target = 7
# Output: 4


# Constraints:

# 1 <= nums.length <= 10^4
# -10^4 <= nums[i] <= 10^4
# nums contains distinct values sorted in ascending order.
# -10^4 <= target <= 10^4
from typing import List
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if len(nums) == 1:
            if nums[0] == target:
                return 0
            else:
                if nums[0] < target:
                    return 1
                else:
                    return 0
        if len(nums) == 2:
            if nums[0] == target or nums[0] > target:
                return 0
            if nums[1] == target or (nums[0] > target and target < nums[1]):
                return 1
            if nums[1] < target:
                return 2


        def next_search(nums, target, l, r):
            mid_index = (l+r) // 2
            # print(mid_index, l, r)
            if nums[mid_index] == target:
                return mid_index
            elif abs(l - r) == 1:
                # print(mid_index, l, r, nums[mid_index] < target)
                if nums[r] < target:
                    return r+1
                if nums[mid_index] < target:
                    return mid_index + 1
                else:
                    return mid_index
            # print('set l or r', nums[mid_index] < target, nums[mid_index], mid_index)
            if nums[mid_index] < target: # 3 < 5
                l = mid_index
            else:
                r = mid_index

            return next_search(nums, target, l, r)

        i = next_search(nums, target, 0, len(nums) - 1)
        return i

# t = log(n)
# m = log(n)
t = Solution()
print(t.searchInsert([1,3,5,6], 5), 2)
print(t.searchInsert([1,3,5,6], 2), 1)
print(t.searchInsert([1,3,5,6], 7), 4)
print(t.searchInsert([1,3], 4), 2)
print(t.searchInsert([2,7,8,9,10], 9), 3)

        # while length > 0:
        #     mid_index = len(nums) // 2
        #     # check target
        #     if nums[mid_index] == target:
        #         return mid_index
        #     # determine l or r side on nums
        #     if nums[mid_index] > target:
        #         # left
        #         nums[:mid_index]
        #     else:
        #         nums[mid_index:]
        #     length = len(nums)
        # return mid_index
