# An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).

# Given an m x n integer matrix img representing the grayscale of an image, return the image after applying the smoother on each cell of it.



# Example 1:
# Input: img = [[1,1,1],[1,0,1],[1,1,1]]
# Output: [[0,0,0],[0,0,0],[0,0,0]]
# Explanation:
# For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
# For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
# For the point (1,1): floor(8/9) = floor(0.88888889) = 0

# Example 2:
# Input: img = [[100,200,100],[200,50,200],[100,200,100]]
# Output: [[137,141,137],[141,138,141],[137,141,137]]
# Explanation:
# For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
# For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
# For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138


# Constraints:

# m == img.length
# n == img[i].length
# 1 <= m, n <= 200
# 0 <= img[i][j] <= 255
# Finding the avg for each cell from the 8 that suround it.
from typing import List
class Solution:
    def find_avg(self, img: List[List[int]], row: int, col: int) -> int:
        tot = 0
        top = 0
        target_row = row - 1
        target_col_start = col - 1
        # print(target_row, target_col, 'row', row, col)

        while target_row < row + 2:
            target_col = target_col_start
            while target_col < col + 2:
                # print('2nd hit', target_row, target_col)
                if target_row < 0 or target_col < 0 or target_row > 2 or target_col > 2:
                    # print('break hit')
                    target_col += 1
                    continue
                # print('cell val', img[target_row][target_col])
                else:
                    # print(img[target_row][ target_col], target_row, target_col)
                    tot += 1
                    top += img[target_row][target_col]
                    target_col += 1

                # print(target_col)
            target_row += 1
        # print(top, '/ ', tot)
        if tot != 0:
            return top // tot
        return 0

    def imageSmoother(self, img: List[List[int]]) -> List[List[int]]:
        res = [[1,1,1],[1,1,0],[0,0,0]]
        n = len(img[0])
        m = len(img)
        for row in range(n):
            for col in range(m):
                cur_avg = self.find_avg(img, row, col)
                res[row][col] = cur_avg
        return res

t = Solution()
print(t.imageSmoother([[1,1,1],[1,0,1],[1,1,1]]), [[0,0,0],[0,0,0],[0,0,0]])
print(t.imageSmoother([[100,200,100],
                       [200,50,200],
                       [100,200,100]]))
print([[137,141,137],[141,138,141],[137,141,137]])

class Sol:
    def imageSmoother(img: List[List[int]]) -> List[List[int]]:
        # Dimensions of the image
        m, n = len(img), len(img[0])

        # Directions for the 8 surrounding cells and the current cell
        directions = [(-1, -1), (-1, 0), (-1, 1),
                    (0, -1),  (0, 0),  (0, 1),
                    (1, -1),  (1, 0),  (1, 1)]

        # Result matrix
        # result = [[0] * n for _ in range(m)] # list comprehension
        result = []
        for _ in range(m):
            row = [0] * n  # Create a row of n zeros
            result.append(row)  # Add the row to the result matrix


        # Helper function to compute the average of a 3x3 grid around (r, c)
        def find_avg(r: int, c: int) -> int:
            total, count = 0, 0
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n:
                    total += img[nr][nc]
                    count += 1
            return total // count  # Integer division for rounding down

        # Apply the smoother to each cell
        for i in range(m):
            for j in range(n):
                result[i][j] = find_avg(i, j)

        return result

# t = O(9n) ~ O(n), where n is the number of cells in img
# m = O(n), where n is the number of cells in img, you need to make a matrix that has n number of cells to return
