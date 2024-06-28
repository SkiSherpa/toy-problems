# https://leetcode.com/problems/keyboard-row/description/
# Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

# In the American keyboard:

# the first row consists of the characters "qwertyuiop",
# the second row consists of the characters "asdfghjkl", and
# the third row consists of the characters "zxcvbnm".



# Example 1:

# Input: words = ["Hello","Alaska","Dad","Peace"]
# Output: ["Alaska","Dad"]
# Example 2:

# Input: words = ["omk"]
# Output: []
# Example 3:

# Input: words = ["adsdf","sfd"]
# Output: ["adsdf","sfd"]


# Constraints:

# 1 <= words.length <= 20
# 1 <= words[i].length <= 100
# words[i] consists of English letters (both lowercase and uppercase).

# can you make any words with row3? based on ex3, some of the words don't have to be words, just chars
# IP: a list of words
# OP: a lsit of words
# ? can you return words if they are in two seperate rows, but each word in in a single row
# ex: words = ['we', 'dad'], we is in row1, and dad is in row2
    # assume that is ok

from typing import List
class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        row1 = "qwertyuiop"
        row2 = "asdfghjkl"
        row3 = "zxcvbnm"
        res = []
        for word in words:
            is_in_row1 = True
            is_in_row2 = True
            is_in_row3 = True

            for char in word:
                char = char.lower()
                if char not in row1 and is_in_row1:
                    print('1 hit')
                    is_in_row1 = False
                if char not in row2 and is_in_row2:
                    print('2 hit', char)
                    is_in_row2 = False
                if char not in row3 and is_in_row3:
                    print('3 hit')
                    is_in_row3 = False

            if is_in_row1 or is_in_row2 or is_in_row3:
                res.append(word)
        return res

# t = O(n), where n is the number of chars in words
# m = O(n), where n is the number of chars in words. At worst you add in all the words into the results. There are a handful of constant vars.
# t = 29ms 88.82% | m = 16.39Mb 92.73%

t = Solution()
# print(t.findWords(['we', 'an']))
print(t.findWords(["Alaska"]), ["Alaska","Dad"])
# print(t.findWords(["adsdf","sfd"]), ["adsdf","sfd"])
