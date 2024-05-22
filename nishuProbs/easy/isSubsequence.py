# Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

# A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

# Example 1:
# Input: s = "abc", t = "ahbgdc"
# Output: true

# Example 2:
# Input: s = "axc", t = "ahbgdc"
# Output: false


# Constraints:

# 0 <= s.length <= 100
# 0 <= t.length <= 104
# s and t consist only of lowercase English letters.


# Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
# IP: two strings - s and t
# OP: boolean - true if t has the same sequence of chars as s
# C: other chars can be inbetween letters and still be true
# get length of s - 1
# two pointers is and jt
# loop through t
    # IF current char at jt is the same as cur char in is
        # move is up by one
# IF length equals is
    # return true
# return false

class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        length = len(s)
        if length == 0:
            return True
        i = 0
        jt = 0
        while jt < len(t):
            if t[jt] == s[i]:
                i += 1
            jt += 1
            if length == i:
                return True
        return False

s = "abc"
t = "ahbgdc"
e = Solution()
print(e.isSubsequence(s, t))

# t = O(n), where n is the length of t
# m = O(1)
# t = 35ms 61.95% | m = 16.56Mb 88.85%
