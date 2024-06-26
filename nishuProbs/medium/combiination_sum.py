
from typing import List
# https://leetcode.com/problems/combination-sum/description/
# Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

# The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

# The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.


# Example 1:
# Input: candidates = [2,3,6,7], target = 7
# Output: [[2,2,3],[7]]
# Explanation:
# 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
# 7 is a candidate, and 7 = 7.
# These are the only two combinations.

# Example 2:
# Input: candidates = [2,3,5], target = 8
# Output: [[2,2,2,2],[2,3,3],[3,5]]

# Example 3:
# Input: candidates = [2], target = 1
# Output: []


# Constraints:

# 1 <= candidates.length <= 30
# 2 <= candidates[i] <= 40
# All elements of candidates are distinct.
# 1 <= target <= 40
# find the i of the first occurance of target
# IF not found, find the next lowest number
# create a temp list to hold combinations
# loop through candidates backwards from target index
    # adding numbers unitl reaches target
        # add sub list to results
        # reset temp to []
class Solution:
    def combinationSum(self, cand: List[int], target: int) -> List[List[int]]:
        cand.sort()
        j = cand.index(target)
        if j == -1:
            for k in range(len(cand)):
                if cand[k] < target:
                    j = k - 1
        temp = []
        res = []
        i = 0
        temp_sum = target
        while j > 0:
            cur = cand[j]
            if cur == target:
                res.append([cur])
                j -= 1


        return res


# Input: candidates = [2,3,6,7], target = 7
# Output: [[2,2,3],[7]]
t = Solution()
# print(t.combinationSum([2,3,6,7], 7), 'ans', [[2,2,3],[7]])

class Sol:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        # Sort candidates to efficiently prune branches in backtracking
        candidates.sort()
        result = []

        def backtrack(start, current_combination, current_sum):
            if current_sum == target:
                result.append(current_combination[:])
                return
            if current_sum > target:
                return

            for i in range(start, len(candidates)):
                current_combination.append(candidates[i])
                print('i:', i, '__cur val:', candidates[i])
                print(' ')
                print('__cur combo:', current_combination, '__ cur sum:', current_sum)
                backtrack(i, current_combination, current_sum + candidates[i])
                current_combination.pop()
                print('been popped', current_combination)

        backtrack(0, [], 0)
        return result

# Example usage:
p = Sol()
candidates1 = [2, 3, 6, 7]
target1 = 7
print(p.combinationSum(candidates1, target1))  # Output: [[2, 2, 3], [7]]

# candidates2 = [2, 3, 5]
# target2 = 8
# print(p.combinationSum(candidates2, target2))  # Output: [[2, 2, 2, 2], [2, 3, 3], [3, 5]]

# candidates3 = [2]
# target3 = 1
# print(p.combinationSum(candidates3, target3))  # Output: []
