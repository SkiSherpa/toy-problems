# You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

# Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

# Example 1:
# Input: flowerbed = [1,0,0,0,1], n = 1
# Output: true
# Example 2:
# Input: flowerbed = [1,0,0,0,1], n = 2
# Output: false


# Constraints:

# 1 <= flowerbed.length <= 2 * 104
# flowerbed[i] is 0 or 1.
# There are no two adjacent flowers in flowerbed.
# 0 <= n <= flowerbed.length
from typing import List
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        count = 0
        l = len(flowerbed)
        i = 0
        while i < l:
            if flowerbed[i-2] == 0 and flowerbed[i-1] == 0 and flowerbed[i] == 0:
                count += 1
                i += 3
            else:
                i += 1
            print(i, count)
        if flowerbed[l - 1] == 0 and flowerbed[l-2] == 0:
            count += 1
        if n <= count:
            return True
        return False

t = Solution()
# print(t.canPlaceFlowers([1,0,0,0,1], 1), True)
# print(t.canPlaceFlowers([1,0,0,0,1], 2), False)
# print(t.canPlaceFlowers([1,0,0,0,0,1], 2), False)
# print(t.canPlaceFlowers([1,0,0,0,0,0,1], 2), True)

class Sol:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        if n == 0:
            return True
        l = len(flowerbed)
        if l < 3:
            if l == 1 and flowerbed[0] == 0 and n <= 1:
                return True

            if l == 2 and n <= 1 and flowerbed[0] == 0 and flowerbed[1] == 0:
                return True
            return False

        if flowerbed[0] == 0 and flowerbed[1] == 0:
            flowerbed[0] = 1
            n -= 1
        for i in range(1, l-1):
            if flowerbed[i] == 0 and flowerbed[i-1] == 0 and flowerbed[i+1] == 0:
                flowerbed[i] = 1
                n -= 1
                if n <= 0:
                    return True

        if flowerbed[l-1] == 0 and flowerbed[l-2] == 0:
            n -= 1

        if n <= 0:
            return True

        return False
p = Sol()
# print(p.canPlaceFlowers([1,0,0,0,1], 1), True)
# print(p.canPlaceFlowers([1,0,0,0,1], 2), False)
# print(p.canPlaceFlowers([1,0,0,0,0,1], 2), False)
# print(p.canPlaceFlowers([1,0,0,0,0,0,1], 2), True)
# print(p.canPlaceFlowers([1,0,1,0,0,0,0], 2), True)
print(p.canPlaceFlowers([0,0], 1), True)

# t = O(n), where n is the length of flowerbed
# m = O(1), only a few variables made
# t = 131ms 63.48% | m = 16.90Mb 19.70%
