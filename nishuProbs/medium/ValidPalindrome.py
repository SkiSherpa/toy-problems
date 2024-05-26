# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

# Example 1:
# Input: s = "A man, a plan, a canal: Panama"
# Output: true
# Explanation: "amanaplanacanalpanama" is a palindrome.

# Example 2:
# Input: s = "race a car"
# Output: false
# Explanation: "raceacar" is not a palindrome.

# Example 3:
# Input: s = " "
# Output: true
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty string reads the same forward and backward, it is a palindrome.


# Constraints:
# !! Need to use constant memory !!
# 1 <= s.length <= 2 * 10^5
# s consists only of printable ASCII (ask-ee) characters.

# IP: a str
# OP: bool - true if s is a palindrome
# two pointers, r, l
# loop until r > l
    # l_is_alpha, r_is_alpha = true
    # IF current r char is NOT an alpa # txt.isalpha()
        # move up r by one
        # is alpha is false
    # IF current r char is NOT an alpa # txt.isalpha()
        # move l down by one

    # whatever the cur char is covert to lowercase
        # if l and r are not equal
            # return false

class Solution:
    def isPalindrome(self, s: str) -> bool:
        l = 0
        r = len(s) - 1

        while l < r:
            l_is_alpha = True
            r_is_alpha = True
            if not s[r].isalpha():
                r -= 1
                r_is_alpha = False
            if not s[l].isalpha():
                l += 1
                l_is_alpha = False

            if l_is_alpha and r_is_alpha:
                l_char = s[l].lower()
                r_char = s[r].lower()
                if l_char != r_char:
                    return False
                l += 1
                r -= 1

        return True

t = Solution()
# print(t.isPalindrome("A man, a plan, a canal: Panama"), True)
print(t.isPalindrome("race a car"), False)
# print(t.isPalindrome(" "), True)
