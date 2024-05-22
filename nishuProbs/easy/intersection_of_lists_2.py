# Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.


# Example 1:
# Input: nums1 = [1,2,2,1], nums2 = [2,2]
# Output: [2,2]

# Example 2:
# Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# Output: [4,9]
# Explanation: [9,4] is also accepted.


# Constraints:

# 1 <= nums1.length, nums2.length <= 1000
# 0 <= nums1[i], nums2[i] <= 1000


# Follow up:

# What if the given array is already sorted? How would you optimize your algorithm?
# What if nums1's size is small compared to nums2's size? Which algorithm is better?
# What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
# IP: two list of nums
# OP: a new list of nums that are the ssame in both lists
# C: chould have repeats if they occur

# create list to return and hold same nums
# loop through list 1
    # IF cur num from list 1 exists in list 2
        # add cur num to same list
        # delete number in both lists
            # list1 - -slice at i
            # list2 - find index of cur_num
                # then do similar slice

class Solution:
    def intersect(self, nums1: list[int], nums2: list[int]) -> list[int]:
        same = []
        for i in range(0, len(nums1) - 1):
            cur_num = nums1[i]
            if cur_num in nums2:
                same.append(cur_num)
                # slice nums1
                nums1 = nums1[:i] + nums1[i+1:]
                print(nums1)

t = Solution()
t.intersect([1,2,2,1], [2,2])
# Example 1:
# Input: nums1 = [1,2,2,1], nums2 = [2,2]
# Output: [2,2]
