# Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

# Example 1:
# Input: num = 38
# Output: 2
# Explanation: The process is
# 38 --> 3 + 8 --> 11
# 11 --> 1 + 1 --> 2
# Since 2 has only one digit, return it.

# Example 2:
# Input: num = 0
# Output: 0


# Constraints:
# 0 <= num <= 2^31 - 1

# Follow up: Could you do it without any loop/recursion in O(1) runtime?
# IP: a number
# OP: a number - sum of all the digits
# turn the num into a string
# split each digit into single num
    # place in array
# sum var set to zero
# loop through array
    # turn each num back to int
    # add to sum
# IF sum is greater than 9
    # recursive call with sum
# otherwise return sum
class Solution:
    def addDigits(self, num: int) -> int:
        string = str(num)
        sum = 0

        for i in range(0, len(string)):
            sum += int(string[i])

        if sum > 9:
            return self.addDigits(sum)
        else:
            return sum

test1 = Solution()
print(test1.addDigits(38), 2)
# 3 + 8 = 11 -> 1 + 1 = 2
