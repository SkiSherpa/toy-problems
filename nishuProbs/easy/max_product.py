# Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

# Example 1:
# Input: nums = [1,2,3]
# Output: 6

# Example 2:
# Input: nums = [1,2,3,4]
# Output: 24

# Example 3:
# Input: nums = [-1,-2,-3]
# Output: -6


# Constraints:

# 3 <= nums.length <= 10^4
# -1000 <= nums[i] <= 1000
from typing import List
class Solution:
    def maximumProduct(self, nums: List[int]) -> int:
        nums.sort()
        right_product = 1
        l_product = 1
        last_i = len(nums) - 1
        l_set = False

        for i in range(last_i, last_i - 3, -1):
            right_product *= nums[i]

        if nums[1] < 0 and nums[0] < 0:
            l_set = True
            l_product = nums[0] * nums[1] * nums[last_i]

        if l_product > right_product and l_set:
            return l_product
        return right_product


t = Solution()
print(t.maximumProduct([1,2,3]), 6)
print(t.maximumProduct([1,2,3,4]), 24)
print(t.maximumProduct([-2,-1, 3,4]), 8)
print(t.maximumProduct([-100,-98,-1,2, 3,4]), 39200) #67/93
print(t.maximumProduct([1,0,100]), 0) #85/93
print(t.maximumProduct([-1,-2,-3,-4]), -6)

# t = O(nlog(n)), due to the sort, where n is the length of nums
# m = O(n), due to the sort
# t = 199 ms 88.53% | m = 17.91 Mb 7.23%
