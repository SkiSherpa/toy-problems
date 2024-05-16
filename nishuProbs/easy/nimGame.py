# You are playing the following Nim Game with your friend:

# Initially, there is a heap of stones on the table.
# You and your friend will alternate taking turns, and you go first.
# On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.
# The one who removes the last stone is the winner.
# Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.



# Example 1:

# Input: n = 4
# Output: false
# Explanation: These are the possible outcomes:
# 1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
# 2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
# 3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
# In all outcomes, your friend wins.
# Example 2:

# Input: n = 1
# Output: true
# Example 3:

# Input: n = 2
# Output: true


# Constraints:

# 1 <= n <= 2^31 - 1
# 4 - 6 IF my move, I'll loose
# I go first, friend second
# me is odd moves (1, 3)
# fr is even moves

# IF range comes into 4-6 and its my turn I can win
# IF range comes ^^ for fr they win
# have turnCount = 1
# loop until n is less than or equal to 6
    # IF turnCount is odd
        # return true
    # otherwise return false
class Solution:
    def canWinNim(self, n: int) -> bool:
        return bool(n%4)
        # if n < 4:
        #     return True
        # if n < 7 and n > 3:
        #     return False
        # turnCount = 1
        # while n > 4:
        #     print(n)
        #     n = n - 3
        #     if n < 7 and n > 3:
        #         if turnCount % 2 != 0:
        #             return True
        #         else:
        #             return False
        #     turnCount += 1

t1 = Solution()
# print(t1.canWinNim(4), False)
# print(t1.canWinNim(1), True)
# print(t1.canWinNim(2), True)
# print(t1.canWinNim(3), True)
print(t1.canWinNim(15), False)
# the bool(n%4) is the optimal solution
# The combo of both players each taking a turn results to 4, when optimally playing
# if the heap is a multiple of 4 player 1 looses
