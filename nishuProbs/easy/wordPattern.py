# Given a pattern and a string s, find if s follows the same pattern.

# Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.


# Example 1:
# Input: pattern = "abba", s = "dog cat cat dog"
# Output: true

# Example 2:
# Input: pattern = "abba", s = "dog cat cat fish"
# Output: false

# Example 3:
# Input: pattern = "aaaa", s = "dog cat cat dog"
# Output: false

# Constraints:

# 1 <= pattern.length <= 300
# pattern contains only lower-case English letters.
# 1 <= s.length <= 3000
# s contains only lowercase English letters and spaces ' '.
# s does not contain any leading or trailing spaces.
# All the words in s are separated by a single space.

# IP: two strings - pattern, s
# OP: bool - true if s matches the pattern
# C: s will have spaces bewtween words
# and words should match to letters in pattern

# create obj to hold relationship between letters in pattern to words
    # {a: dog}
# split s into a list of each word
# loop through pattern with i count
    # IF current letter in pattern is not in obj
        # add current letter and current word to obj
    # otherwise, letter is in obj
        # IF obj at current letter - val does not equal current word
            # return false
# return true
class Solution:
    def wordPattern(self, pattern: str, s: str) -> bool:
        obj = {}
        words = s.split(' ')
        if len(pattern) != len(words):
            return False

        for i in range(0, len(pattern)):
            if pattern[i] not in obj:
                if words[i] in obj.values():
                    return False
                obj[pattern[i]] = words[i]
            else:
                if obj[pattern[i]] != words[i]:
                    return False

        return True


# t = O(n^2), where n is the length of either pattern or s, b/c of the obj.values in a for loop
# m = O(m + n + m), where m is the number of words in s, and n is the number of letters in pattern, due to obj and words that gets created

t = Solution()
print(t.wordPattern("abba", "dog cat cat dog"), True)
# Example 1:
# Input: pattern = "abba", s = "dog cat cat dog"
# Output: true

# Example 2:
# Input: pattern = "abba", s = "dog cat cat fish"
# Output: false
print(t.wordPattern("abba", "dog cat cat fish"), False)
# Example 3:
# Input: pattern = "aaaa", s = "dog cat cat dog"
# Output: false
print(t.wordPattern("aaaa", "dog cat cat fish"), False)
