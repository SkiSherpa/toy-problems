# Given an integer array nums, find the
# subarray
#  with the largest sum, and return its sum.



# Example 1:

# Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output: 6
# Explanation: The subarray [4,-1,2,1] has the largest sum 6.
# Example 2:

# Input: nums = [1]
# Output: 1
# Explanation: The subarray [1] has the largest sum 1.
# Example 3:

# Input: nums = [5,4,-1,7,8]
# Output: 23
# Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


# Constraints:

# 1 <= nums.length <= 10^5
# -10^4 <= nums[i] <= 10^4

# Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
# two pointers cur_i and cur_j for the return indexes
# cur_prefix to track the prefix sum
# cur_sum to track the sum
# loop until j at end of nums
    # when cur_prefix is greater than zero fix cur_i

# keep adding to cur sum, if cur sum is less than zero, reset to zero
# set max val to the bigger of the two.
class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        max_val = nums[0]
        cur_sum = 0
        for num in nums:
            if cur_sum < 0:
                cur_sum = 0

            cur_sum += num
            max_val = max(max_val, cur_sum)
        return max_val





t = Solution()
print(t.maxSubArray([1,2,3]), 6)
print(t.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6)
