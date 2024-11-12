# https://leetcode.com/problems/longest-continuous-increasing-subsequence/
# Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

# A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

# Example 1:
# Input: nums = [1,3,5,4,7]
# Output: 3
# Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
# Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element
# 4.

# Example 2:
# Input: nums = [2,2,2,2,2]
# Output: 1
# Explanation: The longest continuous increasing subsequence is [2] with length 1. Note that it must be strictly
# increasing.


# Constraints:

# 1 <= nums.length <= 10^4
# -10^9 <= nums[i] <= 10^9
from typing import List

class Solution:
    def _findLengthOfLCIS(self, nums: List[int]) -> int:
        longest = 0
        cur_len = 0
        cur_i = 1
        longest_updated = True
        while cur_i < len(nums):
            cur_len += 1
            if nums[cur_i - 1] > nums[cur_i]:
                if longest < cur_len:
                    # print(nums[cur_i])
                    longest_updated = False
                    longest = cur_len
                cur_len = 1
            # print(len(nums), nums[cur_i], cur_len)
            if nums[cur_i - 1] == nums[cur_i]:
                # print('hit')
                longest_updated = False
                cur_len = 1
            cur_i += 1
            # print(cur_len)

        if longest < cur_len:
            longest = cur_len
        if longest_updated:
            return len(nums)
        return longest
    # I cant figure out an easy way to handle the constant number with this approach.

    # create an obj to hold {length: [sub array]}
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        subs = {}
        temp = [nums[0]]
        i = 1
        while i < len(nums):
            if nums[i] > nums[i - 1]:
                temp.append(nums[i])
            else:
                subs[len(temp)] = temp
                temp = [nums[i]]
            i += 1
        subs[len(temp)] = temp
        highest = 0
        for count in subs:
            if count > highest:
                highest = count
        return highest

    # much faster solve. like 5 mins
    # t = O(n), have to go through the whole list for the while. Loop through subs, which is always less, but not nested.
    # m = O(n),


t = Solution()
print(t.findLengthOfLCIS([1,3,5,4,7]), 3)
print(t.findLengthOfLCIS([2,2,2,2,2,2]), 1)
print(t.findLengthOfLCIS([1,3,5,7]), 4)
print(t.findLengthOfLCIS([1,3,5,4,2,3,4,5]), 4)
