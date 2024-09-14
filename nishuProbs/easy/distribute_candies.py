# Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

# The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

# Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.


# Example 1:
# Input: candyType = [1,1,2,2,3,3]
# Output: 3
# Explanation: Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

# Example 2:
# Input: candyType = [1,1,2,3]
# Output: 2
# Explanation: Alice can only eat 4 / 2 = 2 candies. Whether she eats types [1,2], [1,3], or [2,3], she still can only eat 2 different types.

# Example 3:
# Input: candyType = [6,6,6,6]
# Output: 1
# Explanation: Alice can only eat 4 / 2 = 2 candies. Even though she can eat 2 candies, she only has 1 type.


# Constraints:

# n == candyType.length
# 2 <= n <= 10^4
# n is even.
# -10^5 <= candyType[i] <= 10^5
from typing import List
class Solution:
    def distributeCandies(self, candyType: List[int]) -> int:
        types = {}
        for t in candyType:
            if t in types:
                types[t] += 1
            else:
                types[t] = 1
        num_can_eat = int(len(types.keys()))
        can_eat = int(len(candyType) / 2)
        return min(num_can_eat, can_eat)


t = Solution()
# print(t.distributeCandies([1,1,2,2,3,3]), 3)
print(t.distributeCandies([1,1,2,3]), 2)
# print(t.distributeCandies([6,6,6,6]), 1)

# t = O(n), where n is the length of candyType, due to loop to make dict
    # IF you have to print the .keys() its linear, but if you don't print it, its O(1)
    # In this case the .keys() part is constant
# m = O(n), where n is the length of candyType
# t = 633ms 15.41% | m = 18.52Mb 88.27%
# ^^ I expected these two to be flipped in terms of %
