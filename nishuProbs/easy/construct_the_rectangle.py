from typing import List
# A web developer needs to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:

# The area of the rectangular web page you designed must equal to the given target area.
    # web pag area == target area
# The width W should not be larger than the length L, which means
#   L >= W.
# The difference between length L and width W should be as small as possible.
    # as small as possible = L - W
# Return an array [L, W] where L and W are the length and width of the web page you designed in sequence.


# Example 1:
# Input: area = 4
# Output: [2,2]
# Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].
# But according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.

# Example 2:
# Input: area = 37
# Output: [37,1]
# Example 3:

# Input: area = 122122
# Output: [427,286]


# Constraints:

# 1 <= area <= 10^7
# IP: a target area
# OP: a list of the [L, W] side of rectangle
# C: must be target area, L >= W, min(diff) = L - W
# start with the Floor of the square root of target area
# If not equal move L up by one, divide from target to get W
# isinstance(#, int) -> return true if int

class Solution:
    def constructRectangle(self, area: int) -> List[int]:
        l = pow(area, 0.5)
        if l.is_integer():
            l = int(l)
        else:
            l = int(l) + 1

        w = area / l
        while not w.is_integer():
            l += 1
            w = area / l

        return [int(l), int(w)]

t = Solution()
# print(t.constructRectangle(4), [2,2])
# print(t.constructRectangle(37), [37,1])
# print(t.constructRectangle(122122), [427,286])
print(t.constructRectangle(2), [2,1])
print(t.constructRectangle(3), [3,1])
