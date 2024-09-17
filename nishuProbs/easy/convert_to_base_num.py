# Given an integer num, return a string of its base 7 representation.


# Example 1:
# Input: num = 100
# Output: "202"

# Example 2:
# Input: num = -7
# Output: "-10"


# Constraints:

# -107 <= num <= 107
class Solution:
    def convertToBase7(self, num: int) -> str:
        if num == 0:
            return "0"
        is_negative = num < 0
        num = abs(num)
        base7 = []

        while num > 0:
            base7.append(str(num % 7))
            num //= 7

        if is_negative:
            return "-" + "".join(reversed(base7))
        else:
            return "".join(reversed(base7))

    def convert_to_any_base(self, num: int, target_base: int) -> str:
        if num == 0:
            return "0"
        is_neg = num < 0
        num = abs(num)
        base = []

        while num > 0:
            base.append(str(num % target_base))
            num //= target_base

        if is_neg:
            return "-" + "".join(reversed(base))
        else:
            return "".join(reversed(base))

t = Solution()
print(t.convertToBase7(100), "202")
print(t.convertToBase7(-7), "-10")
print(t.convert_to_any_base(-7, 7), "-10")
print(t.convert_to_any_base(100, 7), "202")
print(t.convert_to_any_base(100, 2))
