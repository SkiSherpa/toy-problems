# Given two binary strings a and b, return their sum as a binary string.

# Example 1:
# Input: a = "11", b = "1"
# Output: "100"

# Example 2:
# Input: a = "1010", b = "1011"
# Output: "10101"


# Constraints:

# 1 <= a.length, b.length <= 104
# a and b consist only of '0' or '1' characters.
# Each string does not contain leading zeros except for the zero itself.

# 1 + 1 = 10
# hold temp '10'
# 1 + 1 + temp = '11
# pad the shorter with zeros
# loop from the back of each num

class Solution:
    def addBinary(self, a: str, b: str) -> str:
        sum = ''
        max_len = max(len(a),len(b))
        # a = int(a)
        # b = int(b)
        a = a.zfill(max_len)
        b = b.zfill(max_len)

        temp = '0'
        print(a, b)
        for i in range(max_len - 1, -1, -1):
            print(i, 'sum', sum,'a', a[i], 'b', b[i], 'temp', temp,)
            cur_a = a[i]
            cur_b = b[i]
            cur_single = '0'
            # 1 + 1 + temp=1
            if cur_a == '1' and cur_b == '1' and temp == '1':
                temp = '1'
                cur_single = '1'
            # 1 + 0 and 0 + 1, temp=1
            elif cur_a == '1' and cur_b == '0' and temp == '1' or cur_a == '0' and cur_b == '1' and temp == '1':
                temp = '1'
                cur_single = '0'
            # 0+0 + temp=1
            elif cur_a == '0' and cur_b == '0' and temp == '1':
                temp = '0'
                cur_single = '1'

         # 1 + 1 + temp=0
            elif cur_a == '1' and cur_b == '1' and temp == '0':
                temp = '1'  # Carry is set to '1'
                cur_single = '0'  # Result of the addition is '0'

            # 1 + 0 and 0 + 1, temp=0
            elif cur_a == '1' and cur_b == '0' and temp == '0' or cur_a == '0' and cur_b == '1' and temp == '0':
                temp = '0'
                cur_single = '1'
            # 0+0 + temp=0
            elif cur_a == '0' and cur_b == '0' and temp == '0':
                temp = 0
                cur_single = '0'

            # adding to sum and end edge case of adding a one to front
            if i == 0 and temp == '1':
                sum = temp + cur_single + sum
            else:
                sum = cur_single + sum

        return sum

t = Solution()
# print(t.addBinary('11','1'), '100')
# print(t.addBinary('1010','1011'), '10101')
a92 = '100'
b92 = "110010"
# print(t.addBinary(a92, b92), "110110")
class Sol:
    def addBinary(self, a: str, b: str) -> str:
        # Align the numbers
        max_len = max(len(a), len(b))
        a = a.zfill(max_len)
        b = b.zfill(max_len)

        # Initialize variables
        sum = ''
        carry = 0

        # Iterate through the digits
        for i in range(max_len - 1, -1, -1):
            print('carry', carry)
            digit_sum = int(a[i]) + int(b[i]) + carry
            sum_digit = digit_sum % 2  # Determine the sum
            carry = digit_sum // 2  # Update the carry
            print('digit_sum', digit_sum, 'new carry', carry, 'sum_digit', sum_digit)

            sum = str(sum_digit) + sum  # Append the result
            print('new sum,', sum)
        # Handle final carry
        if carry == 1:
            sum = '1' + sum

        return sum

gpt = Sol()
print(gpt.addBinary(a92, b92), "110110")
