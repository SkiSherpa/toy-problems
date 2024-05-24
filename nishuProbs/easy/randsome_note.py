# Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
# Each letter in magazine can only be used once in ransomNote.



# Example 1:
# Input: ransomNote = "a", magazine = "b"
# Output: false

# Example 2:
# Input: ransomNote = "aa", magazine = "ab"
# Output: false

# Example 3:
# Input: ransomNote = "aa", magazine = "aab"
# Output: true


# Constraints:
# 1 <= ransomNote.length, magazine.length <= 10^5
# ransomNote and magazine consist of lowercase English letters.
# IP: two str
# OP: bool - true if all ransomNote letter are in magazine

# place all letters from magazine into obj with occrances
# loop through ransomNote
    # IF current letter in magazine
        # subtract one from current letter in obj
        # IF cur letter count ie less than zero
            # return false
    # else, return false
# return true

class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        chars = {}
        for char in magazine:
            if char in chars:
                chars[char] += 1
            else:
                chars[char] = 1

        for letter in ransomNote:
            if letter in chars:
                chars[letter] -= 1
                if chars[letter] < 0:
                    return False
            else:
                return False
        return True

t = Solution()
print(t.canConstruct('a', 'b'), False)
print(t.canConstruct('aab', 'ab'), False)
print(t.canConstruct('ab', 'aab'), True)

# t = O(n+m), where n and m are number of letters in ransomeNote and magazine
# m = O(n), where n is number of letters in ransomeNote
# t = 65ms 30.39% | 16.65Mb 85.05%
