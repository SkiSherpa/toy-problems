# Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

# A substring is a contiguous sequence of characters within a string.

# Example 1:
# Input: s = "aa"
# Output: 0
# Explanation: The optimal substring here is an empty substring between the two 'a's.

# Example 2:
# Input: s = "abca"
# Output: 2
# Explanation: The optimal substring here is "bc".

# Example 3:
# Input: s = "cbzxy"
# Output: -1
# Explanation: There are no characters that appear twice in s.

# ex4
# IP: s = "abaca"
# OP: 3

# Constraints:
# 1 <= s.length <= 300
# s contains only lowercase English letters.

# create a dict to hold each letter and its occurace

# loop through any char that has an occurance more than 2
    # add each char to list

# longest var = 0
# loop through target char list
    # find start and end index
    # compare difference to longest

class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        if len(s) == 1:
            return -1
        start = 0
        end = len(s) - 1
        occur = {}
        longest = -1

        for char in s:
            if char in occur:
                occur[char] += 1
            else:
                occur[char] = 1

        target_letters = []
        for letter in occur:
            if occur[letter] >= 2:
                target_letters.append(letter)

        for letter in target_letters:
            start = 0
            end = len(s) - 1
            for i in range(len(s)):
                if s[i] == letter:
                    start = i
                    break
                # print(i, start)
            # print('-----')
            for j in range(end, 0, -1):
                if s[j] == letter:
                    end = j
                    break
                # print(j, end)
            # print('0', start, '-', '4', end)
            diff = end - start - 1
            # print(diff)
            if diff > longest:
                longest = diff

        return longest

# t = O(n^2), where n is the number of char pairs
# m = O(n), where n is the number of char pairs
# t = 44ms 26.32% | 16.55Mb 31.48%

t = Solution()
print(t.maxLengthBetweenEqualCharacters('abedceh'), 2)
print(t.maxLengthBetweenEqualCharacters('aa'), 0)
print(t.maxLengthBetweenEqualCharacters('a'), -1)
print(t.maxLengthBetweenEqualCharacters('cbzxy'), -1)
print(t.maxLengthBetweenEqualCharacters("abaca"), 3)
