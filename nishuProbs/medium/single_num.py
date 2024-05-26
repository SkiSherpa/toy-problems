# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

# You must implement a solution with a linear runtime complexity.



# Example 1:
# Input: nums = [2,2,1]
# Output: 1

# Example 2:
# Input: nums = [4,1,2,1,2]
# Output: 4

# Example 3:
# Input: nums = [1]
# Output: 1


# Constraints:

# 1 <= nums.length <= 3 * 10^4
# -3 * 10^4 <= nums[i] <= 3 * 10^4

# IP: list of nums
# OP: a num - the one with out a pair
# C: must have linear runtime
# loop through to make this _> {num: occur}
# loop through obj to find num with occur of one
    # return that key/num

class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        dict = {}
        for num in nums:
            if num in dict:
                dict[num] += 1
            else:
                dict[num] = 1

        for number in dict:
            if dict[number] == 1:
                return number

# t = O(n), where n is the length of nums
# m = O(n), where n is the length of nums
# t = 113 ms 45.29% | 19.30 Mb 19.38%

# Follow up: Sol must be t = O(n) and m = O(1).
# two pointers r, l  - loop with r < l
# fix r and move l left
    # if number matches move r up by one, reset l to length
# return num at r


class Sol:
    def singleNumber(self, nums: list[int]) -> int:
        l = 0
        r = len(nums) - 1
        while l < r:
            if nums[r] == nums[l]:
                del nums[r]
                del nums[l]
                l = 0
                r = len(nums) - 1
            else:
                r -= 1

            if r == l and nums[r] == nums[l]:
                return nums[l]
        return nums[l]

e = Sol()
print('ans', e.singleNumber([2,2,1]), 1)
# t = O(n), where n is the length of nums - del is a constant time operation in py
# m = O(1), everything is done in place
# t = 4341 ms 5.02% | m = 18.70 Mb 99.15%
# t is long, but still counts
