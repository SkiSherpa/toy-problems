# Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

# Example 1:
# Input: nums = [3,0,1]
# Output: 2
# Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

# Example 2:
# Input: nums = [0,1]
# Output: 2
# Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

# Example 3:
# Input: nums = [9,6,4,2,3,5,7,0,1]
# Output: 8
# Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.


# Constraints:

# n == nums.length
# 1 <= n <= 10^4
# 0 <= nums[i] <= n
# All the numbers of nums are unique.

# Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

# IP: a list of nums
# OP: an int - the missing num from the list from 0 - n
# sort nums
# make a count var set to zero
# loop from 0 to length of nums
    # IF count does not equal the current in loop
        # return count
    # count go up by one
class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        length = len(nums)
        nums = sorted(nums)
        count = 0
        for i in range(0, length):
            if count != nums[i]:
                return count
            count += 1

        return length

# t = O(nlog(n)), where n is the number of items in nums
# due to the sort
# m = O(1), but only if the range calc does have mem, if it does then its O(n)
# Its O(1), range(#,#) counts on the fly and doesn't store the numbers
t1 = Solution()
# print(t1.missingNumber([3,0,1]))
print(t1.missingNumber([0,1]), 2)
# Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
