from typing import List

# You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

# Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

# The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.


# Example 1:
# Input: grid = [
# [0,1,0,0],
# [1,1,1,0],
# [0,1,0,0],
# [1,1,0,0]]
# Output: 16
# Explanation: The perimeter is the 16 yellow stripes in the image above.

# Example 2:
# Input: grid = [[1]]
# Output: 4

# Example 3:
# Input: grid = [[1,0]]
# Output: 4

# 1 sq = 4
# 2 sq = 6
# 3 sq = 3+3+2 = 8 || 3+2+3
# 4 sq = 3+3+2+2 = 10 || 2+2+2+2= 8

# loop through the list
# count side of each one found
# keep adding to the count
#
# IF on an edge, either i,j = 0, or i,j = len(row/col), = 1 side
# IF you have a zero above, right, bottom, left, each is 1 side
# IF surrounded by 1's then 0 sides

class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        count = 0
        rowLen = len(grid[0])
        colLen = len(grid)
        for i in range(rowLen):
            for j in range(colLen):
                above = -10
                right = -10
                bottom = -10
                left = -10
                # above
                if i - 1 >= 0:
                    above = grid[i-1][j]
                else:
                    above = 0

                # right
                try:
                    right = grid[i][j+1]
                except IndexError:
                    right = 0

                # bottom
                try:
                    bottom = grid[i+1][j]
                except IndexError:
                    bottom = 0
                # left

                if j - 1 >= 0:
                    left = grid[i][j-1]
                else:
                    left = 0


                if grid[i][j] == 1:
                    count += 4 - above - right - bottom - left

        return count


t = Solution()
print(t.islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]), 16)
# test = [[1,2,3],[4,5,6]]
# jest = test[0][3]
# print(jest) -> index Error
# Accessing an ele in a list, if i < 0, it will wrap around the list and return an ele
lst = [1, 2, 3]
# Valid negative index
# print(lst[-1])  # Output: 3
# Valid negative index
# print(lst[-2])  # Output: 2

# IndexError: list index out of range
# try:
#     print(lst[-4])  # lst has only 3 elements, index -4 is out of range
# except IndexError as e:
#     print(f"IndexError: {e}")

# IF i > len(lst) -> Throws IndexError
