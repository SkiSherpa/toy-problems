from typing import List
# The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

# You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

# For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

# Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

# Example 1:
# Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
# Output: [-1,3,-1]
# Explanation: The next greater element for each value of nums1 is as follows:
# - 4 is primed in nums2 = [1,3,4',2]. There is no next greater element, so the answer is -1.
# - 1 is primed in nums2 = [1',3,4,2]. The next greater element is 3.
# - 2 is primed in nums2 = [1,3,4,2']. There is no next greater element, so the answer is -1.

# Example 2:
# Input: nums1 = [2,4], nums2 = [1,2,3,4]
# Output: [3,-1]
# Explanation: The next greater element for each value of nums1 is as follows:
# - 2 is primed in nums2 = [1,2',3,4]. The next greater element is 3.
# - 4 is primed in nums2 = [1,2,3,4']. There is no next greater element, so the answer is -1.


# Constraints:

# 1 <= nums1.length <= nums2.length <= 1000
# 0 <= nums1[i], nums2[i] <= 10^4
# All integers in nums1 and nums2 are unique.
# All the integers of nums1 also appear in nums2.

# IP: two list of nums
# OP: a list of nums
# C: if item not found return -1
# ele in nums1 are the target vals in nums2
# loop thro nums1
    # find the index of the cur value from nums1 in nums2
    # make flag = false
    # loop thro nums2 starting at index found
        # find the val that is greater than the current
            # add to val to results
            # flag equals true
        # if flag is false, add -1 to results

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        results = []
        for n in nums1:
            target_i = nums2.index(n)
            is_found = True
            for i in range(target_i, len(nums2)):
                if nums2[i] > n:
                    is_found = False
                    results.append(nums2[i])
                    break
            if is_found:
                results.append(-1)
        return results

# t = O(n^2), where n is the length of nums1, its possible to run through each nested loop
# m = O(n), where is the length of nums1
# t = 64ms 24.80% | m = 16.63Mb 94.22%

t = Solution()
nums11 = [4,1,2]
nums12 = [1,3,4,2]
print(t.nextGreaterElement(nums11, nums12), [-1,3,-1])
nums21 = [2,4]
nums22 = [1,2,3,4]
print(t.nextGreaterElement(nums21, nums22), [3,-1])
