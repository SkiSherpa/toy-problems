from typing import List
# https://leetcode.com/problems/combination-sum-ii/
# Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

# Each number in candidates may only be used once in the combination.

# Note: The solution set must not contain duplicate combinations.

# Example 1:
# Input: candidates = [10,1,2,7,6,1,5], target = 8
# Output:
# [
# [1,1,6],
# [1,2,5],
# [1,7],
# [2,6]
# ]

# Example 2:
# Input: candidates = [2,5,2,1,2], target = 5
# Output:
# [
# [1,2,2],
# [5]
# ]


# Constraints:

# 1 <= candidates.length <= 100
# 1 <= candidates[i] <= 50
# 1 <= target <= 30

# change candidates to nums, cause too long
# sort list
# create a set to not add duplicates
# two pointers starting from the back
# j will be 'fixed' and i will slide
# find index of target value and set to j
# loop backwards starting from j
    # sum
    # loop to move i downward
        # add jcur to current i val
        # if sum is target
            # check set and
            # add if not there and add to results
    # move j down by one
class Solution:
    def combinationSum2(self, nums: List[int], target: int) -> List[List[int]]:
        found_combos = set()
        nums.sort()
        results = []
        try:
            j = nums.index(target)
        except ValueError:
            j = len(nums) - 1
        print(nums)
        while j >= 0:
            cur_j = nums[j]
            sum = cur_j
            temp = (cur_j,)
            i = j - 1
            print('fixed val:', cur_j, 'sum:', sum, 'tup:', temp)
            while i >= 0:
                sum += nums[i]
                print(sum)
                if sum > target:
                    sum -= nums[i]
                else:
                    temp += (nums[i],)
                    if sum == target:
                        if temp not in found_combos:
                            found_combos.add(temp)
                            res = list(temp)
                            results.append(res)
                            res.pop()
                            sum -= nums[i]
                            temp = tuple(res)

                i -= 1

            j -= 1

        return results

t = Solution()
candidates = [10,1,2,7,6,1,5]
target = 8
# [1, 1, 2, 5, 6, 7, 10]

print(t.combinationSum2(candidates, target), '_', [
[1,1,6],
[1,2,5],
[1,7],
[2,6]
])
# this has started to get too complicated
# I'm going to try a backtracking method.
    # 1st will look at combination sum I
    # 2nd if you can't figure it out from there use gpt
