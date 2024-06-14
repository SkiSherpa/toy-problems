# You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

# We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

# Return the reformatted license key.



# Example 1:

# Input: s = "5F3Z-2e-9-w", k = 4
# Output: "5F3Z-2E9W"
# Explanation: The string s has been split into two parts, each part has 4 characters.
# Note that the two extra dashes are not needed and can be removed.
# Example 2:

# Input: s = "2-5g-3-J", k = 2
# Output: "2-5G-3J"
# Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.


# Constraints:

# 1 <= s.length <= 10^5
# s consists of English letters, digits, and dashes '-'.
# 1 <= k <= 10^4

# All uppercase
# group alphanumeric to k
    # C: the first group can be < k
# loop through s backwards and add chars, excluding - except when needed
class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        temp_count = k
        new_format = ''
        length = len(s) - 1
        # print(length)
        for i in range(length, -1, -1):
            char = s[i]
            if char != '-':
                char = char.upper()
                new_format = char + new_format
                temp_count -= 1
            if temp_count <= 0 and i >= 0:
                print(new_format, i, char, temp_count)
                new_format = '-' + new_format
                temp_count = k
                print('2nd',new_format)

        return new_format.lstrip('-')
# this ^^ works but very slowly, great mem tho
# t = O(n^2), because of the loop, then concating with in the loop
# m = O(n), the storing of each new string
# t = 138 ms 8.81% | m = 16.93MB 93.73%
class Sol:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        # Remove all dashes and convert to uppercase
        s = s.replace('-', '').upper()

        # Initialize the result as a list for better performance with string concatenation
        result = []

        # Determine the length of the first group
        first_group_length = len(s) % k
        if first_group_length > 0:
            result.append(s[:first_group_length])

        # Append remaining groups of length k
        for i in range(first_group_length, len(s), k):
            if result:
                result.append('-')
            result.append(s[i:i + k])

        # Join the list into a single string
        return ''.join(result)

# t = O(n), each replace, join, and the loop are n.
# m = O(n), due to replace and join, respectively
# t = 42ms 75.69% | m = 17.42Mb 31.46%

t = Solution()
# print(t.licenseKeyFormatting("5F3Z-2e-9-w", 4), "5F3Z-2E9W")
# print(t.licenseKeyFormatting("2-5g-3-J", 2), "2-5G-3J")
print(t.licenseKeyFormatting("--a-a-a-a--", 2), "AA-AA")
