from typing import List
# You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

# You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.



# Example 1:
# Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
# Output: [[7,4,1],[8,5,2],[9,6,3]]

# Example 2:
# Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
# Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]


# Constraints:

# n == matrix.length == matrix[i].length
# 1 <= n <= 20
# -1000 <= matrix[i][j] <= 1000

# I looked up a video: https://www.youtube.com/watch?v=Z0R2u6gd3GU
# optimal sol, is to transpose (making col rows, and row cols) each col to a row
# then reverse each row
# 1. Transpose
    # Diagnol from 0,0 to len,len - remain the same
    # swap number across diagnol
# 2. reverse each row's contents

# loop through either:
        # 01 02 03
        #    12 13
        #       23

        # 10
        # 20 21
        # 30 31 32
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix[0])

        for i in range(0, n-1):
            for j in range(i+1, n):
                # switch vals
                print(i, j)
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        # reverse each row

        for k in range(n):
            matrix[k].reverse()

        return matrix

# t = O(n^2)
# m = O(1),
# where n is the length of a row. Mainly comes from the .reverse?
# .reverse is constant memory
# t = 43ms 25.52% | m = 16.51Mb 43.04%


t = Solution()
d2 = [
    [1,2],
    [3,4]
    ]
d2ANS = [
    [3,1],
    [4,2]
]
# print(t.rotate(d2), d2ANS)
ip2 = [[5,1,9,11],
       [2,4,8,10],
       [13,3,6,7],
       [15,14,12,16]]
print(t.rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))

# ex2
# Trow > Rcol
# 5: 0,0 > 0,3
# 1: 0,1 > 1,3
# 9: 0,2 > 2,3
# 11: 0,3 > 3,3
# all js > max row len
# all is > go from zero > 0->row len

# Brow > Lcol
# 15: 3,0 > 0,0
# 14: 3,1 > 1,0
# 12: 3,2 > 2,0
# 16: 3,3 > 3,0
# all js > 0
# all is go from rowlen > 0 - rowLen

# Rcol > Brow
# 11: 0,3 > 3,3
# 10: 1,3 > 3,2
# 7 : 2,3 > 3,1
# 16: 3,3 > 3,0

# Lcol > Trow
# 15: 3,0 > 0,0
# 13: 2,0 > 0,1
# 2 : 1,0 > 0,2
# 5 : 0,0 > 0,3
# all j's 0 > 0-rowlen
# all is > zero
