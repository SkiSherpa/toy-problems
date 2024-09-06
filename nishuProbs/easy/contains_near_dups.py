# Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

# Example 1:
# Input: nums = [1,2,3,1], k = 3
# Output: true

# Example 2:
# Input: nums = [1,0,1,1], k = 1
# Output: true

# Example 3:
# Input: nums = [1,2,3,1,2,3], k = 2
# Output: false


# Constraints:

# 1 <= nums.length <= 10^5
# -10^9 <= nums[i] <= 10^9
# 0 <= k <= 10^5
from typing import List
# class Solution:
#     def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
#         if len(nums) == 1:
#             return False

#         end = len(nums)

#         for i in range(end):
#             # print('1 hit')
#             for j in range(i+1, k+i+1):
#                 # print(i, nums[i], 'js', j, nums[j])
#                 if j >= end:
#                     break
#                 if nums[i] == nums[j]:
#                     return True
#         return False

# loop through add all number to dict with index as vals
# loop through all values,
    # if len is longer than 2
        # and indexes are with in k range
            # return true
class Sol:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        dict = {}
        for i, num in enumerate(nums):
            if num in dict:
                dict[num].append(i)
            else:
                dict[num] = [i]

        # below is a linear runtime
        # 1:1 relationship of the number of bins and length of lists
        for index_list in dict.values():
            length = len(index_list)
            if length > 1:
                start = 0
                while start < length:
                    for cur in range(start + 1, length):
                        # print(index_list[cur], index_list[start])
                        if index_list[cur] - index_list[start] <= k:
                            return True
                    start += 1
        return False

p = Sol()
print(p.containsNearbyDuplicate([1,2,3,1], 3), True)
print(p.containsNearbyDuplicate([1,0,1,1], 1), True)
print(p.containsNearbyDuplicate([1,2,3,1,2,3], 2), False)
print(p.containsNearbyDuplicate([11,11], 2), True) #17
print(p.containsNearbyDuplicate([1,2], 2), False) #6
# k = 35000 timing out on this test #20
# t = O(n), where n is the length of nums
# m = O(n), where n is the length of nums
