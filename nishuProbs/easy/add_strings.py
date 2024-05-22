# Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

# You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.


# Example 1:
# Input: num1 = "11", num2 = "123"
# Output: "134"

# Example 2:
# Input: num1 = "456", num2 = "77"
# Output: "533"

# Example 3:
# Input: num1 = "0", num2 = "0"
# Output: "0"


# Constraints:

# 1 <= num1.length, num2.length <= 10^4
# num1 and num2 consist of only digits.
# num1 and num2 don't have any leading zeros except for the zero itself.

# IP: two strs - but ints
# OP: a str - the two number added together
# convert both nums to ints
# add together
# return sum as string
class Sol:
    def addStrings(self, num1: str, num2: str) -> str:
        return str(int(num1) + int(num2))

# t = Sol()
# print(t.addStrings('11', '123'), '134')
# print(t.addStrings('456', '77'), '533')
# failing test 314/317, where num2 I think is a big int
# so this gets extra complicated with the big int. Sol's are confusing, but i like this one:

class Solution:
    def addStrings(self, num1: str, num2: str) -> str:

        def str2int(num):
            numDict = {'0' : 0, '1' : 1, '2' : 2, '3' : 3, '4' : 4, '5' : 5,
                  '6' : 6, '7' : 7, '8' : 8, '9' : 9}
            output = 0
            for d in num:
                output = output * 10 + numDict[d]
                print(output)
            return output

        return str(str2int(num1) + str2int(num2))

t = Solution()
print(t.addStrings('11', '123'), '134')
