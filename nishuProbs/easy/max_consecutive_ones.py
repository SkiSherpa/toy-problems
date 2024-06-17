from typing import List
# Given a binary array nums, return the maximum number of consecutive 1's in the array.

# Example 1:
# Input: nums = [1,1,0,1,1,1]
# Output: 3
# Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

# Example 2:
# Input: nums = [1,0,1,1,0,1]
# Output: 2

# Constraints:
# 1 <= nums.length <= 105
# nums[i] is either 0 or 1.
# loop thro the list
    # if the current is a one
        # increase count by one
    # otherwise, check if current count is larger than global count
        # reset temp count back to zero
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        global_count = 0
        cur = 0
        for n in nums:
            if n == 1:
                cur += 1
            else:
                cur = 0
            if cur > global_count:
                    global_count = cur
        return global_count

t = Solution()
print(t.findMaxConsecutiveOnes([1,1,0,1,1,1]), 3)
print(t.findMaxConsecutiveOnes([1,0,1,1,0,1]), 2)

# t = O(n), where n is the numbers of elements in nums
# m = O(1)
# t = 290ms 5.90% | 16.74Mb 57.35%
