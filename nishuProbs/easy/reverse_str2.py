# Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

# If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.


# Example 1:
# Input: s = "ab cd ef g", k = 2
# Output: "ba cd fe g"

# Example 2:
# Input: s = "abcd", k = 2
# Output: "bacd"


# Constraints:

# 1 <= s.length <= 10^4
# s consists of only lowercase English letters.
# 1 <= k <= 10^4
        # loop through s
            # keeping track of count for multiples of k
            # IF the count % k is zeor
                # add reverse letters to result
            # at a multiple of k add chunk to the result
class Solution:
    def reverseStr(self, s: str, k: int) -> str:
        result = []
        chunk = []
        for i, char in enumerate(s):
            chunk.append(char)
            # print(chunk, 'res', result, i+1, k)
            if (i+1) % k == 0:
                # print(i+1 % 2, i+1 % k)

                if (i+1) % k == 0:
                    chunk.reverse()
                new_chunk = ''.join(chunk)
                result.append(new_chunk)
                chunk = []

        end_chunk = ''.join(chunk)
        result.append(end_chunk)
        return ''.join(result)

class Sol:
    def reverseStr(self, s: str, k: int) -> str:
        result = []

        # Loop through the string in steps of 2k
        for i in range(0, len(s), 2 * k):
            # Get the current chunk (of at most 2k characters)
            chunk = s[i:i + 2 * k]

            # Reverse the first k characters
            reversed_chunk = chunk[:k][::-1] + chunk[k:]

            print(result, i, chunk, reversed_chunk)
            # Append the processed chunk to the result
            result.append(reversed_chunk)

        # Join all chunks and return the result
        return ''.join(result)

p = Sol()
print(p.reverseStr('abcdefg', 2) == "bacdfeg")
# print(p.reverseStr('abcdef', 3) == "cbadef")
# print(p.reverseStr('abcd', 2) == "bacd")
# t = Solution()
# print(t.reverseStr('abcdefg', 2),"bacdfeg")
# print(t.reverseStr('abcdef', 3), "cbadef")
# print(t.reverseStr('abcd', 2),"bacd")
# print(t.reverseStr('abcdefghijkl', 3),"cba def ghi lkj") # how I think it works
