# The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

# For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
# Given an integer num, return its complement.


# Example 1:
# Input: num = 5
# Output: 2
# Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

# Example 2:
# Input: num = 1
# Output: 0
# Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.


# Constraints:

# 1 <= num < 2^31
# IP: an int
# OP: an int
# convert num to binary
# flip 1s and 0s
# convert back to int
class Solution:
    def findComplement(self, num: int) -> int:
        bi = bin(num)[2:]
        reverse = []
        for n in bi:
            if n == '0':
                reverse.append('1')
            else:
                reverse.append('0')
        bi_new_num = ''.join(reverse)
        new_num = int(bi_new_num, 2)
        return new_num

# t = O(n), where n is the length of binary rep of num
# m = O(n), where n is the length of binary rep of num
# t = 41ms 13.49% | m = 16.39Mb 96.21%

# this was my first idea,
# but I've been told that adding to an array, then .join is usually faster
# as .join is linear (n) and concating is a longer linear (n+m)
# but this is much faster
# t = 26ms 85.97% | m = 16.35Mb 96.21%
# The mem makes sense as an entire list isn't saved.
# I guess the additional loop coming from .join is taking up time
# I also assume that .join has the same concat runtime
class Sol:
    def findComplement(self, num: int) -> int:
        bi = bin(num)[2:]
        reverse = ''
        for n in bi:
            if n == '0':
                reverse = reverse + '1'
            else:
                reverse = reverse + '0'
        # bi_new_num = ''.join(reverse)
        new_num = int(reverse, 2)
        return new_num

t = Solution()
print(t.findComplement(5), 2)
print(t.findComplement(1), 0)

# gpt's reasoning for why the concat method is faster. It does agree that it is usually slower
# While the first solution should theoretically be more efficient due to better handling of immutable string operations, in practice, the overhead associated with list operations and the final join operation makes it slower in this specific case. For this particular problem, the second solution with direct string concatenation ends up being faster due to lower overall overhead and better performance with smaller strings.
