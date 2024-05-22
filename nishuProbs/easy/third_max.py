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

# 1 <= nums.length <= 10^4
# -2^31 <= nums[i] <= 2^31 - 1


# Follow up: Can you find an O(n) solution?
# IP: a list of nums
# OP: a int - the third largest number
# create a dict to hold all uniq numbers
# looop through the list
    # IF the current number in not in the dict
        # add it as 'num': num
# create a new sorted list of the distinct numbers in descending order
# return the third item
class Solution:
    def thirdMax(self, nums: list[int]) -> int:
        uniq_nums = {}
        for num in nums:
            if num not in uniq_nums:
                uniq_nums[num] = num

        sorted_nums = sorted(uniq_nums.values(), reverse=True)
        length = len(sorted_nums)
        if length < 3:
            return sorted_nums[0]

        return sorted_nums[2]

t = Solution()
print(t.thirdMax([1]), 1)

# t = O(nlog(n)), where n the number of ints in nums - due to the sort
# m = O(2n) ~ O(n), create the dict and then the sorted_nums list
# t = 47ms 82.01% | m = 17.81 Mb
