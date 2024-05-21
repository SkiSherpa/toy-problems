# We are playing the Guess Game. The game is as follows:

# I pick a number from 1 to n. You have to guess which number I picked.

# Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

# You call a pre-defined API int guess(int num), which returns three possible results:

# -1: Your guess is higher than the number I picked (i.e. num > pick).
# 1: Your guess is lower than the number I picked (i.e. num < pick).
# 0: your guess is equal to the number I picked (i.e. num == pick).
# Return the number that I picked.



# Example 1:

# Input: n = 10, pick = 6
# Output: 6
# Example 2:

# Input: n = 1, pick = 1
# Output: 1
# Example 3:

# Input: n = 2, pick = 1
# Output: 1


# Constraints:

# 1 <= n <= 231 - 1
# 1 <= pick <= n

# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

# binary search to find
# while until l is greater than r
# left = 0, right = n
# define mid = l + (r - l) // 2
# call guess with mid and save val
# IF val is zero
    # return mid
# IF val is 1
    # right is mid
# IF val is - 1
    # left is mid

class Solution:
    def guessNumber(self, n: int) -> int:
        if n == 1:
            return 1
        left = 0
        right = n
        while left <= right:
            mid = left + (right - left) // 2
            val = guess(mid)
            print(mid, val, left, right)
            if val == 0:
                return mid
            if val == 1: # 1 if mid is lower than the picked number
                left = mid + 1
            else: # -1 mid is higher than the picked number
                right = mid - 1
