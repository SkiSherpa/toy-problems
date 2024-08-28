# Given two strings a and b, return the length of the longest uncommon subsequence between a and b. If no such uncommon subsequence exists, return -1.

# An uncommon subsequence between two strings is a string that is a
# subsequence
#  of exactly one of them.

# Example 1:
# Input: a = "aba", b = "cdc"
# Output: 3
# Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
# Note that "cdc" is also a longest uncommon subsequence.


# Example 2:
# Input: a = "aaa", b = "bbb"
# Output: 3
# Explanation: The longest uncommon subsequences are "aaa" and "bbb".


# Example 3:
# Input: a = "aaa", b = "aaa"
# Output: -1
# Explanation: Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a. So the answer would be -1.

# a = "ab", b = "bba"
# OP: 2 or 3, since b is longer

# Constraints:

# 1 <= a.length, b.length <= 100
# a and b consist of lower-case English letters.

# finding the longest sub sequence of a
# finding the longest sub sequence of b
# determine which is longer a-sub or b-sub
# determining if its that sub sequence is in b

class Solution:
    def findLUSlength(self, a: str, b: str) -> int:

        if len(a) == len(b):
            if a not in b:
                return len(a)

        if len(a) < len(b):
            return len(b)
        if len(b) < len(a):
            return len(a)

        return -1

t = Solution()
# print(t.findLUSlength('aaa', 'bbb'), 3)
print(t.findLUSlength('aaa', 'aaa'), -1)

# too easy, even though confusing
# t = O(1),
# m = O(1).
# t = 31ms 79.64% | m = 16.53Mb 17.39%

# refactored sol for improved t and m
class Sol:
    def _findLUSlength(self, a: str, b: str) -> int:
        len_a = len(a)
        len_b = len(b)
        if len_a == len_b:
            if a not in b:
                return len_a

        if len_a < len_b:
            return len_b
        if len_b < len_a:
            return len_a

        return -1
# t = 26ms 95.76% | m = 16.49Mb 63.52%
