# You are given an integer array nums consisting of n elements, and an integer k.

# Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10^-5 will be accepted.

# Example 1:
# Input: nums = [1,12,-5,-6,50,3], k = 4
# Output: 12.75000
# Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

# Example 2:
# Input: nums = [5], k = 1
# Output: 5.00000

# Constraints:

# n == nums.length
# 1 <= k <= n <= 10^5
# -10^4 <= nums[i] <= 10^4
from typing import List
class _Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        if len(nums) == 1:
            return float(nums[0])
        # IF k is more than the len of nums
        if len(nums) < k:
            k = len(nums)

        most = -10**4 - 1
        start = 0
        end = len(nums) - k

        while start <= end:
            # print(nums[start])
            sum = 0
            for i in range(start, start+k):
                sum += nums[i]
            cur_avg = sum / k
            if cur_avg > most:
                most = cur_avg
            start += 1
        return most

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        if len(nums) == 1:
            return float(nums[0])
        # IF k is more than the len of nums
        # if len(nums) < k:
        #     k = len(nums)
        most = -10**4 - 1
        # start = 0
        length = len(nums)
        cur_sum = 0
        # find the first sum of k values
        for i in range(0, k):
            # print(nums[i])
            cur_sum += nums[i]

        most = cur_sum
        # print('first sum', cur_sum, end)
        # slide the window
        # subtrack the num on the left from cur_sum
        # add num on right of window to cur-sum
        start = 0
        end = k
        while end < length:
            # remove prev element
            cur_sum -= nums[start]
            start += 1
            # add next element
            cur_sum += nums[end]
            end += 1
            # update most
            most = max(cur_sum, most)

        return float(most / k)

# t = O(n), where n is the length of nums
# m = O(1)
# t = 879ms 71.07% | 28.57Mb 29.95%


t = Solution()
print(t.findMaxAverage([1,12,-5,-6,50,3], 4), 12.75000)
print(t.findMaxAverage([5], 1), 5.00000)
print(t.findMaxAverage([0,1,1,3,3], 4), 2.00000)
# test 96/127 fails, times out, nums and k are very large
