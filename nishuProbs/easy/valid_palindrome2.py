# https://leetcode.com/problems/valid-palindrome-ii/
# Given a string s, return true if the s can be palindrome after deleting at most one character from it.



# Example 1:

# Input: s = "aba"
# Output: true
# Example 2:

# Input: s = "abca"
# Output: true
# Explanation: You could delete the character 'c'.
# Example 3:

# Input: s = "abc"
# Output: false


# Constraints:

# 1 <= s.length <= 105
# s consists of lowercase English letters.

# make a helper fn to determine if str is a palindrome

# loop through s
    # remove cur letter
    # call helper fn
    # IF helper returns true
        # break loop and return true
class Solution:
    def _validPalindrome(self, s: str) -> bool:
        def isPalindrome(str):
            l = 0
            r = len(str) - 1
            while l < r:
                if str[l] != str[r]:
                    return False
                l += 1
                r -= 1
            return True

        for i in range(len(s)):
            new_str = s[:i] + s[i+1:]
            if i == 0:
                new_str = s[i+1:]
            if isPalindrome(new_str):
                return True
        return False
# t = O(n^2), it times out on the tests, 391/472
# m = O(1)
    def __validPalindrome(self, s: str) -> bool:

        for i in range(len(s)):
            new_str = s[:i] + s[i+1:]
            if i == 0:
                new_str = s[i+1:]
            length = len(new_str)
            front = ""
            back = ""
            if length % 2 == 0:
                mid_index = int(length / 2)
                front = new_str[: mid_index]
                back = new_str[mid_index:]
            else:
                mid_index = int(length // 2)
                front = new_str[: mid_index]
                back = new_str[mid_index + 1:]
            back = back[::-1]

            if front == back:
                return True
        return False

# t = O(n^2), but faster than top one, gets to test 432/472

    def validPalindrome(self, s: str) -> bool:
        def is_palindrome_range(s, left, right):
            while left < right:
                if s[left] != s[right]:
                    return False
                left += 1
                right -= 1
            return True

        left, right = 0, len(s) - 1
        while left < right:
            if s[left] != s[right]:
                # Try skipping either left or right character
                # only checking the rest of string
                return is_palindrome_range(s, left + 1, right) or is_palindrome_range(s, left, right - 1)
            left += 1
            right -= 1
        return True

t = Solution()
# print(t.validPalindrome("abca"), True)
# print(t.validPalindrome("abcba"), True)
# print(t.validPalindrome("abc"), False)
print(t.validPalindrome("abdcba"), True)
