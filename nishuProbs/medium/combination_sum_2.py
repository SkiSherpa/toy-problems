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
            start = nums.index(target)
        except ValueError:
            start = len(nums) - 1
        # two pointers start and slide
        sum = 0
        # print(start)
        if nums[start] == target:
            results.append([nums[start]])
        found_combos = set()
        while start >= 0:
            slide = start - 1
            sum = nums[start]
            temp_candidates = [nums[start]]
            # print(start, slide)
            while slide >= 0:
                print(start, slide, sum, sum + nums[slide])
                temp_sum = sum
                print(temp_candidates)
                if sum + nums[slide] == target:
                    # print('found')
                    temp_candidates.append(nums[slide])
                    found_combos.add(tuple(temp_candidates))
                    temp_candidates.pop()
                elif sum + nums[slide] > target:
                    sum = temp_sum
                else:
                    sum += nums[slide]
                    temp_candidates.append(nums[slide])

                # print(found_combos)
                slide -= 1

            start -= 1
        # get all tuples from set and turn into lists
        for tup in found_combos:
            temp_nums = []
            for num in tup:
                temp_nums.append(num)
            results.append(temp_nums)

        return results

t = Solution()
candidates = [10,1,2,7,6,1,5]
target = 8
# [1, 1, 2, 5, 6, 7, 10]

# print(t.combinationSum2(candidates, target), '_', [
# [1,1,6],
# [1,2,5],
# [1,7],
# [2,6]
# ])

candidates2 = [2,5,2,1,2]
target2 = 5
# print(t.combinationSum2(candidates2, target2), '_',
# [
# [1,2,2],
# [5]
# ])
# this has started to get too complicated
# I'm going to try a backtracking method.
    # 1st will look at combination sum I
        # Didn't help at all, but I tried it again and can get to 113/176 tests
    # 2nd if you can't figure it out from there use gpt

# t113 OP:[[5,4,1],[4,4,1,1],[4,4,2],[4,3,2,1]]
# t113 expected: [[1,1,3,5],[1,1,4,4],[1,2,3,4],[1,4,5],[2,3,5],[2,4,4]]
# missing [1,1,3,5] and [2,3,5]
cand113 = [4,1,1,4,4,4,4,2,3,5]
target113 = 10
# print(t.combinationSum2(cand113, target113))

class Sol:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(start, target, path):
            if target == 0:
                result.append(path)
                return
            for i in range(start, len(candidates)):
                # Skip duplicates
                if i > start and candidates[i] == candidates[i - 1]:
                    continue
                # If the number is greater than the target, break since all further numbers will be too
                if candidates[i] > target:
                    break
                # Include candidates[i] in the path and move to the next element
                backtrack(i + 1, target - candidates[i], path + [candidates[i]])

        candidates.sort()
        result = []
        backtrack(0, target, [])
        return result
    # t = 50ms 80.34% | m = 16.45Mb 90.74%
    # I asked for the bottom to mirror how combo1 is solved. This uses addition instead of subtraction
    def combinationSum2_addition(self, candidates: List[int], target: int) -> List[List[int]]:
        def backtrack(start, current_combination, current_sum):
            if current_sum == target:
                result.append(current_combination[:])
                return
            if current_sum > target:
                return

            for i in range(start, len(candidates)):
                if i > start and candidates[i] == candidates[i - 1]:
                    continue
                current_combination.append(candidates[i])
                backtrack(i + 1, current_combination, current_sum + candidates[i])
                current_combination.pop()

        candidates.sort()
        result = []
        backtrack(0, [], 0)
        return result
        # t = 61ms 59.30% | m = 16.54Mb 59.20%
    # The main difference is line 158, and that i gets increased with each call of backtrack, as you can't use the same num in candidates twice like in combo1

# The first soultion is faster, with a better memory
t = Sol()

candidates = [10, 1, 2, 7, 6, 1, 5]
target = 8
print(t.combinationSum2(candidates, target))  # Expected: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]

candidates2 = [2, 5, 2, 1, 2]
target2 = 5
print(t.combinationSum2(candidates2, target2))  # Expected: [[1, 2, 2], [5]]

cand113 = [4, 1, 1, 4, 4, 4, 4, 2, 3, 5]
target113 = 10
print(t.combinationSum2(cand113, target113))  # Expected: [[1, 1, 3, 5], [1, 1, 4, 4], [1, 2, 3, 4], [1, 4, 5], [2, 3, 5], [2, 4, 4]]
