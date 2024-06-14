# Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

# Example 1:
# Input: num = "1432219", k = 3
# Output: "1219"
# Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

# Example 2:
# Input: num = "10200", k = 1
# Output: "200"
# Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

# Example 3:
# Input: num = "10", k = 2
# Output: "0"
# Explanation: Remove all the digits from the number and it is left with nothing which is 0.


# Constraints:

# 1 <= k <= num.length <= 10^5
# num consists of only digits.
# num does not have any leading zeros except for the zero itself.
# IP: a str - number, an int
# OP: a str  - remove all leading zeros

# copy num and k
# smallest var
# delete numbers from the front, unless it leaves a leading zeros after deleting
class Solution:
    def _removeKdigits(self, num: str, k: int) -> str:
        length = len(num) - 1
        smallest = num
        n_copy = num
        k_copy = k
        i = 0
        start = 0
        found = {}
        while i < length:
            print(i, n_copy, k_copy)
            print(found)
            if n_copy in found or n_copy[0] == '0':
                i+=1
            else:
                n_copy = n_copy[:i] + n_copy[i+1:]
                print(n_copy) # 10
                k_copy -= 1 # 1
                # i += 1 # 1
                if k_copy == 0:
                    if int(n_copy) < int(smallest):
                        smallest = n_copy #12
                    found[smallest] = int(smallest)
                    start += 1 # s = 2
                    i = start - 1 # i = 2
                    k_copy = k
                    n_copy = num
            i += 1
        return smallest

# algo to solve is called a monotonic stack
# make a stack, a list
# Loop thro each digit
    # while the stack is not empty, k > 0, the cur digit is smaller than the stack's top
        # remove the top of the stack
        # k--
    # push the cur num into the stack
# IF k is not zero, remove from the end of the stack
# remove leading zeros
# IF stack is empty, return zero
# otherwise return the result
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        stack = []
        for n in num:
            while len(stack) != 0 and k > 0 and n < stack[-1]:
                stack.pop()
                k -= 1
            stack.append(n)
        while k > 0:
            stack.pop()
            k -= 1

        res = ''.join(stack).lstrip('0')

        if len(res) == 0:
            return '0'
        return res

# t = O(n), where n is the number of digits in num
# the for loop and .join are both linear
# m = O(n), where n is the number of digits in num
# due to creation of the stack
# t = 62ms 38.78% | m = 17.90Mb 60.43%

t = Solution()
# print(t.removeKdigits("1012", 2), "1") # delete leading 1 and 2
# print(t.removeKdigits("103009", 3), "0")
# print(t.removeKdigits("103009", 1), "3009")
# print(t.removeKdigits('1432219', 3), '1219')
# print(t.removeKdigits('10200', 1), '200')
# print(t.removeKdigits('10', 2), '0')
# print(t.removeKdigits("1111111", 3), '1111')
# when num is too big
# str(int(''.join(stack))) is too long runtime
print(t.removeKdigits('10', 1), '0')
