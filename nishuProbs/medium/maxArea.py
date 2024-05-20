# You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

# Find two lines that together with the x-axis form a container, such that the container contains the most water.

# Return the maximum amount of water a container can store.

# Notice that you may not slant the container.

# Example 1:
# Input: height = [1,8,6,2,5,4,8,3,7]
# Output: 49
# Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

# Example 2:
# Input: height = [1,1]
# Output: 1


# Constraints:

# n == height.length
# 2 <= n <= 105
# 0 <= height[i] <= 10^4

# IP: a list of ints
# OP: an int - the largest area



# two pointers, r and l
# out to in - while l is smaller than r
    # IF l < r, height
        # l times the diff of r and l
        # comapre to largest_area
        # add one to left
    # otherwise,
        # r times diff of r and l
        # compare to largest_area
        # subtract one from r

# right fixed, left slides

# left fixed, right slide

# 3
# 1      3
# 2    2 6
#   [2,1,3]
# [
#     [],
#     [],
#     []
# # ]
# start at 1 go to end
# other on starts at zero
class Solution:
    def maxArea(self, height: list[int]) -> int:
        l = 0
        r = len(height) - 1
        largest_area = 0
        while l < r:
            diff = r - l # 8 - 1
            if height[l] < height[r]:
                cur_area = height[l] * diff
                if cur_area > largest_area:
                    largest_area = cur_area
                l += 1
            else:
                cur_area = height[r] * diff
                if cur_area > largest_area:
                    largest_area = cur_area
                r -= 1
        return largest_area

# t = O(n), where n is the number of values in height
# m = O(1),
# t = 439ms 98.98% | m = 29.59MB 65.29%

t = Solution()
print(t.maxArea([1,8,6,2,5,4,8,3,7]), 49)
print(t.maxArea([1,1]), 1)
