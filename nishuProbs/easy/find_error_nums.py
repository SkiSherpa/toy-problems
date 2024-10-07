# You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

# You are given an integer array nums representing the data status of this set after the error.

# Find the number that occurs twice and the number that is missing and return them in the form of an array.


# Example 1:
# Input: nums = [1,2,2,4]
# Output: [2,3]

# Example 2:
# Input: nums = [1,1]
# Output: [1,2]


# Constraints:

# 2 <= nums.length <= 10^4
# 1 <= nums[i] <= 10^4
from typing import List
class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        nums.sort()
        result = []
        length = len(nums)
        for i in range(length):
            # print(i)
            if i+1 != nums[i]:
                result = [nums[i], i+1]
                break
            # if len(result) == 2:
            #     break

        return result

t = Solution()
print(t.findErrorNums([1,2,2,4]), [2,3])
print(t.findErrorNums([1,1]), [1,2])
print(t.findErrorNums([3,2,3,4,6,5]), [3,1])
print(t.findErrorNums([3,2,2]), [1,2])
