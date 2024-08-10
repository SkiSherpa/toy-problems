# Given two strings s and t, determine if they are isomorphic.

# Two strings s and t are isomorphic if the characters in s can be replaced to get t.

# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


# Example 1:

# Input: s = "egg", t = "add"
# Output: true
# Example 2:

# Input: s = "foo", t = "bar"
# Output: false
# Example 3:

# Input: s = "paper", t = "title"
# Output: true

# s = paper, t = titli
# false

# Constraints:

# 1 <= s.length <= 5 * 10^4
# t.length == s.length
# s and t consist of any valid ascii character.
# loop through both s and t
    # add letter mapping to dict
    # if there is an mismatch of letters
        # return false
class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        letters = {}
        # print(len(s))
        for i in range(len(s)):
            print(letters, i)

            if s[i] in letters:
                if letters[s[i]] != t[i]:
                    return False
            else:
                letters[s[i]] = t[i]
        # making a dict to hold occurances of t letters from "letters"
        t_occur = {}
        for key in letters:
            t_letter = letters[key]
            if t_letter in t_occur:
                return False
            else:
                t_occur[t_letter] = 1

        return True

# t = O(n), where n is the length of s
# m = O(1), because there are only so many letters, 26
# t = 46ms 35.27% | m = 16.72Mb 34.75%

t = Solution()
# print(t.isIsomorphic("egg", "add"), True)
# print(t.isIsomorphic("foo", "bad"), False)
print(t.isIsomorphic("badc", "baba"), False)
