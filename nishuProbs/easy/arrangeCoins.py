# You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

# Given the integer n, return the number of complete rows of the staircase you will build.

# Example 1:


# Input: n = 5
# Output: 2
# Explanation: Because the 3rd row is incomplete, we return 2.
# Example 2:


# Input: n = 8
# Output: 3
# Explanation: Because the 4th row is incomplete, we return 3.


# Constraints:

# 1 <= n <= 231 - 1
# row_count
# loop until n is less than zero
class Solution:
    def arrangeCoins(self, n: int) -> int:
        row_count = 0

        while n >= 0:
            row_count += 1
            n -= row_count

        return row_count - 1

t = Solution()
print(t.arrangeCoins(5), 2)
print(t.arrangeCoins(8), 3)
