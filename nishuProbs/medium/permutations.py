from typing import List
# Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

# Example 1:
# Input: nums = [1,2,3]
# Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

# Example 2:
# Input: nums = [0,1]
# Output: [[0,1],[1,0]]

# Example 3:
# Input: nums = [1]
# Output: [[1]]


# Constraints:

# 1 <= nums.length <= 6
# -10 <= nums[i] <= 10
# All the integers of nums are unique.

# loop thro nums and place current at front of list - temp_list
    # loop thro rest of list
        # add the cur nums to temp_list
        # pop off last item and add to front of the rest_of_list
        # keep doing this for length of rest_of_list
# ^^ didn't work, probably because I wasn't sure if it would, so the sol became unclear as I went
# watching a video, https://www.youtube.com/watch?v=s7AvT7cGdSo&ab_channel=NeetCode
# in explination of prob, draws a tree with the possible paths if done with pen and paper
    #          []
    #       /   |   \
    #      1    2    3
    #     / \   /\   / \
    #    2  3  1  3  1  2
    #   /   |  |  |  |   \
    #  3    2  3  1  2   1
# each branch is all the permutations
# trees make me think recursion, I'm going to try solo
# loop thro the list
    # call helper fn with the current number as the first in
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res = []
        copy = nums
        for i in range(len(nums)):
            rest_of_list = nums
            print(i, nums, res)
            temp = [nums[i]]
            del rest_of_list[i]

            def next_perm(prefix, rest_of_list):
                if len(rest_of_list) == 0:
                    nums = copy
                    return prefix
                popped = rest_of_list.pop()
                prefix = prefix + [popped]
                return next_perm(prefix, rest_of_list)

            cur_perm = next_perm(temp, rest_of_list)
            res.append(cur_perm)
            nums = copy
        return res

t = Solution()
# print(t.permute([1,2,3]))
# the logic in this video is similar to what I tried to do: https://www.youtube.com/watch?v=42NUMtEj51g&ab_channel=AlgoJS
class Sol:
    def permute(self, nums: List[int]) -> List[List[int]]:
        lst = []
        res = []
        copy = nums[:]

        def next_permute(nums, lst, res):
            if len(nums) == 0:
                res.append(lst[:])

            for i in range(len(nums)):
                rest_of_lst = nums[:i] + nums[i+1:]
                lst.append(nums[i])
                next_permute(rest_of_lst, lst, res)
                lst.pop()

        next_permute(nums, [], res)
        return res

p = Sol()
print(p.permute([1,2,3]))

# t = O(n*n!), your generating every permutation, where n is the length of nums. I think n*n!, n! permutations of n elements
# m = O(n*n!)
# t = 50ms 6.33% | 16.49Mb 98.45%

# I was running into issues with nums getting deleted with the del
# which makes sense.
# instead of del, I should use slicing - which you knew
# Though I am confused as to why you add a copy in the base case
# There is something with the loop needing to run again, to remove the last two numbers:
# 1st pass, starting with 1 in lst - [1], i = 0
# 2nd , i = 1, add 2 to lst - [1,2]
# 3rd, i = 2, add 3 - [1,2,3], nums is rest_of_lst in recursive call
    # its len is zero, and lst is appended
# Now the call is finished, lst.pop() is
