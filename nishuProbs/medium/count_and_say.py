# The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

# countAndSay(1) = "1"
# countAndSay(n) is the run-length encoding of countAndSay(n - 1).
# Run-length encoding (RLE) is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) with the concatenation of the character and the number marking the count of the characters (length of the run). For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15" and replace "1" with "11". Thus the compressed string becomes "23321511".

# Given a positive integer n, return the nth element of the count-and-say sequence.


# Example 1:
# Input: n = 4
# Output: "1211"
# Explanation:
# countAndSay(1) = "1"
# countAndSay(2) = RLE of "1" = "11"
# countAndSay(3) = RLE of "11" = "21"
# countAndSay(4) = RLE of "21" = "1211"

# Example 2:
# Input: n = 1
# Output: "1"
# Explanation:
# This is the base case.

# Constraints:
# 1 <= n <= 30

# Follow up: Could you solve it iteratively?

# recursion def way to go
# base - if n = 1, return "1"



# class Solution:
#     def _countAndSay(self, n: int) -> str:
#         # print('hit')
#         if n == 1:
#             return '1'
#         else:
#             str_num = self.countAndSay(n-1)
#             print(type(str_num))
#             cur_count = 0

#             # loop through each str number
#             for i in range(len(str_num)):
#                 print('i', i, cur_count)
#                 if i == 0:
#                     cur_count += 1
#                 elif str_num[i] != str_num[i - 1]:
#                     str_num = f"{cur_count}{str_num[i-1]}"
#                     cur_count = 0

#                 cur_count += 1
#                 if i == len(str_num) - 1:
#                     print('add at end')
#                     str_num = f"{cur_count}{str_num[i-1]}"


#             return str_num

# t = Solution()
# print(t.countAndSay(4), "1211")

class Sol:
    def countAndSay(self, n:int) -> str:
        if n == 1:
            return "1"
        else:
            prev_sequence = self.countAndSay(n - 1)

            result = []
            count = 1
            for i in range(len(prev_sequence)):
                if i + 1 < len(prev_sequence) and prev_sequence[i] == prev_sequence[i + 1]:
                    count += 1
                else:
                    result.append(str(count))
                    result.append(prev_sequence[i])
                    count = 1

            return ''.join(result)

# Example usage:
p = Sol()
n = 4
print(p.countAndSay(n))  # Output: "1211"
print(p.countAndSay(5)) # 1211 -> 11, 12, 21
