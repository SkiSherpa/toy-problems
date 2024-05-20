# Given a string s, reverse only all the vowels in the string and return it.

# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

# Example 1:
# Input: s = "hello"
# Output: "holle"

# Example 2:
# Input: s = "leetcode"
# Output: "leotcede"


# Constraints:
# 1 <= s.length <= 3 * 105
# s consist of printable ASCII characters.

# IP: a string
# OP: a string - vowels order has been reversed

# make a list of upper/lowercase vowels
# another list to hold s's vowels
# loop through s backwards
    # IF current char is from the upper/lower list
        # add current char to list
# vowel_count = 0
# loop through s
    # IF current letter is a vowel
        # add the letter in s_vowels into s
        # make Vowel_count go up by one
# return s
class Solution:
    def reverseVowels(self, s: str) -> str:
        list_of_vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        s_vowels = []
        for i in range(len(s) - 1, -1, -1):
            if s[i] in list_of_vowels:
                s_vowels.append(s[i])
        vowel_count = 0
        print(s_vowels)
        for i in range(0, len(s)):
            if s[i] in list_of_vowels:
                s = s[:i] + s_vowels[vowel_count] + s[i+1:]
                vowel_count += 1
        return s

t = Solution()
print(t.reverseVowels('erica'))

# t = O(n), where n is the number of char in s
# m = O(n), where n is the number of chars in s
# t = 272ms 5.03% | 17.63Mb 36.71%
