# Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

# Example 1:

# Input: nums = [3,2,1]
# Output: 1
# Explanation:
# The first distinct maximum is 3.
# The second distinct maximum is 2.
# The third distinct maximum is 1.
# Example 2:

# Input: nums = [1,2]
# Output: 2
# Explanation:
# The first distinct maximum is 2.
# The second distinct maximum is 1.
# The third distinct maximum does not exist, so the maximum (2) is returned instead.
# Example 3:

# Input: nums = [2,2,3,1]
# Output: 1
# Explanation:
# The first distinct maximum is 3.
# The second distinct maximum is 2 (both 2's are counted together since they have the same value).
# The third distinct maximum is 1.


# Constraints:

# 1 <= nums.length <= 104
# -2^31 <= nums[i] <= 2^31 - 1


# Follow up: Can you find an O(n) solution?
from heapq import heapify, heappush, heappop
from typing import List

# heapify - arr = [1,2,3]
# heapify( arr )

# Creating empty heap
# heap = []
# heapify(heap)
#   
# # Adding items to the heap using heappush function
# heappush(heap, 10)
# heappush(heap, 30)
# heappush(heap, 20)
# heappush(heap, 400)

# popped = heappop(heap)
class Solution:
    def thirdMax(self, nums: List[int]) -> int:
        numbers = set(nums)
        nums = list(numbers)

        # loop through nums, multiply by -1 for every element
        for i, num in enumerate(nums):
            nums[i] = num * -1

        # edge case of fewer than 3
        if len(nums) < 3:
            return -min(nums)

        heapify(nums)
        # loop unitl desired popped number (3)
        index = 0
        popped = 0
        while index < 3:
            popped = heappop(nums)
            index += 1

        return -popped


t = Solution()
print(t.thirdMax([2,2,3,1]), 1)
