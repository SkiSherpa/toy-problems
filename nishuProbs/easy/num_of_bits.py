# Write a function that takes the binary representation of a positive integer and returns the number of
# set bits
#  it has (also known as the Hamming weight).



# Example 1:
# Input: n = 11
# Output: 3
# Explanation:
# The input binary string 1011 has a total of three set bits.


# Example 2:
# Input: n = 128
# Output: 1
# Explanation:
# The input binary string 10000000 has a total of one set bit.


# Example 3:
# Input: n = 2147483645
# Output: 30
# Explanation:
# The input binary string 1111111111111111111111111111101 has a total of thirty set bits.



# Constraints:
# 1 <= n <= 2^31 - 1

# IP: an pos int
# OP: an int - number of 1's in binary rep of n

# turn n into binary form -> turn into string
# loop through string
    # add up all the ones
class Solution:
    def hammingWeight(self, n: int) -> int:
        str_num = str(bin(n)[2:])
        sum = 0
        for num in str_num:
            if num == '1':
                sum += 1
        return sum

t = Solution()
print(t.hammingWeight(11), 3)
print(t.hammingWeight(128), 1)
print(t.hammingWeight(2147483645), 30)

# t = O(n), where n is the length of n in binary
# this line: str_num = str(bin(n)[2:]) -> is t = O(log(n))
# runtime is O(n)
# m = O(1)
# t = 26ms 96.95% | 16.41Mb 87.12%
