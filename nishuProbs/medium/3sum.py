from typing import List
# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.




# Example 1:
# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]
# Explanation:
# nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
# nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
# nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
# The distinct triplets are [-1,0,1] and [-1,-1,2].
# Notice that the order of the output and the order of the triplets does not matter.

# Example 2:
# Input: nums = [0,1,1]
# Output: []
# Explanation: The only possible triplet does not sum up to 0.

# Example 3:
# Input: nums = [0,0,0]
# Output: [[0,0,0]]
# Explanation: The only possible triplet sums up to 0.


# Constraints:
# 3 <= nums.length <= 3000
# -10^5 <= nums[i] <= 10^5
# IP: a list of nums
# OP: a list of list, where each sub list is 3 items that add to zero
# C: no duplicates in sub lists, and order in sub list doesnt matter

# save the prefix of two nums
# {index of two nums: the sum of the two numbers}

# loop through the other nums
    # exclude the indexes
    # find third one sums to zero
        # add to the return list
# this was when I was coding
# loop thro dict
            # loop thro nums
                # extract indexes i and j
                # create temperay list to add
                # if the current is the opposite number of value in dict
                # make sure to exclude i and j in nums
                    # add the current number to temp
                    # add i and j numbers from nums to temp
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        num_len = len(nums)
        triples = []
        dict = {}
        for i in range(num_len):
            for j in range(i, num_len):
                indexes = (i,j)
                dict[indexes] = nums[i] + nums[j]

        for item in dict:
            for k in range(num_len):
                i,j = item
                temp = []
                if k != i and k != j and i != j and (nums[k] + dict[item] == 0):
                    temp.append(nums[k])
                    temp.append(nums[i])
                    temp.append(nums[j])
                    temp.sort()
                    if temp not in triples:
                        triples.append(temp)
        return triples

# sort the list
# loop through list
    # i fixed, left and right pointer
    # while left < right
class Sol:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        num_len = len(nums)
        triplets = []
        seen_triplets = set()
        for i in range(num_len):
            left = i + 1
            right = num_len - 1
            while left < right:
                tot = nums[i] + nums[left] + nums[right]
                if tot < 0:
                    left += 1
                elif tot > 0:
                    right -= 1
                else:
                    # found triples that sum to zero
                    trip = [nums[i], nums[left], nums[right]]
                    if tuple(trip) not in seen_triplets:
                        triplets.append(trip)
                        seen_triplets.add(tuple(trip))
                    left += 1
                    right -= 1

        return triplets


t274 = [13,11,-3,-1,6,-11,-11,-12,1,-11,-10,12,3,-11,0,9,3,-13,-10,-2,6,14,9,-4,-9,-3,-9,-15,-10,4,-7,10,1,-3,-5,14,1,-9,-13,-12,-4,-8,7,6,-4,-8,0,6,-14,-3,-11,0,-4,13,3,2,-13,9,2,14,-1,10,10,7,14,12,6,0,-12,0,-5,-9,7,-13,12,10,-13,-3,1,10,9,5,-5,12,-5,13,-1,-11,0,-14,-11,6,3,14,-2,2,11,11,10,6,-4,12,13,10,7,10,5,1]
# I'm going to sort ex1 to make it easier for me to test
test1 = [-1,0,1,2,-1,-4]

# t = Solution()
t = Sol()
# print(t.threeSum(t274)) # this is timing out on the leet tests
# instinct to sort is correct
# Sol is timing out on 311/313
#  I added in the tuple and Set to track the tupils
# its a faster run time than check in a list

print(t.threeSum(test1))
test2 = [0,1,1]
# print(t.threeSum(test2), [])

# t = O(n^2), we have a nested loop
# m = O(n), where n is the number of items in nums,
# due to making the list of list to return, and the set
# t = 1789ms 12.28% | m = 21.91Mb 6.61%
