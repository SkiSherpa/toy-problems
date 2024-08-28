# Given an m x n matrix, return all elements of the matrix in spiral order.

# Example 1:
# Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
# Output: [1,2,3,6,9,8,7,4,5]

# Example 2:
# Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
# Output: [1,2,3,4,8,12,11,10,9,5,6,7]

# Constraints:

# m == matrix.length
# n == matrix[i].length
# 1 <= m, n <= 10
# -100 <= matrix[i][j] <= 100
from typing import List

# always the first row added to results
# then go through the last element of every col
# then bottom row in reverse
# then first
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        col_end_index = len(matrix[0]) - 1
        row_start_index = 0
        row_end_index = len(matrix) - 1
        col_start_index = 0
        result_order = []

        # a single row
        if row_end_index == 0:
            return matrix[0]

        # rows of length one
        if col_end_index == 0:
            for row in matrix:
                result_order.append(row[0])
            return result_order

        # row/col = len(2)
        if col_end_index == 1 and row_end_index == 1:
            print('hit')
            return [matrix[0][0], matrix[0][1], matrix[1][1], matrix[1][0]]

        element_count = (row_end_index+1) * (col_end_index+1)
        # print(element_count)
        while row_start_index <= row_end_index and col_start_index <= col_end_index:
            for i in range(row_start_index, row_end_index):
                result_order.append(matrix[row_start_index][i])
            row_start_index += 1

            for i in range(row_start_index, row_end_index + 1):
                result_order.append(matrix[i][col_end_index])
            col_end_index -= 1

            if row_start_index <= row_end_index:
                for i in range(col_end_index, col_start_index - 1, -1):
                    result_order.append(matrix[row_end_index][i])
                row_end_index -= 1

            if col_start_index <= col_end_index:
                for i in range(row_start_index, row_end_index - 1):
                    result_order.append(matrix[i][col_start_index])

                col_start_index += 1

        # result_order.pop()
        return result_order


# test = [ [1], [4,5], [7,8]]
# del test[0]
# print(test[0]) # None
class Sol:
    def _spiralOrder(self, matrix):
        result = []
        if not matrix:
            return result

        top, bottom, left, right = 0, len(matrix) - 1, 0, len(matrix[0]) - 1

        while top <= bottom and left <= right:
            # Traverse from left to right along the top boundary
            for i in range(left, right + 1):
                result.append(matrix[top][i])
            top += 1

            # Traverse from top to bottom along the right boundary
            for i in range(top, bottom + 1):
                result.append(matrix[i][right])
            right -= 1

            if top <= bottom:
                # Traverse from right to left along the bottom boundary
                for i in range(right, left - 1, -1):
                    result.append(matrix[bottom][i])
                bottom -= 1

            if left <= right:
                # Traverse from bottom to top along the left boundary
                for i in range(bottom, top - 1, -1):
                    result.append(matrix[i][left])
                left += 1

        return result

# notes: top, left, right, bottom all are better names than what you did.
# otherwise it was the right approach.

# p = Sol()
# print(p._spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
# print([1,2,3,6,9,8,7,4,5])

# print(p._spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
# print([1,2,3,4,8,12,11,10,9,5,6,7])

# print(p._spiralOrder([[1,2]]))
# print([1,2])

# print(p._spiralOrder([[1,2], [3,4]]))
# print([1,2,3,4])

# print(p._spiralOrder([[1,2,3], [4,5,6]]))
# print([1,2,3,6,5,4])

t = Solution()
print(t.spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
print([1,2,3,6,9,8,7,4,5])

print(t.spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
print([1,2,3,4,8,12,11,10,9,5,6,7])

print(t.spiralOrder([[1,2]]))
print([1,2])

print(t.spiralOrder([[1,2], [3,4]]))
print([1,2,3,4])

print(t.spiralOrder([[1,2,3], [4,5,6]]))
print([1,2,3,6,5,4])

# I think is n or m is two my solution doesn't work at the moments
