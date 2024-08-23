from typing import List
# You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

# The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:

# The 1st place athlete's rank is "Gold Medal".
# The 2nd place athlete's rank is "Silver Medal".
# The 3rd place athlete's rank is "Bronze Medal".
# For the 4th place to the nth place athlete, their rank is their placement number (i.e., the xth place athlete's rank is "x").
# Return an array answer of size n where answer[i] is the rank of the ith athlete.



# Example 1:

# Input: score = [5,4,3,2,1]
# Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
# Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
# Example 2:

# Input: score = [10,3,8,9,4]
# Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
# Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].



# Constraints:

# n == score.length
# 1 <= n <= 104
# 0 <= score[i] <= 106
# All the values in score are unique.

# loop through og list
    # use cur val to find index in copy
        # IF index is 0,1,2 add in corresponding string to anser
        # else
        # add one to found index and add to answer
class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        answer = []
        score_copy = score[:]
        score_copy.sort()
        score_copy.reverse()

        for rank in score:
            i_copy = score_copy.index(rank)
            print(rank, i_copy)
            if i_copy == 0:
                answer.append("Gold Medal")
            elif i_copy == 1:
                answer.append("Silver Medal")
            elif i_copy == 2:
                answer.append("Bronze Medal")
            else:
                i_copy += 1
                answer.append(f"{i_copy}")

        return answer

# t = O(n), where n is the length of score
# m = O(n), where n is the lenght of score
t = Solution()
# print(t.findRelativeRanks([5,4,3,2,1]), ["Gold Medal","Silver Medal","Bronze Medal","4","5"])
print(t.findRelativeRanks([10,3,8,9,4]))
print(["Gold Medal","5","Bronze Medal","Silver Medal","4"])
