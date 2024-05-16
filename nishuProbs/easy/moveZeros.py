# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.



# Example 1:

# Input: nums = [0,1,0,3,12]
# Output: [1,3,12,0,0]
# Example 2:

# Input: nums = [0]
# Output: [0]


# Constraints:

# 1 <= nums.length <= 104
# -231 <= nums[i] <= 231 - 1


# Follow up: Could you minimize the total number of operations done?

# IP: list of nums
# OP: same list of nums, but zeros at the back

# i pointer
# save length of of nums
# create zeros arr
# loop until i is greater than length AND i in range
    # if current is a zero
        # remove zero
        # place a zero into zeros arr
        # subract one from i
    # i++

class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        i = 0
        zeros = []
        while i < len(nums):
            if nums[i] == 0:
                nums[i: i+1] = []
                zeros.append(0)
                i -= 1
            i += 1
        for j in range(0, len(zeros)):
            nums.append(0)

t1 = [0,1,0,3,12]
t = Solution()
t.moveZeroes(t1)
print(t1)

# t = O(n), where n is the number of items in nums
# m = O(n), where n is the number of items in nums
