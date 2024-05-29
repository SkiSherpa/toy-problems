# The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

# Given two integers x and y, return the Hamming distance between them.


# Example 1:
# Input: x = 1, y = 4
# Output: 2
# Explanation:
# 1   (0 0 0 1)
# 4   (0 1 0 0)
#        ↑   ↑
# The above arrows point to positions where the corresponding bits are different.

# Example 2:
# Input: x = 3, y = 1
# Output: 1


# Constraints:

# 0 <= x, y <= 2^31 - 1

# bin(num) -> print out binary of num
# save binary of x and y
# find shorter of the two binary number
# find the difference of the two
# loop through to shortest of the two number
    # if the current vals are different make count go up
# add the different to count
class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        bi_x = format(x, 'b')  # Get binary representation without leading zeros
        bi_y = format(y, 'b')
        count = 0

        max_len = max(len(bi_x), len(bi_y))  # Find the length of the longer binary string
        bi_x = bi_x.zfill(max_len)
        bi_y = bi_y.zfill(max_len)

        for i in range(max_len):
            if bi_x[i] != bi_y[i]:
                count += 1

        return count

t = Solution()
print(t.hammingDistance(1,4), 2)
print(t.hammingDistance(4,14), 2)
# origianlly I had an if statement for the min(x,y) portiom
# t = O(n), where n is the length of the longer binary representation of x and y
# m = O(2n), where n is the length of the longer binary representation of x and y
# t = 38ms 32.45% | m = 16.52Mb 44.03%
